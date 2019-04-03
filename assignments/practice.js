
//ORIGINAL
// function Person(attributes) {
//     this.age = attributes.age;
//     this.name = attributes.name;
//     this.homeTown = attributes.homeTown;
//     this.speak = function () {                  *speak method directly on Person
//       return `Hello, my name is ${this.name}`;
//     };
//   }


// const fred = new Person({
//     age: 35,
//     name: 'Fred',
//     homeTown: 'Bedrock'
//   });
//   console.log(fred); console.log(fred.speak());

//In herits 

//Refactored with speak method in prototype

function Person(attrs) {
    this.age =attrs.age;
    this.name = attrs.name;
    this.homeTown=attrs.homeTown;
}

Person.prototype.speak = function () {              //Speak to prototype
    return ` Hello, my name is ${this.name}`;       // no longer on Fred. (its not on the constructor template for person)
}                                                   //Person "completely owns speak"

//Now able to pass down speak to each instance of Person without creating new properites on new objects.
//saving lots of memory and there was much rejoiceing. 

//LET'S MAKE BABIES.

function Child(childAttributes) {
    Person.call(this, childAttributes); // *explicit* binding this to person         ??????
    this.isChild = childAttributes.isChild; // this will be a special attribute to child... wtf??? 
}

//chaining to notify Child about Person to acces prototypes free later with class

Child.prototype=Object.create(Person.prototype);

const pebbles = new Child({
    age: 3,
    name:'Pebbles',
    homeTown: 'Bedrock',
});

pebbles.speak();