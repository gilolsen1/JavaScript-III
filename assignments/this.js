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

/*


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

//constructor function example form TK for practice

function CordialPerson(greeter) {                   //CordialPerson is a constructor function that takes in a "greeter". 
    this.greeting = "Hello";                           //No cordial people exist. this function is how we make them.
    this.greeter= greeter; //why 
    this.speak= function() {
        console.log(this.greeting +this.greeter);   //logs the actual phrase
        console.log(this);                           //logs the entire object ie. "CordialPerson {greeting: "Hello", greeter: "Newman", speak: ƒ}"
    }
}

const jerry= new CordialPerson("Newman");       //creating new people (jerry here) by declaring a variable, then invoking the constructor function
const newman= new CordialPerson("Jerry");       //creating newman

newman.speak();                                //newman from line56 exists, we're invoking the .speak() method.
jerry.speak();
console.log("NOTE:I typed out the TK example for practice: super helpful: my example below.") 
//My example of NEW keyword binding

function Cookiemonster(name, quantity, cookieType) {
    this.name= name,                                    
    this.cookieType = cookieType,
    this.quantity= quantity,
    this.eatsCookies= function() {
        console.log(`${this.name}  gonna eat all ${this.quantity} of dem ${this.cookieType} cookies! YUM!! `);
        console.log(this);
    }
}

const gil= new Cookiemonster("gil", 50, "chocolate chip");
gil.eatsCookies();
console.log(this);
const kira= new Cookiemonster("kira", 5, "oatmeal raisin");
kira.eatsCookies();



// Principle 4

//Whenever .call (for individual arguments) and .apply (for array arguments) are used, 
//the first argument in that function is THIS.

// code example for Explicit Binding
//TK example:
jerry.speak.call(newman); 
console.log(this);
console.log("see above test");

//MY EXAMPLE
gil.eatsCookies.call(kira);
console.log("gil.eatsCookies is getting called above, but call is over-riding this in that obejct to parameters from const kira line 76")
//extra test for understanding
gil.eatsCookies.call(newman);
//"call is explicitly defining newman as this- 
//since newman line 56 creates new cordial person, only has jerry as parameter, eatsCookies doesn't know what to do with it and throws undefined



UNCOMMMENT THE WRAPPER COMMENT AFTER FINISHING PROTYPES
*/



