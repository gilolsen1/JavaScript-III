/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attrs) {
    this.createdAt = attrs.createdAt;            
    this.dimensions = attrs.dimensions;         
  }                                             
  GameObject.prototype.destroy=function() {
     return `${this.name} was removed from the game.`   
  }
  /*
    === CharacterStats ===
    * healthPoints
    * name     // from other version/deleted?
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype                                     
  */
  function CharacterStats (attrs) {
    GameObject.call(this, attrs);                          
    this.healthPoints= attrs.healthPoints;
    this.name = attrs.name;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);    

  CharacterStats.prototype.takeDamage=function () { 
    return `${this.name} took damage.`
  }
 
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
    CharacterStats.call(this,attrs);                                                     
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);                 
  
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