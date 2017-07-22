/*jshint esversion: 6 */

const $ = require('jquery');

//NodeJS way for ES5
//const Person = require('./modules/Person');

//ES6
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes.');
  }
}

//alert("testing 456");

const john = new Person('John Doe', 'blue');
const jane = new Adult('Jane Smith', 'red');
john.greet();
jane.greet();
jane.payTaxes();

//$('h1').remove();

/* In this file, webpack calls jquery from an npm install; no need to call it
in the browser */
