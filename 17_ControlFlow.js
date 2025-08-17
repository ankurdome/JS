//IF STATEMENT

const isUserLoggedIn = true;
const temperature  = 66;

if(isUserLoggedIn){
    console.log("logged in");
}

if(temperature>55){
    console.log("yes above 55");
    
}else{
    console.log("not less than 55");
    
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`);
}


const balance = 500;

if(balance>300) console.log("test");

//NESTED IF
if(balance<500){
    console.log("less than 500");
} else if(true){

}else if(false){

}

// SWITCH CASE 

const month = 3;
switch(month){
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("month 3");
        break;
    default:
        console.log("default");
        break;        
}




// NOTE: TRUTHY AND FALSY VALUE

//case 1
//if userEmail has value, it always true. else its false w/o any value.
const userEmail= "ankr@gmail.com"
if(userEmail){
    console.log("Got the user email");
}else{
    console.log("no email");
}

/*

FALSY ->
false, 0, -0, BigInt 0n, "", null, undefined, Nan

- rest all truthy value including: "0",'false'," ",[],{},function(){}

*/



// Nullish Coalescing Operator (??) : null and undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); //5

val1 = null ?? 10;
console.log(val1); //10

 val1 = undefined ?? 15;
 console.log(val1); //15
 
//sometimes, in database you get two respones with one as null, in that case this ?? operator chooses ideal one.
//it checks the null safety

// Terniary Operator is different

condition ? true : false;
const icetea = 500;
icetea >=80 ? console.log("les than 80"): console.log("more than 80");

