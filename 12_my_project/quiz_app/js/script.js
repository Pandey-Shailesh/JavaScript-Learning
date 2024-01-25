const questions = [
    {
        'ques':'Which of the following is a Markup Language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'ques':'What year was JAvaScript Launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'ques':'What does CSS stands for?',
        'a':'Hypertext markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicopters Terminals Motorboats Lamborginis',
        'correct':'b'
    },
];

let index = 0;
let total =questions.length;
let right =0;
let wrong =0;
const quebox = document.getElementById("que-box");
const optionsInput = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quebox.innerText = `${index+1}) ${data.ques}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz =()=>{
    const data= questions[index];
    const answer  = getAnswer();
    if (answer === data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer  = ()=>{
    let answer;
    optionsInput.forEach(
        (input)=>{
            if (input.checked) {
                answer = input.value;
                
            } 
        }
    )
    return answer;
};
const reset =()=>{
    optionsInput.forEach(
        (input)=>{
            input.checked = false;
        })
};

const endQuiz =()=>{
document.getElementById("box").innerHTML=`
<div style ="text-align:center"
    <h3> Thank you for playing the Quiz.</h3>
    <h2>${right}/ ${total} are Correct.</h2>
</di>
`
}
//inti call
loadQuestion();