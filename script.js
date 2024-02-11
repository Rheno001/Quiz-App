const questions = [
    {
        question: "How many members are in the beta squad?",
        answers: [
            { text: "10", correct:false},
            { text: "5", correct:true},
            { text: "3", correct:false},
            { text: "4", correct:false},
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican city", correct:true},
            { text: "Romania", correct:false},
            { text: "Egypt", correct:false},
            { text: "Spain", correct:false},
        ]
    },
    {
        question: "What Language is spoken in China?",
        answers: [
            { text: "Chinese", correct:false},
            { text: "Hausa", correct:false},
            { text: "Mandarin", correct:true},
            { text: "Swahili", correct:false},
        ]

    },
    {
        question: "What is the full meaning of POTUS?",
        answers: [
            { text: "People of the Upper Step", correct:false},
            { text: "President of the United States", correct:true},
            { text: "Mandarin", correct:false},
            { text: "Swahili", correct:false},
        ]

    },
    {
        question: "Who is Bim?",
        answers: [
            { text: "Jackline", correct:false},
            { text: "Jacqueline", correct:true},
            { text: "Joella", correct:false},
            { text: "John", correct:false},
        ]

    },
    {
        question: "When did the second world war start?",
        answers: [
            { text: "1984", correct:false},
            { text: "2002", correct:false},
            { text: "1889", correct:false},
            { text: "1939", correct:true},
        ]

    },
    {
        question: "What Language is spoken in China?",
        answers: [
            { text: "Chinese", correct:false},
            { text: "Hausa", correct:false},
            { text: "Mandarin", correct:true},
            { text: "Swahili", correct:false},
        ]

    },
    {
        question: "Who is Darkest man's cousin?",
        answers: [
            { text: "Sharky", correct:false},
            { text: "Chunkz", correct:true},
            { text: "AJ", correct:false},
            { text: "KSI", correct:false},
        ]

    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct:false},
            { text: "Gobi", correct:false},
            { text: "Sahara", correct:false},
            { text: "Antarctica", correct:true},
        ]

    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "8", correct:false},
            { text: "5", correct:false},
            { text: "3", correct:true},
            { text: "9", correct:false},
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();