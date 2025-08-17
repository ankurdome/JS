// for

for(let index = 0; index < 10; index++){
    const element = index;
    console.log(element);
    if(element==5){
        console.log("5 is best number");
    }
}

for(let i =0;i<=5;i++){
    console.log(`outer loop: ${i}`);
    for(let j=0;j<=5;j++){
        console.log(`Inner loop: ${j}`);
        
    }
}

let myArray = ["amnkur","santosh","dome"];
for(let  index=0;index<myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

//break and contiue 

for(let i=0;i<=20; i++){
    if(i == 5){
        console.log(`deteccted ${5}`);
        continue; //here, if condision is satisfied and goes for next iteration jumping all the lines in current loop.
        
    }
    console.log(`value of i is: ${i}`);
    
}


//while loop
let i = 0;
while(i<=10){
    console.log(`value of ii : ${i}`);
    i +=2;
}


//do while loop
let score = 11;
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10); //here score is 11 will still get printed beacuse the loop is first then the condition is checked



// SPECIALISED ARRAY LOOPS - FOR OF loop
const arr = [24,4,87,123,78];

for (const i of arr) { //here, object is used in literal term and not in JS terms.
    console.log(i);
}

const greetings = "hello world! ";
for (const greet of greetings) {
    console.log(greet);   
}





// MAPS - it holds key-value pair in orgin order. it stores unique values, no repition.

const map = new Map();
map.set('IN', "India")
map.set("USA", "United staed of Amwrica")

console.log(map);

for (const [key, value] of map) { //we did array destrucuting, gives 
    console.log(key, ":-", value );
    
}
/*
const obbb = {
    'game1' : "GTA 5",
    'game2' : "NFS",
}
for (const gane of obbb) { //NOTE: its not itterable from this method.
    console.log(gane);
    
} */







// FOR IN LOOP - mostly for objects

const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myobject) {
  // console.log(key);
   console.log(`${key} is shortform for ${myobject[key]} `);  //js is shortform for javascript   
}


//can we try forin loop on array?
const prohramming = ["js","rb","py", "cpp"];
for (const key in prohramming) {
    console.log(key); //it will give keys of arrays: thats is 0,1,2,3,4,5
    console.log(prohramming[key]);
}




// FOR EACH LOOP - most used loop
const coding = ["aaa","py","cpp","rb"];

coding.forEach( function (val){
    console.log(val);
    
} )

coding.forEach( (val, index) => {
    console.log(val, index,coding);
    
})

const mycoding = [
    {
        languageName: "javascript",
        languageNameFIle: "js"
    },
    {
        languageName: "java",
        languageNameFIle: "java"
    },
    {
        languageName: "python",
        languageNameFIle: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})