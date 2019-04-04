

/*
  Object oriented design is commonly used in video games.  
  //For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: 
  
  1 GameObject, 
  2 CharacterStats, 
  3 Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
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
  this.createdAt = attrs.createdAt;            // NOTE:  Semi colons instead of commas:
  this.name = attrs.name;                      // this is the template... $$$$$ it's not an object YET **$$$$$
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
  //CALL GAME OBJECT HERE TO SET UP INHERITANCE
  this.healthPoints= attrs.healthPoints;
  this.name = attrs.name;
  this.takeDamage = function () {                   //this.`functionName` = function `()` {codeblock}         Syntax note
    return `${this.name} took damage.`
  }
}

// call game object in characterStats  will attach CharacterStats to GameObject
// so when you do NEW game object it will know about CharacterStats 





/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * 
  * 
  * 
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (team, weapons, language) {
  this.team = team,
  this.weapons = weapons,
  this.language = language,
  this.greet= function() {
    return `${this.name} offers a greeting in ${this.language}`
  }
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
*/

//NEXT ACTION ITEM:
//GIL'S ATTEMPT AT INHERITANCE:





// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!








  