//String can be declared with "" and ''

const name = "ankur";
const repoCount = 50;

console.log(name+repoCount+"Value"); //Old Fashion

//Strig Interpolation - IMP
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


//Another Way
let GameNAME = new String('proadx-ADX');

console.log(GameNAME[0]); //
console.log(GameNAME.__proto__); // {}
console.log(GameNAME.length); //6
console.log(GameNAME.toUpperCase()); // remember all this values isnt making changes in copy. so original value remains intact.
console.log(GameNAME.charAt(3)); //a
console.log(GameNAME.indexOf('a')); //3

const newString = GameNAME.substring(0, 3); 
console.log(newString); //here the last index 3 wont be refelcted

const anotherString = GameNAME.slice(0,3);
console.log(anotherString); //pro
const anotherString2 = GameNAME.slice(-1,1);
console.log(anotherString2);

const newStrng = "    ankur     ";
console.log(newStrng); //    ankur     
console.log(newStrng.trim()); //removes whitespace.   there's trim start and end too.

const url = "https;//ankurdome.com/ankur%20dome";
console.log(url);

console.log(url.replace('%20','-'));
console.log(url.includes('ankur'));

const GameNAME2 = "pro-adx-rexon";
console.log(GameNAME2.split('-')); // [ 'pro', 'adx', 'rexon' ] gives array by spliting on smthhg common



