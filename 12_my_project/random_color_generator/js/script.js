const getColor = () => {
    //Hex Code 
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    document.querySelector("body").style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;

    navigator.clipboard.writeText(randomCode);
}
//event call
document.getElementById("btn").addEventListener(
    "click", getColor
)
//inti call
getColor();