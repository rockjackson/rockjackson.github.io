//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = Object.values(object);
    return arr;
    //or you could:
    /*plant
    var arr = [];
    
    //water
    for (var key in object) {
        arr.push(object[key]);
    }
    //harvents
    
    return arr;*/
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    var str = Object.keys(data).join(" ");
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   var strVal = [];
   
   for (var keys in object) {
       var type = typeof object[keys];
       if (type === "string") {
       strVal.push(object[keys]);
       }
   }
   var str = strVal.join(" ");
   return str;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array"
    } else if (typeof collection === "object") {
        return "object";
    }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var result = string.charAt(0);
    var upFirstLet = result.toUpperCase();
    var resOfStr = string.slice(1, string.length)
    var upperStr = upFirstLet + resOfStr;
    
    return upperStr;
    
    //or
    //return string.charAt(0).toUpperCase() + string.slice(1, string.length);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /* 
        if string has multiple words like:
        
            string = "hello there whats up"
        
        string.split(" ") will return to wordArray
        
            ['hello', 'there', 'whats', 'up']
        
        so wordsArray[i] will be an entire word. Then
        you can follow the same pattern as capitalizeWord
        OR you could just call capitalizeWord on each word.
        
         how can you get the first letter from that word
    */
    
    var wordsArray = string.split(" ");
    for (var i = 0; i < wordsArray.length; i++){
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    return wordsArray.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var word = object.name;
    var firstLeterOfWord = word.charAt(0);
    var capitalizeFirstLetter = firstLeterOfWord.toUpperCase();
    
    var restOfWord = word.slice(1, word.length);
    var name = capitalizeFirstLetter + restOfWord;
    
    
    return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var objectName = object.name;
    var firstLetterOfName = objectName.charAt(0);
    var capitalizedFirstLetterofName = firstLetterOfName.toUpperCase();
    var restOfName = objectName.slice(1, objectName.length);
    var name = capitalizedFirstLetterofName + restOfName;
    
    var objectSpecies = object.species;
    var firstLetterOfSpecies = objectSpecies.charAt(0);
    var capitalizedFirstLetterofSpecies = firstLetterOfSpecies.toUpperCase();
    var restOfSpecies = objectSpecies.slice(1, objectSpecies.length);
    var species = capitalizedFirstLetterofSpecies + restOfSpecies;
    
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises && object.noises.length > 1) {
        return object.noises.join(" ");
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.search(word) > -1) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        }
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var notFriends = [];
    var friendCheck = [];
    for (var i = 0; i < array.length; i++) {
        if (name !== array[i].name) {
            friendCheck = false;
            for (var j = 0; j < array[i].friends.length; j++) {
                if (name === array[i].friends[j]) {
                    friendCheck = true;
                }
            }
            if (friendCheck === false) {
                notFriends.push(array[i].name);
            }
        } 
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var arrayTwo = []
    for (var i = 0; i < array.length; i++) {
        if (!(arrayTwo.includes(array[i]))) {
            arrayTwo.push(array[i]);
        }
    }
    return arrayTwo;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}