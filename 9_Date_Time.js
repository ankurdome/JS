// **************** DATE *****************
//Note the date is calculated in milliseconds from the year 1970

let myDate = new Date();
console.log(myDate); //2025-04-19T10:05:33.391Z
console.log(myDate.toString()); //Sat Apr 19 2025 15:36:13 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sat Apr 19 2025
console.log(myDate.toISOString()); //2025-04-19T10:07:14.422Z
console.log(myDate.toJSON()); //2025-04-19T10:07:55.936Z
console.log(myDate.toLocaleDateString()); //4/19/2025
console.log(myDate.toLocaleString()); //4/19/2025, 3:38:49 PM
console.log(myDate.toLocaleTimeString()); //3:39:15 PM
console.log(myDate.getMilliseconds()); // Miliisecs
console.log(typeof myDate); //object


let myCreatedDate = new Date(2025,0,19); //REMEMBER: months start from 0 in JS
console.log(myCreatedDate.toDateString()); //Sun Jan 19 2025

let myCreatedDateTime = new Date(2025,0,19,3,44); 
console.log(myCreatedDateTime.toLocaleString()); // 1/19/2025, 3:44:00 AM

let myCreatedDateNew = new Date("01-14-2025");
console.log(myCreatedDateNew.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1745057830189 date in millisencods simce 1970

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let myDatee = new Date();
console.log(myDatee);
console.log(myDatee.getMonth());
console.log(myDatee.getDay());

newDatee.toLocaleString('default',{
    weekday: "long",
});










