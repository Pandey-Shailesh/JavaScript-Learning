var c=300;   //-->Global Scope

{} //-->scope of the program 

if (true) {
    let a= 10;
    const b= 20;            // -->Block Scope 
    var c= 30;
    d=40;
    console.log("Inner:", c);
}


console.log("outer:", c);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//*********************nested scope******* */

function one(){
    const username = "shailesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "shailesh"
    if (username === "shailesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){      // it is the function
    return num + 1
}


//Hosting 
addTwo(5)
const addTwo = function(num){     // it is function and also called as expression
    return num + 2                  // it is in the concept of hosting .
}