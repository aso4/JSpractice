/* functions */
// can be simple as

let a = function() { // this is anonymous
}

a // prints function: a

/* also */

function a() {

}

a // prints function: a

(function a() {
  4
})

// returns 4, wrapping in parens causes it to evaluate

() => {} // this is also a function

(() => { return 4 })() // wrapped and called

/* params */
let a = (value) => { return value }

// params are optional, can still call a()

// similarly
let a = (value, valuetwo) => { return value + valuetwo }

let arr = [5, 10, 15]
a(...arr) // spread syntax

// pass function into function call
a(a(3, 5), a(1, 2)) // returns 11

/* Classes */
let Animal = function(species, sound) {
  this.species = species
  this.sound = sound
}

let Dog = new Animal('dog', 'bark')

Dog.species // returns dog

// prototype allows for auto-overriding of parent class methods, if they exist
Animal.prototype.food = ''

Dog.food = 'Bones'

Dog.food // returns Bones

Array.prototype.sum = function() {
  return "sample return statement"
}

let arr = [1,2,3]
arr.sum() // returns "sample return statement"

/* using object notation. hash */
let Animal = {
  name: 'foo',
  sound: 'bar'
}

Animal.name // returns foo

let Dog = new Animal() // doesn't work with object notation

typeof(Animal) // returns 'object'

let Animal2 = function(name, sound) {
  this.name = name
  this.sound = sound
}

typeof(Animal2) // returns function

let Dog = new Animal2('dog', 'woof')
typeof(Dog) // returns object

/* Class notation */
class Animal {
  constructor(name, sound) { // pre-defined in class
    this.name = name
    this.sound = sound
  }
  
  speak() {
    return this.sound
  }
}

let Dog = new Animal('dog', 'bark')

Dog // returns Animal()

console.log(typeof(Animal)) // returns function

Dog.speak() // returns bark

// can define functions after class is defined
Dog.bite = function() {
  console.log("bitten")
}

/* using extends */
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound)
  }
}

let dog = new Dog('Spot', 'woof')

dog.name // returns Spot

/* addressing 'this' reserved word */

class Box {
  constructor(side) {
    this.side = side;
  }
  
  volume() {
    return Math.pow(this.side, 3); // can't be accessed via just "side"
  }
}

let box = new Box(5)
box.volume // returns 125

/* challenge - let Bird be an object with a function fly that returns true */
let Bird = {
    fly() {
        return true;
    }
}

/* module exports and require. addressing in repl */
// util.js
module.exports = {
  saySomething: function(message) { // : sets as property of export
    console.log(message)
  }
}

// index.js
let Util = require('./util')
let Data = require('./data')
Util.saySomething("I'm giving up on you")
Util.saySomething(Data.name) // prints Evgeny

console.log(Data) // prints json as json, conversion or serialization needed

// data.json
{ "name" : "Evgeny", "hobbies": "JavaScript" }

// continued
import {Dog, Cat} from ('./animals') // import multiple exports from file

/* import non-default exports */
import {Dog} from ('./animals')

/* local import */
import Animal from ('./animals')

