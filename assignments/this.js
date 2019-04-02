/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  WINDOW BINDING: The default binding is to the window, or browswer.  Can be over-written by using "use strict"... 
* 2.  IMPLICIT: Whatever is to the left of the `.` in the dot notation invocation of a function is 'this'
* 3.  NEW KEYWORD BINDING:  When we create a NEW object with the NEW keyword, 'this' refers to 'THAT' *new* object. 
* 4.  EXPLICIT BINDING:  .call or .apply method's first argument is to explicitly refer to "this".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj= {
    name: "Gil",
    age: "35",
    company: "Lambda School",
    saying: "This log is implicit.",
    saysHi: function () {
        console.log(`Hi my name is ${this.name}, I work at ${this.company}.  ${this.saying}`)
    }
}
myObj.saysHi();


// Principle 3

// code example for New Binding

// function newStudent(question) {     //CAPITAL LETTER FOR CONSTRUCTOR FUNCTION
//     this.firstQuestion = "wait... wtf is this?",   //this.key = value
//     this.
// }

//



function CordialPerson(greeter) {                   //CordialPerson is a constructor function that takes in a "greeter". 
    this.greeting = "Hello";                           //No cordial people exist. this function is how we make them.
    this.greeter= greeter; //why 
    this.speak= function() {
        console.log(this.greeting +this.greeter);   //logs the actual phrase
        console.log(this);                          //logs the entire object ie. "CordialPerson {greeting: "Hello", greeter: "Newman", speak: ƒ}"
    }
}

const jerry= new CordialPerson("Newman");       //creating new people (jerry here) by declaring a variable, then invoking the constructor function
const newman= new CordialPerson("Jerry");       //creating newman

newman.speak();                                //newman from line56 exists, we're invoking the .speak() method.
jerry.speak();

// Principle 4

// code example for Explicit Binding