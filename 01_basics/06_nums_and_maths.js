//************Numbers**************** */
const score = 100;
const balance = new Number(400)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
const anotherNumber =100.8994;
console.log(anotherNumber.toPrecision(3));


const secondNumber= 100000000;
console.log(secondNumber.toLocaleString('en-IN'));


//***********Maths***************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));
console.log(Math.min(6,6,7,8));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min =10;
const max=20;

console.log(Math.floor( Math.random() * (max - min + 1))+ min );


