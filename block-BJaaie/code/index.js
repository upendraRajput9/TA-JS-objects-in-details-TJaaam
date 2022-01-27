/**
 
Animal.prototype = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`)
  },
  changeLocation: function (newLocation) {
    this.location = newLocation
  },
  summary: function () {
    return `I live in ${thislocation} and I have ${this.numberOfLegs}`
  },
}
function Animal(location, numberOfLegs) {
  this.location = location
  this.numberOfLegs = numberOfLegs
}

// dog
function Dog(location, numberOfLegs, name, color) {
  Animal.apply(this,[location, numberOfLegs])
  this.name = name
  this.color = color
}

Dog.prototype = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`)
  },
  changeName: function (newName) {
    this.name = newName
  },
  changeColor: function (newColor) {
    this.color = newColor
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  },
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype)

// cat

function Cat(location,numberOfLegs,name,colorOfEyes){
    Animal.apply(this,[location, numberOfLegs])
    this.name=name;
    this.colorOfEyes=colorOfEyes;
    }
    
    
Cat.prototype={
    meow: function(){
alert(`I am ${thisname} and I can do mewo meow 😹`)
    },
    changeName: function(newName){
        this.name=newName;
    },
    changeColor: function(newColor){
        this.colorOfEyes=newColor;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}
Object.setPrototypeOf(Cat.prototype, Animal.prototype)

**/

// CLASS

class Animal{
    constructor(location, numberOfLegs) {
        this.location = location
        this.numberOfLegs = numberOfLegs
      }
      eat() {
        console.log(`I live in ${this.location} and I can eat`)
      }
      changeLocation(newLocation) {
        this.location = newLocation
      }
      summary() {
        return `I live in ${thislocation} and I have ${this.numberOfLegs}`
      }
}




// dog
class Dog extends Animal{
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs)
        this.name = name
        this.color = color
      }
      bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
      }
      changeName(newName) {
        this.name = newName
      }
      changeColor(newColor) {
        this.color = newColor
      }
      summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
      }
}


// cat
class Cat extends Animal{
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs)
        this.name = name
        this.colorOfEyes = colorOfEyes
      }
      meow() {
        alert(`I am ${thisname} and I can do mewo meow 😹`)
      }
      changeName(newName) {
        this.name = newName
      }
      changeColor(newColor) {
        this.colorOfEyes = newColor
      }
      summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
      }
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype)
