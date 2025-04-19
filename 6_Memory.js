/*
    ******************** MEMORY ***************
    
    Stack (In Primitives)
        -In this you get a copy

    Heap (Non-Primitive)
        -You get a reference of original value
*/

// STACK >>>>>>
let ytname = "Ankur";
let anotherName = ytname;

console.log(anotherName); //Ankur

anotherName ="ankur";

console.log(ytname); //Ankur
console.log(anotherName); //ankur
// here, we have taken a copy of ytname, so when changes made then change happens in copy not original


// HEAP >>>>>>>
let UserOne = {
    email: "ankurdome@gmail.com",
    upi: "ankur@oksbi",
}
let userTwo = UserOne;

console.log(UserOne);
console.log(userTwo);

userTwo.email = "domeankur@gmai.com";
console.log(UserOne.email);
//here, we have UserTwo taking reference from the UserOne. SO updates made in Two reflects in One.