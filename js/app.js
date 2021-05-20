'use strict';
//global variables
const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let allStores = [];

//---constructor function---

function CreateStore (name, min, max, cpc){
  //propertiers from arguments
  this.name = name;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.cookiesPerCustomer = cpc;

  //other properties
  this.cookiesSoldPerHour = [];
  this.totalSoldInDay = 0;

  //run on creation
  allStores.push(this); //object pushed to allStores array
  this.completeDay(); //fills a "day" of sale
  this.publishBestHour(); //publishes best hour of sales in aside
  this.calcTotalDaySales();
  this.publishTableBody(); //publishes sales into body of html table

}

//----prototype methods----

//function uses random() to calcuale customers per hour
CreateStore.prototype.calculateCustomersPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
};
//pushes into cookiessoldperhour array using our calcualte customers per hour function.  Completes a full "day"
CreateStore.prototype.completeDay = function(){
  for (let i = 0; i < hoursOpen.length; i++){
    this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
  }
  return this.cookiesSoldPerHour;
};
//function maxSold finds the objects single most profitable hour
CreateStore.prototype.maxSold = function(){
  let output = 0;
  let hour = '';
  for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
    if (this.cookiesSoldPerHour[i] > output){
      output = this.cookiesSoldPerHour[i];
      hour = hoursOpen[i];
    }
  }
  return `${hour}:${output}`;
};
//function not needed post lab7.  Was used to fill each stores card with sales info
CreateStore.prototype.publish = function(){
  this.calculateCustomersPerHour();
  this.completeDay();
  let li;
  let total = 0;
  let store = document.getElementById(this.name);
  for (let k = 0; k < hoursOpen.length; k++){
    li = document.createElement('li');
    store.appendChild(li);
    li.innerHTML = `${hoursOpen[k]}: ${this.cookiesSoldPerHour[k]}`;
    total = total + this.cookiesSoldPerHour[k];
  }
  li = document.createElement('li');
  store.appendChild(li);
  li.innerHTML = `Total: ${total}`;
  total = 0;
  li = '';
};
//uses maxSold to publish stores best hour into our html aside that has "stats"
CreateStore.prototype.publishBestHour = function (){
  let e = document.getElementById('totals-max-hour');
  let li = document.createElement('li');
  li.innerHTML = `${this.name}: ${this.maxSold()}`;
  e.appendChild(li);

};
//function creates row for the given object and fills it with the objects daily sales info from completeDay function
CreateStore.prototype.publishTableBody = function(){
  let e = document.getElementById('table-body');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = this.name;
  tr.appendChild(td);
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++){
    let td = document.createElement('td');
    td.innerHTML = `${this.cookiesSoldPerHour[i]}`;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.innerHTML = this.totalSoldInDay;
  tr.appendChild(td);
  e.appendChild(tr);
};
//iterates through cookiesSoldPerHour for object and returns the sum as property (totalSoldInDay) of object
CreateStore.prototype.calcTotalDaySales = function(){
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++){
    this.totalSoldInDay += this.cookiesSoldPerHour[i];
  }
};


//1. Stores created with constructor baby
//2. On construction, multiple methods are run. See constructor function for details. Objects are also pushed to allStores array upon creation
new CreateStore('Seattle', 23, 65, 6.3);
new CreateStore('Tokyo', 3, 24, 1.2);
new CreateStore('Dubai', 11, 38, 3.7);
new CreateStore('Paris', 20, 38, 2.3);
new CreateStore('Lima', 2, 16, 4.6);

//helper functions
//creates elements for table head and publishes in sale.html
function publishTableHead(){
  let e = document.getElementById('table-head');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = 'City';
  tr.appendChild(td);
  for (let i = 0; i < hoursOpen.length; i++){
    td = document.createElement('td');
    td.innerHTML = `${hoursOpen[i]}`;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.innerHTML = ('Store Total');
  tr.appendChild(td);
  e.appendChild(tr);
}
//creates array that stores hourly total for all stores combined
//outer loop iterates through array passed in as argument. inner loop totalies each index with that stores respective index (+=).
function hourlyTotals(arr){
  let outputArray = new Array(hoursOpen.length + 1).fill(0);
  let grandTotal = 0;
  for (let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr[i].cookiesSoldPerHour.length; k++){
      outputArray[k] = outputArray[k] + arr[i].cookiesSoldPerHour[k];
      grandTotal += arr[i].cookiesSoldPerHour[k];
    }
  }
  outputArray[outputArray.length - 1] = grandTotal;
  return outputArray;
}
//function creates table foot row and cells. Before loop, we creat a cell title that sits beneath the cells with each city name.
function publishTableFoot(arr){
  let e = document.getElementById('table-foot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = ('Hourly Totals');
  tr.appendChild(td);
  for (let i = 0; i < arr.length; i++){
    td = document.createElement('td');
    td.innerHTML = `${arr[i]}`;
    tr.appendChild(td);
  }
  e.appendChild(tr);
}


publishTableHead();
publishTableFoot(hourlyTotals(allStores));
