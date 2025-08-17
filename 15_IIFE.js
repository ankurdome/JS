// Immediately Invoked Function Expression (IIFE)

(function chai(){ //named IIFE
    console.log(`DB Connected`);
    
})();

( () => { //unnamed IIFE
    console.log(`DB Connected TWO`);
    
})();

//to avoid the global scope pollution, to avoid the variable declarations and all, we use IIFE
//there are two ()(): definition and execution respectively.
// rememeber in this IIFE function, we need to give ; at the end. as it tells the IIFE to stop else new IIFE wont run

//in order to give parameters

( (name) => { //parameter IIFE
    console.log(`${name}DB Connected TWO`);
    
})("ankur");
