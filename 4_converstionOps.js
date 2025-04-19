let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score);
console.log(typeof ValueInNumber);
console.log(ValueInNumber);
// "33" => 33
//"33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanLoggdIn = Boolean(isLoggedIn);
console.log(booleanLoggdIn);
// 0=>false 1=>true;
// "" => false
// "ankur" => true 

let someNumber = 33;
let StringNumber = String(someNumber);
console.log(StringNumber);
console.log(typeof StringNumber);




/******************* Operations ******************/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2**2); //power 
console.log(2*2);
console.log(2%3); 

let str1 = "hello";
let str2 = " ankur";

let str3 = str1 + str2;
console.log(str3);

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32 

console.log(true); //gives true 
console.log(+true); //1
console.log(+""); //0

let num1,num2,num3;
num1 = num2 = num3 = 2+2;
console.log([num1,num2,num3])

let gameCounter = 100;
gameCounter++; //later increment
++gameCounter; //first increment 

console.log(gameCounter);


