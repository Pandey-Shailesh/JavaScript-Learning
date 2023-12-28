const user= {
    userName:"Shailesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName} welcome to webside `);
        // console.log(this);
    }
}

//this --> it refers to the current context 
// user.welcomeMessage();

// user.userName="Abhi";

// user.welcomeMessage()

// console.log(this); // when we are in node environment it give object {} (empty object)
                   // when we use the console of browser we get window object (it is global object)




//  function chai() {
//     let userName=" Shailesh"
//     console.log(this.userName);
//  }
//  chai();



// const chai =function () {
//         let userName=" Shailesh"
//     console.log(this.userName);
    
// }
// chai();


// const chai = ()=> {
//     let userName=" Shailesh"
// console.log(this.userName);

// }
// chai();




//**************Arrow Function*************** */
// const addTwo= (num1,num2)=>{
//  return num1+num2;
// }
// console.log(addTwo(2,3));


//Implicit return 

// const addTwo= (num1,num2) =>  num1+num2;
// console.log(addTwo(2,3));


// const addTwo= (num1,num2) =>  (num1+num2);  //it is most used in react code
// console.log(addTwo(2,3));


const addTwo= (num1,num2) =>  ({userName:"shailesh"});  //it return the object
console.log(addTwo(2,3));

 
 