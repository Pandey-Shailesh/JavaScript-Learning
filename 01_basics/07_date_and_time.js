let myDate= new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23);
//let myCreatedDate = new Date(2023,0,23,5,3,2);
//let myCreatedDate = new Date("2023-01-14"); //yy-mm-dd

let myCreatedDate = new Date("02-21-2014"); //mm-dd-yy

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate  = new Date();
// console.log(newDate.getDay());

// console.log(newDate.getMonth()+1);

// console.log(`${newDate.getFullYear()} and the`);


console.log(newDate.toLocaleString('default',{
    weekday: "short",

}));