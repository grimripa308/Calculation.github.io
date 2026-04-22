const questions = [
    {
        question: "What is the null hypothesis in statistical inference?",
        options: ["H0: No effect", "H1: Effect exists", "p > 0.05", "Sample mean"],
        answer: 0
    },
    {
        question: "For a /24 subnet, how many usable hosts?",
        options: ["254", "256", "512", "65,534"],
        answer: 0
    },
    {
        question: "p-value less than 0.05 means?",
        options: ["Reject null", "Accept null", "No significance", "Type I error"],
        answer: 0
    },
    {
        question: "Class C IP range starts with?",
        options: ["192-223", "128-191", "1-126", "224-239"],
        answer: 0
    },
    {
        question: "Standard error formula includes?",
        options: ["SD / sqrt(n)", "Mean / n", "Variance * n", "SD * sqrt(n)"],
        answer: 0
    },
    {
        question: "/30 subnet usable hosts?",
        options: ["2", "4", "14", "62"],
        answer: 0
    },
    {
        question: "Confidence interval 95% z-score?",
        options: ["1.96", "1.645", "2.576", "2.33"],
        answer: 0
    },
    {
        question: "Broadcast address ends with?",
        options: ["All 1s", "All 0s", "Network ID", "Host 1"],
        answer: 0
    },
    {
        question: "t-test for small samples?",
        options: ["Yes, n<30", "No, use z", "Always z", "Only paired"],
        answer: 0
    },
    {
        question: "Subnet mask /16 in dotted decimal?",
        options: ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.255"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;
let highScore = localStorage.getItem('quizHighScore') || 0;

// DOM elements (same as before)
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const finalScoreEl = document.getElementById('final-score');
const highScoreEl = document.getElementById('high-score');
const restartBtn = document.getElementById('restart');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const timeLeftEl = document.getElementById('time-left');
const currentScoreEl = docu
