//"use strict" //treats all JS code as newer version
//alert(3+3); //only in erbsite binded JS file -- only useful in browser and not node

let name = "ankur" //string
let age = 20 //number
let isLoggedIn = false //boolean
const id = Symbol('123');

const anotherID = Symbol('123');
console.log(id === anotherID);

const bigNumber = 23456789087654n //puuting n at end makes it big Int

console.log(typeof bigNumber);

/*
Data Types -->>>>
    number 
    string 
    bigint
    boolean
    null (its a standalone value / empty value)
    undefined (value yet to be declared)
    symbol (uniqueness)
    object 
*/


console.log(typeof(null)); // type is object
console.log(typeof(undefined)); // undefined


//INTERVIEW ASPECT NOTES
/*
    -- PRIMITIVES DATATYPES 
        They are call by value and changes done in new copy created
        1. String
        2. Number
        3. Boolean
        4. Null
        5. Undefined
        6. Symbol (To make values unique like id)
        7. BigInt

    -- NON PRIMITIVE DATATYPES
        They're call by reference
        1. Arrays
        2. Objects
        3. Functions


    JS is not as such defined lang | Dynamically Types
*/

const hero = ["hero","superhero","megaero"] //array

let myObj = {
    name: "ankur",
    age: 20,
}

//function can be treated as variable
const myFunction = function(){
    console.log("hey");
    
}


