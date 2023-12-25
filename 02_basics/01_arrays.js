//array


const myArray1= [0,1,2,3,4,5,6,7,8,9];
const myArray2= ["vaibhav","shailesh","vinay","abhi","sid"];




console.log(myArray1);

//Array Methods

// myArray1.push(10);
// myArray1.push(11);
// myArray1.pop()


// myArray1.unshift(12);
// myArray1.shift();


// console.log(myArray1.includes(11));
// console.log(myArray1.indexOf(10));

// const newArray = myArray1.join();

// console.log(newArray);

// console.log(typeof newArray );


//slice and splice

// console.log("A",myArray1);

// const mynu1= myArray1.slice(1,3);
// console.log(mynu1);
// console.log("B", myArray1)

// const mynu2= myArray1.splice(1,3);
// console.log(mynu2);
// console.log("c", myArray1)



const marvel_Heros= new Array("IronMan","Thor","Caption");
const dc_Heros= new Array("superman","batman","flash");
// marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros[3][1]);
// const allHeros = marvel_Heros.concat(dc_Heros);

// console.log(allHeros);

const allNewHeros = [...marvel_Heros,...dc_Heros];  // sperad operator 
console.log(allNewHeros);


// const anotherArry =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// let realAnotherArry = anotherArry.flat(Infinity);
// console.log(realAnotherArry);

console.log(Array.isArray("shailesh"));
console.log(Array.from("shailesh"));
console.log(Array.from({name: "shailesh"}));  //interesting



let score1 =100
let score2 =200
let score3 =300
let score4 =400


console.log(Array.of(score1,score2,score3,score4));




//Array Main Methods
// Array.from()
// Array.of()
// Array.isArray()
// Array.toString()