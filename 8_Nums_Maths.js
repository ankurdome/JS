const score = 400;

const balance = new Number(100);
console.log(balance); //[Number: 100] gives properly that its number
console.log(score); // 400

console.log(balance.toString()); //100
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); // decimal precsion

const otherNumber = 23.9876
console.log(otherNumber.toPrecision(2)); //basically rounds off to nearest 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 its used to show representational wise;

console.log('------------------------------------');

// ****************** MATHS ************************

console.log(Math); //its a object basically
console.log(Math.abs(-3)); //3
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,6,8,2,8,9,5)); //Minimum in array
console.log(Math.max(4,6,8,2,8,9,5)); //Max Value

console.log(Math.random()); //value betweeen 0 to 1
console.log(Math.random()*10+1); //gurantee that 0 wont come.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)+min)); //always value between 10 to 20





