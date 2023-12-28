//if
const isLoggedIn = true;


if (isLoggedIn) {
    //code execuate
    console.log("hello my Friend ");
}

// true evaluate kaise hoga   so we use conditioal  statements ( < , > , <= ; >= ; == ; != ; !==) or boolean vales 
if (false) {
     //code not execuate
}

// =   assignment operatior
// == check the value is equals
//  ===  strick checking (check type of the vale )
// .equals   

//if else
const temp =47;
if (temp<50) {
    //code execuate
    console.log("temp is less than 50");
}else{
    console.log("temp is greater than 50 ")
}



// short hand notation 
const balance = 100;
if(balance>50) console.log("test");
// if(balance>50) console.log("test"),console.log("test2");


//Nesting 
// if (balance < 50) {
//     console.log("less then 50");
// }else if (balance < 75) {
//     console.log("less then 75");
// }
// else if (balance < 90) {
//     console.log("less then 90");
// }else if (balance == 100) {
//     console.log("equal to 100");
// } else {
//     console.log("more than 100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {      // &-> ampersent sign
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // |-> pipe sign
    console.log("User logged in");
}