//Immediatly Invoked Function Expressions(IIFE)
     
//--> function execuated immediatly 
//--> global scope pollution was created many time so to remove that problem (global scope  pollution) we use IIFE 

// --> to declare the iife we use ()()
(function chai(){
    console.log(`DB Is Connected`);     // this is named IIFE 
})();


(()=>{
    console.log(`Server is Started`);  // this is unNamed IIFE 
})();


// this is the eg of UnNamed IIFE ih Passing the parameter 
((name)=>{
    console.log(`Hello ${name}`)
})("Shailesh")