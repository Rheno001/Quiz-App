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
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");