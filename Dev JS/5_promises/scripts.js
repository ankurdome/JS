/*

PROMISE:
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method

A Promise is in one of these states:
    1. pending: initial state, neither fulfilled nor rejected.
    2. fulfilled: meaning that the operation was completed successfully.
    3. rejected: meaning that the operation failed.

BlueBird Libraries were earlier used before directly integrating in JS Native
*/

const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completemed');
        resolve();
    }, 1000)
}); 
//promise (object) created.

//Consume Promise
promise1.then(function(){
    console.log('Promose COnsmued');
})//then has direct connection with resolve, this has call back fnc that is returend


//WAY - 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASync task 2");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async task resolved");

})


//WAY - 3 
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userrname: "Ankur", email: "ankurdome@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})



//WAY - 4 
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "ankur", password:"123"})
        } 
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username) => { //this is chaining, that is value from above is user below
    console.log(username);

}).catch(function(error){
    console.log(error);  
}).finally(()=> console.log("Finally, the promise is either resolved or rejected"));



// WAY - 5
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password:"123"})
        } 
        else{
            reject("ERROR: JS Went wrong")
        }
    },1000)
});

async function consumedPromiseFIve(){
    try{
        const response = await promise5
        console.log(response);
    } catch(error){
        console.log(error);
    }
};
consumedPromiseFIve();





//FETCH >>>>>>>>>>>>>>

//using try catch
async function  getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//using then catch
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));