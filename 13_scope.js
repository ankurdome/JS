let a = 300; //global scope
// {} <- this is scope

if(true){ //this is block scope and should be stayed inside only
    let a = 10; 
    const b = 20;
    var c = 30;
}

console.log(a); //undefined
console.log(b); //undefined
console.log(c); //30 , which shouldnt happen in idle programming. always avoid var

//Note: scope is different in local node js runtime and in chrome console

//NESTED SCOPE

function one(){
    const user = "ankur";

    function two(){
        const website = "youtube";
        console.log(user); 
    }
    console.log(website); //website was in block scope, cant be accesed.
    
    two(); //output: ankur
}
one(); 

if(true){
    const username = "ankur";
    if(username === "ankur"){
        const website = "youtube";
        console.log(username+website);
        
    }
}