'use strict';
console.log('Hello World');

//1. Create object literals to represent each store
let seattle = {
  //properties
  name: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  cookiesPerCustomer: 6.3,
  cookiesSoldPerHour: [],

  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  //function to fill cookies soler per hour array
  completeDay: function(){
    for (let i = 0; i < 14; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
    }
    return this.cookiesSoldPerHour;
  },
  maxSold: function(){
    let output = 0;
    let hour = '';
    for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
      if (this.cookiesSoldPerHour[i] > output){
        output = this.cookiesSoldPerHour[i];
        hour = hoursOpen[i];
      }
    }
    return `${hour}:${output}`;
  },

};
let tokyo = {
  //properties
  name: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  cookiesPerCustomer: 1.2,
  cookiesSoldPerHour: [],
  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  //function to fill cookies soler per hour array
  completeDay: function(){
    for (let i = 0; i < 14; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
    }
    return this.cookiesSoldPerHour;
  },
  maxSold: function(){
    let output = 0;
    let hour = '';
    for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
      if (this.cookiesSoldPerHour[i] > output){
        output = this.cookiesSoldPerHour[i];
        hour = hoursOpen[i];
      }
    }
    return `${hour}:${output}`;
  },

};
let dubai = {
  //properties
  name: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  cookiesPerCustomer: 3.7,
  cookiesSoldPerHour: [],
  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  //function to fill cookies soler per hour array
  completeDay: function(){
    for (let i = 0; i < 14; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
    }
    return this.cookiesSoldPerHour;
  },
  maxSold: function(){
    let output = 0;
    let hour = '';
    for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
      if (this.cookiesSoldPerHour[i] > output){
        output = this.cookiesSoldPerHour[i];
        hour = hoursOpen[i];
      }
    }
    return `${hour}:${output}`;
  },

};
let paris = {
  //properties
  name: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  cookiesPerCustomer: 2.3,
  cookiesSoldPerHour: [],
  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  //function to fill cookies soler per hour array
  completeDay: function(){
    for (let i = 0; i < 14; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
    }
    return this.cookiesSoldPerHour;
  },
  maxSold: function(){
    let output = 0;
    let hour = '';
    for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
      if (this.cookiesSoldPerHour[i] > output){
        output = this.cookiesSoldPerHour[i];
        hour = hoursOpen[i];
      }
    }
    return `${hour}:${output}`;
  }

};
let lima = {
  //properties
  name: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  cookiesPerCustomer: 4.6,
  cookiesSoldPerHour: [],
  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  //function to fill cookies soler per hour array
  completeDay: function(){
    for (let i = 0; i < 14; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.cookiesPerCustomer * this.calculateCustomersPerHour()));
    }
    return this.cookiesSoldPerHour;
  },
  maxSold: function(){
    let output = 0;
    let hour = '';
    for (let i = 0; i < this.cookiesSoldPerHour.length; i ++){
      if (this.cookiesSoldPerHour[i] > output){
        output = this.cookiesSoldPerHour[i];
        hour = hoursOpen[i];
      }
    }
    return `${hour}:${output}`;
  },

};

//global variables
const hoursOpen = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const allStores = [seattle, tokyo, dubai, paris, lima];

//function to publish cookies sales in sales.html
//initial for lo oop is to fill each stores day of sales array
// then the function: 1. runs through each store 2. adds <li> into html for that store that contains hour from hoursOpen array and the cookies sold in that hour from the given stores property
function publish () {
  for (let i = 0; i < allStores.length; i++){
    allStores[i].calculateCustomersPerHour();
    allStores[i].completeDay();
  }
  let li;
  let total = 0;
  for (let i = 0; i < allStores.length; i++){
    let store = document.getElementById(allStores[i].name);
    console.log(store);
    for (let k = 0; k < hoursOpen.length; k++){
      li = document.createElement('li');
      store.appendChild(li);
      li.innerHTML = `${hoursOpen[k]}: ${allStores[i].cookiesSoldPerHour[k]}`;
      total = total + allStores[i].cookiesSoldPerHour[k];
    }
    li = document.createElement('li');
    store.appendChild(li);
    li.innerHTML = `Total: ${total}`;
    total = 0;
    li = '';
  }

}

//function will publish just totals for each store into the aside menu on sales.html
//steps: 1. create property (totalSold = 0) in each object for their totals (will be written to in publish for-loop) 2. function here will write values from allStores[i].totalSold into an <ol> in aside for each day

function publishBestHoursEachStore(){
  for (let i = 0; i < allStores.length; i++){
    let e = document.getElementById('totals-max-hour');
    let li = document.createElement('li');
    li.innerHTML = `${allStores[i].name}: ${allStores[i].maxSold()}`;
    e.appendChild(li);
  }
}

//--------proofs of life below--------
// console.log(seattle.calculateCustomersPerHour());
// console.log(tokyo.calculateCustomersPerHour());
// console.log(seattle.completeDay());
// console.log(tokyo.completeDay());

publish();
publishBestHoursEachStore();



