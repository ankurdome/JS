const user = {
    username: "ankru",
    price : 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome!`);
        console.log(this);
        
        
    }
}
//this is used in current context
user.welcomeMsg(); //it was ankru
user.username = "ankkkk" //we changed it, context changed.
user.welcomeMsg();

console.log(this); //gives empty {}, cause there's nothing in global context

//if we use console.log(this) in browser, we will get output of windows
//NOTE: global object in browser is WINDOWS.


//but if we run this in function, we get many atrributes
function chai(){
    let username = "ankurr"
    console.log(this);
    
}
chai()


//AROW FUNCTION

const chaii = () => {
    let username = "ankur"
    console.log(this);
    
}

chaii() // {} empty paranthesis



//**************ARROW-FUNCTION ***************/

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));


//Implicit Return
const addTwoo = (num1,num2) => (num1+ num2); 

//IMP: if implicit func used you dont need return keyword

