//declaration
const arr = [0,1,4,3,4,5,6,true, "ankur"];
const heros = ["ankur","santosh","dome"]
const arr2 = new Array(1,2,3,4,5);


console.log(arr[2]);

// **************** METHODS *****************
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9); //adds value at index at 0 [ 9, 0, 1, 4, 3, 4, 5, 6, true, 'ankur' ]
console.log(arr);

arr.shift() // [ 0, 1, 4, 3, 4, 5, 6, true, 'ankur' ]
console.log(arr);

console.log(arr.includes(9)); // false
console.log(arr.indexOf(3)); 


const newARR = arr.join(); // basically join() chnages the type to string

console.log(arr);
console.log(newARR);
console.log(typeof newARR); 

//slice and splice : slice() returns a copy of part of an array, while splice() changes the original array by adding/removing elements.

console.log("a",arr);

const arr1 = arr.slice(1,3);
console.log(arr1);
console.log("b", arr);

const arrr2 = arr.splice(1,3); 
console.log("C",arrr2);
console.log(arrr2);

const marvel_heroes = ["spidey","ironman","thor"];
const dc = ["superman","flash","batman"];

//marvel_heroes.push(dc); // gives nested array
console.log(marvel_heroes); 
//console.log(marvel_heroes[3][1]); //flash

const allheroes = marvel_heroes.concat(dc);
console.log(allheroes); //gives single array with both sub arrays

const spreaded_heros = [...marvel_heroes, ...dc]; //similar to concat
console.log(spreaded_heros);

const nested_Arrays = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(nested_Arrays);
const flattenedarray = nested_Arrays.flat(Infinity);
console.log(flattenedarray);

console.log(Array.isArray("ANkkyr")); //false - checks if its array 
console.log(Array.from("Ankur")); //converts to array -- [ 'A', 'n', 'k', 'u', 'r' ]
console.log(Array.from({name: "ANkur"})); //gives empty array when cant decide whether array is needed of keys or values

let score1 = 100;
let score2 = 200;
let scorre3 = 300;
console.log(Array.of(score1,score2,scorre3)); //makes out array of scores



