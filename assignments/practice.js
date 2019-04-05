/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// my original version
// function GameObject(createdAt, name, dimensions) {
//   this.createdAt = createdAt,
//   this.name = name,
//   this.dimensions = dimensions,
//   this.destroy = function() {                     //review syntax of prototype method: WHY are function name and function keyword reversed??
//     `${this.name} was removed from the game.`
//   }
// }

//pair programmed version 
function GameObject(attrs) {
    this.createdAt = attrs.createdAt;            // NOTE:  Semi colons instead of commas:  // this is the template... $$$$$ it's not an object YET **$$$$$     
    this.dimensions = attrs.dimensions;          //we're just setting variables in the constructor/template.... 
  }                                              //when new GameObject is created, THAT object's key/value syntax
                                                 //will be key:value,   colon:comma, 
  //as prototype function
  GameObject.prototype.destroy=function() {             //creating destroy method on the GameObject's (template) prototype
     return `${this.name} was removed from the game.`   
  }
  
  //NOTE: new Date();
  //New date @line 39 was a great idea and cool tool, 
  //but could cause conflict in this use case 
  //b/c data is coming in from object attrs upon `const newObj = New GameObject()`  {attrs}
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * name     // from other version/deleted?
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * 
    * 
    * ????????????
    * should inherit destroy() from GameObject's prototype                                                        // ???????????
  */
  
  function CharacterStats (attrs) {
    GameObject.call(this, attrs);                          // calling to set up inheritance of "key: value template$$$$$$$$$" 
    this.healthPoints= attrs.healthPoints;
    this.name = attrs.name;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);    //"link" line of code. the constructor you're creating is first
                                                                      //you're passing in gameobject.prototype to copy into charstat prototype.
                                                                      //type in english in notes.  //he Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
  
    // this.takeDamage = function () {                    // 74- 77 was my original method on CharacterStats
    //   return `${this.name} took damage.`               //this.`functionName` = function `()` {codeblock}         Syntax note
    // }
  
  //CharacterStats takeDamage as prototype
  CharacterStats.prototype.takeDamage=function () {          //THIS { was throwing error in console b/c did not say "=function" 
    return `${this.name} took damage.`
  }
  // call game object in characterStats  will attach CharacterStats to GameObject
  // so when you do NEW game object it will know about CharacterStats 
  ////////////////////////////////
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * 
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  function Humanoid (attrs) {
    CharacterStats.call(this,attrs);                                            //copy pasting kinda blindly here...              //but seems to be doing something
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
    // this.greet= function() {                                                   //My original method for .greet
    //   return `${this.name} offers a greeting in ${this.language}`
    // }
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);                   //SET UP PROTOTYPE INHERITANCE
  
  
  //.greet as prototype function on Humanoid prototype
  Humanoid.prototype.greet =function() {
    return `${this.name} offers a greeting in ${this.language}`
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
              // Start with GameObject = no inheritance because no parent
              // call GameObject in CharacterStats, before the rest of the template.   (line 67 I believe)
              // Create the prototype functions for Character Stats
              // Set up inheritance for Humanoid
                    // call characterStats  =  then humanoid will automatically get GameObject
                    //
                    //
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.