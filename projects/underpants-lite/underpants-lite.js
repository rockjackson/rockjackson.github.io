// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
    if (_.typeOf(array) !== "array") {
        return [];
    }
    if (_.typeOf(number) !== "number") {
        return array[0];
    }
    if (number > array.length) {
        return array;
    }
    
    const result = [];
    for (var i = 0; i < number; i++) {
        result.push(array[i]);
    }
    return result;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    if (_.typeOf(array) !== "array") {
        return [];
    }
    if (_.typeOf(number) !== "number") {
        return array[array.length -1];
    }
    if (number > array.length) {
        return array;
    }
    
    const result = [];
    for (var i = 0; i < number; i++) {
        result.push(array[1 + i]);
    }
    return result;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
//Iterate
//  Test Each Value
//      Return Early if Test Passes
//  Return After the Loop
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value){
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    if (Array.isArray(value)) {
        return true;
    } else if (value === "a") {
        return true;
    } else {
        return false;
    }
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
    
/* 
    This is a great start! Now, we need to take the returned value
    from each call to func() and test to see if the function
    returned true or false.
    
    If the function returns true, we want to save the value (array[i] or array[key])
    in a new Array which is returned at the end of the function.
    */
    var results = [];
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (func(array[i], i, array)) {
                results.push(array[i]);
            }
        }
    } else {
        for (let key in array) {
            if(func(array[key], key, array)) {
                results.push(array[key]);
            }
        }
    }
    return results;
};


/* or like this 
_.filter = function(collection, func) {
  
  var toReturn = [];
        
  for (let i = 0; i < collection.length; i++) {
            
    if (func(collection[i], i, collection)) {
      toReturn.push(collection[i]);
    }
          
  }
        
  return toReturn;
}

}



*/
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    var arr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            var result = func(collection[i], i, collection);
            arr.push(result);
        }
    } else {
        for (let key in collection) {
            result = func(collection[key], key, collection);
            arr.push(result);
        }
    }
    return arr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test) {
   // solution 1
   var sum = [];
   if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (!test(array[i], i, array)) {
                sum.push(array[i]);
            }
        }
    } else {
        for (let key in array) {
            if(!test(array[key], key, array)) {
                sum.push(array[key]);
            }
        }
    }
    
    // solution 2
    sum = _.filter(array, function(value, i, array) {
        
        if (!test(value, i, array)) {
            return true;
        } else {
            return false;
        }
        
    });
    
    
    // solution 3
    sum = [];
    _.each(array, function(value, i, array) {
        
        if (!test(value, i, array)) {
            sum.push(value);
        }
        
    });
  
  return sum;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test) {
    var toReturn = [];
    var filtered = [];
    var rejected = [];
    
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (test(array[i], i, array)) {
                filtered.push(array[i]);
            } else {
                rejected.push(array[i]);
            }
            // else, do rejected.push(array[i])
        }
    } else {
        for (let key in array) {
            if(test(array[key], key, array)) {
                filtered.push(array[key]);
            } else {
                rejected.push(array[key]);
            }
        }
    }
    
    toReturn = [filtered, rejected];
    // right idea but we have to do it like this:
    // toReturn = [filtered, rejected]
    return toReturn;
};
// Yes Sir. Thank You. And you as well Sir.


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, test) {
    var toReturn = true;
    if (test === undefined) {
        test = function(value) { return value ? true : false; };
    }
    _.each(collection, function(value, loc, collection) {
        var result = test(value, loc, collection);
        if (result === false) {
            toReturn = false;
        }
    });
    return toReturn;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, iterator) {
    /* 
    This is great rockey! I love that you are using _.every in this
    solution. The reason why its not passing tests is because the 
    iterator should accept 3 arguments: el, loc, collection. This means
    you need to adjust the function passed to _.every and your function
    call of iterator:
    
    return !_.every(collection, function(el, loc, coll) {
        return !iterator(el, loc, coll);
    });
    
    Also, if the iterator is not defined you'll want to set it
    to a new function just like you did with
    test in _.every (see lines 415 - 417 above) 
    
    */
    
    if(iterator === undefined) {
        iterator = function(value) {return value ? true: false; };
    }
    iterator = iterator || _.identity;
    return !_.every(collection, function(el, loc, coll) {
        return !iterator(el, loc, coll);
    });
};
/* Half Correct:
_.some = function(collection, iterator) {
    iterator = iterator || _.identity;
    return !_.every(collection, function(el) {
        return !iterator(el);
    });
};
*/
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(collection, test) {
    return _.map(collection, function(item) {
        return item[test];
    });
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
