'use strict';
console.log('Hello World');


//1. Create object literals to represent each store

let seattle = {
  //properties
  name: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  cookiesPerCustomer: 6.3,
  //methods
  //generates random number of customers per hour
  calculateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  }

};
//2. use method to generate random number of customers per hour
console.log(seattle.calculateCustomersPerHour());
