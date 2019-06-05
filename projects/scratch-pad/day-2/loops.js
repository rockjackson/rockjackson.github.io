// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length -1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
// var obj = {
//   nameFirst: "ben",
//   nameLast: "spector"
// }
 
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // plant - declare a variable with an empty value of the TYPE you're returning
  var toReturn = [];
  
  // water
  for (var key in object) {
    // make toReturn grow
    // loop 1: key = "nameFirst"
    // loop 2: key = "nameLast"
    toReturn.push(key);
  }
  // harvest
  return toReturn;
  
  // YOUR CODE ABOVE HERE //
} 

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  var arr = getObjectKeys(object);
  printArrayValues(arr);
  // YOUR CODE ABOVE HERE //
} 

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var getObjVal = [];
  for (var key in object) {

    getObjVal.push(object[key]); // perfect!
  
  }
  return getObjVal;
  
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var objVal = getObjectValues(object);
  printArrayValues(objVal);
  
  // something that I'm hoping for you all to get out of these 
  // functions is to see how we can use functions to transform
  // data from one type to another so that we can make use of
  // different functions / methods / properties of the new type.
  
  // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input Object, return the length of its key/value pairs
 * this just means return how many key/value pairs the object has
 * 
 * How might you count the number of keys / values as you are looping?
 * .length is a useful properties that tells us how many things are in
 * an Array. So, depending on how you write your code that could be very useful!
 * 
 * wait, slow down a second. Remember that we are still dealing with an object
 * so we have to use a for-in loop if we want to iterate. If we can turn the
 * object into an Array, we can then use .length to measure the size of the array
 * but we first need to make it into an Array. ok
 */
 
  
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var getObjLen = [];
  for(var key in object) {
    getObjLen.push(object[key]);
  }
  return getObjLen.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var rev = [];
  for (var key in object) {
    rev.push(object[key]);
  }
  
                            // just change this to >=!
  for (var i = rev.length - 1; i >= 0; i--) {
    console.log(rev[i]);
  }

  // very close!
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
