//OBJECT is a collection of key-value pairs.

// objects can be made by: literal and construct
//constructor makes singleton instance.

const Sym = Symbol("mykey");
// **************** LITERALS *****************

const JsUser = {
    name: "ankur",
    age: 20,
    location: "Pune",
    email: "ankurdome@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Saturday"],
    "state": "MH",
    [Sym] : "mykey1" /// [] are needed to define its symbol and not string type.
}
console.log(JsUser);

//OUTPUT
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["state"]); //here the state cant be accesed using "." notation - so we used square brackets here.
console.log(JsUser[Sym]); //only way to output symbol`ddd

//MANIPULAITON
JsUser.email = "ankur@gmail.com";
console.log(JsUser.email);
// Object.freeze(JsUser); // now it can't be updated
JsUser.email = "dome@gmail.com";
console.log(JsUser.email); //its same ankur@gmail.com....since locled.


//Function
JsUser.greeting = function(){
    console.log("Hello");
}
console.log(JsUser.greeting); //function anonymous in cmd
console.log(JsUser.greeting()); //hello

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting2());


// **************** SINGLETON *****************
const tUSer = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "ankur";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
//objects can be nested
const regularUSer = {
    email: "nakur@gmail.com",
    fullname : {
        userFullname: {
            firstname : "ankur",
            lastname : "dome",
        }
    }
}

console.log(regularUSer.fullname?.userFullname.firstname); //ankur , ? uses to see if object exists

const obj1 = {a: 1, b: 2};
const obj2 = {c:3,d:4}

//way - 1
const obj3 = {obj1,obj2}; //{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }.    obj1 is target and obj2 is source
console.log(obj3);

//way-2
const objj3 = Object.assign({},obj1,obj2); //target is {} and rest sources
console.log(objj3);

//spread
const objjj3 = {...obj1, ...obj2}
console.log(objjj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // we get output as array : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'ankur', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'ankur' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('dname')); //false

// **************** Objects destructuring and JSON API *****************

const course = {
    coursename : "Ankur JS",
    price : "₹3999",
    courseInstructor : "ankur"
}

// Object Destructuring - making objects clean
const {courseInstructor : Instructor} = course;
console.log(Instructor);
