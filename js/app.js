'use strict';
console.log('Hello World');

//global variables
const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const allStores = [];


//constructor function

function CreateStore (name, min, max, cpc){
  //propertiers from arguments
  this.name = name;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.cookiesPerCustomer = cpc;

  //other properties
  this.cookiesSoldPerHour = [];

  //run on creation
  allStores.push(this);
  this.publish();
  this.publishBestHour();

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


//1. Stores created with constructor baby
let seattle = new CreateStore('Seattle', 23, 65, 6.3);
let tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
let dubai = new CreateStore('Dubai', 11, 38, 3.7);
let paris = new CreateStore('Paris', 20, 38, 2.3);
let lima = new CreateStore('Lima', 2, 16, 4.6);



console.log(allStores);
