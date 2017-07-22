/*jshint esversion: 6 */

class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
      console.log('Yo! My name is ' + this.name + ' and my fav color is ' + this.favoriteColor + '.');
  }
}

//NodeJS way for ES5
//module.exports = Person;

//ES6 way
export default Person;
