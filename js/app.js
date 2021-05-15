'use strict';
console.log('Hello World');

//global variables
const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let allStores = [];


//constructor function

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
  allStores.push(this);
  // this.publish();

  this.completeDay();
  this.publishBestHour();

  this.calcTotalDaySales();
  this.publishTableBody();

}

//prototype methods
CreateStore.prototype.calculateCustomersPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
};

CreateStore.prototype.completeDay = function(){
  for (let i = 0; i < 14; i++){
    this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
  }
  return this.cookiesSoldPerHour;
};

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

CreateStore.prototype.publish = function(){
  this.calculateCustomersPerHour();
  this.completeDay();
  let li;
  let total = 0;
  let store = document.getElementById(this.name);
  console.log(store);
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

CreateStore.prototype.publishBestHour = function (){
  let e = document.getElementById('totals-max-hour');
  let li = document.createElement('li');
  li.innerHTML = `${this.name}: ${this.maxSold()}`;
  e.appendChild(li);

};

CreateStore.prototype.publishTableBody = function(){
  let e = document.getElementById('table-body');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = (this.name);
  tr.appendChild(td);
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++){
    let td = document.createElement('td');
    td.innerHTML = `${this.cookiesSoldPerHour[i]}`;
    tr.appendChild(td);
    console.log('inside publish table body function');
  }
  td = document.createElement('td');
  td.innerHTML = this.totalSoldInDay;
  tr.appendChild(td);
  e.appendChild(tr);
};

CreateStore.prototype.calcTotalDaySales = function(){
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++){
    this.totalSoldInDay += this.cookiesSoldPerHour[i];
  }
  console.log(this.totalSoldInDay);
};


//1. Stores created with constructor baby
// eslint-disable-next-line no-unused-vars
let seattle = new CreateStore('Seattle', 23, 65, 6.3);
// eslint-disable-next-line no-unused-vars
let tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
let dubai = new CreateStore('Dubai', 11, 38, 3.7);
// eslint-disable-next-line no-unused-vars
let paris = new CreateStore('Paris', 20, 38, 2.3);
// eslint-disable-next-line no-unused-vars
let lima = new CreateStore('Lima', 2, 16, 4.6);

//helper functions

function publishTableHead(){
  let e = document.getElementById('table-head');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = ('City');
  tr.appendChild(td);
  for (let i = 0; i < hoursOpen.length; i++){
    td = document.createElement('td');
    td.innerHTML = `${hoursOpen[i]}`;
    tr.appendChild(td);
    console.log('inside table function');
  }
  td = document.createElement('td');
  td.innerHTML = ('Store Total');
  tr.appendChild(td);
  e.appendChild(tr);
  
}

function hourlyTotals(arr){
  let outputArray = new Array(14).fill(0);
  for (let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr[i].cookiesSoldPerHour.length; k++){
      outputArray[k] = outputArray[k] + arr[i].cookiesSoldPerHour[k];
    }
  }
  return outputArray;
}

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
