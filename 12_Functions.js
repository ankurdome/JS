function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("R");
    console.log("S");
}

sayMyName();

function addTwoNumbers(number1, number2){ //we don't need to give return type
    console.log(number1+number2);
    return (number1+number2); // added after 22th LOC
    
}
addTwoNumbers(3,3); //6
addTwoNumbers(3,"3"); //33
addTwoNumbers(3,"a"); //3a

const result = addTwoNumbers(3,8); 
console.log("Result: ", result); //undefined


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ankur"));
console.log(loginUserMessage());

// note; " " and undefined are fasle boolean values. so !undefined are used in if-else


function calculatedCartPrice(...num1){
    //function calculatedCartPrice(val1, val2, ...num1); return num1 => [6667,9] as val1 gets 2 and val2 gets 55
    return num1;
}

console.log(calculatedCartPrice(2)); //2

//if youre adding too much items, we need rest operator ...
console.log(calculatedCartPrice(2,55,6667,9));
 
 
//**************OBJECT-FUNCTION ***************/

const user = {
    username: "ankur",
    age: 20,
}

function handleObject(anyobject){
    console.log(`the name is ${anyobject.username} and age is ${anyobject.age}`);
    
}
//one way
handleObject(user);

//anotherway
handleObject({
    username:"ADX",
    age: 21,
})

//array - function
const myArr = [200,44,66,88,56];

function arrayValue(arrr){
    return arrr[2];   
}
console.log(arrayValue(myArr));
