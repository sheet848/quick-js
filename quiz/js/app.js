const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let questionBox = document.getElementById("questionBox");
let optionInputs = document.querySelectorAll("input");
let total = quizData.length;
let right = 0, wrong = 0;

const loadQuestion = () => {
    //reset quiz after round
    if(index === total) {
        return endQuiz();
    }
    reset();

    const queData = quizData[index];
    //question
    questionBox.innerText = `${index+1}) ${queData.question}`;

    //options
    optionInputs[0].nextElementSibling.innerText = queData.a
    optionInputs[1].nextElementSibling.innerText = queData.b
    optionInputs[2].nextElementSibling.innerText = queData.c
    optionInputs[3].nextElementSibling.innerText = queData.d
    //console.log(queData);
}

const submitQuiz = () => {
    const data = quizData[index];
    const ans = getAnswer();
    if(ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach((input) =>{
        if(input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionInputs.forEach((input) =>{
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2> ${right} out of ${total}</h2>
    </div>`;
}

loadQuestion();
