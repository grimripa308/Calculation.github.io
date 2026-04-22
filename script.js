const questions = [
    {
        question: "What is the null hypothesis in statistical inference?",
        options: ["H0: No effect", "H1: Effect exists", "p > 0.05", "Sample mean"],
        answer: 0
    },
    {
        question: "For a /24 subnet, how many usable hosts?",
        options ["254", "256", "512", "65,534"],
        answer: 0
    },
    // Add 8 more questions...
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;
let highScore = localStorage.getItem('quizHighScore') || 0;

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
const currentScoreEl = document.getElementById('current-score');

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    totalQuestionsEl.textContent = questions.length;
    startTimer();
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestionIndex].answer;
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        if (i === correctIndex) btn.classList.add('correct');
        if (i === selectedIndex && i !== correctIndex) btn.classList.add('incorrect');
        btn.disabled = true;
    });
    if (selectedIndex === correctIndex) score++;
    currentScoreEl.textContent = score;
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    nextBtn.style.display = 'none';
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timeLeft = 15;
    timeLeftEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1); // Time up
        }
    }, 1000);
}

function endQuiz()
