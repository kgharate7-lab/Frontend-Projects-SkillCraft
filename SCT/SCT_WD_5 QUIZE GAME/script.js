const quizData = [
    { q: "HTML stands for?", o: ["Hyper Text Markup Language", "High Text ML", "Hyperlinks ML", "None"], a: 0 },
    { q: "CSS is used for?", o: ["Logic", "Styling", "Database", "Server"], a: 1 },
    { q: "JavaScript is a?", o: ["Markup", "Style sheet", "Programming language", "Database"], a: 2 },
    { q: "Which tag is used for paragraph?", o: ["<div>", "<p>", "<h1>", "<span>"], a: 1 },
    { q: "Which symbol for id?", o: ["#", ".", "$", "&"], a: 0 },
    { q: "Which runs in browser?", o: ["Python", "Java", "C", "JavaScript"], a: 3 },
    { q: "CSS stands for?", o: ["Cascading Style Sheets", "Creative Style System", "Color Style Sheet", "None"], a: 0 },
    { q: "HTML is?", o: ["Language", "Protocol", "Compiler", "OS"], a: 0 },
    { q: "Which tag for image?", o: ["<img>", "<image>", "<pic>", "<src>"], a: 0 },
    { q: "Which is not a browser?", o: ["Chrome", "Firefox", "Linux", "Edge"], a: 2 },
    { q: "JS keyword for variable?", o: ["int", "var", "string", "float"], a: 1 },
    { q: "Which is frontend?", o: ["HTML", "Node", "MongoDB", "MySQL"], a: 0 },
    { q: "Which color code is orange?", o: ["#000", "#fff", "#ffa500", "#123"], a: 2 },
    { q: "Which tag is heading?", o: ["<p>", "<head>", "<h1>", "<title>"], a: 2 },
    { q: "HTML file extension?", o: [".css", ".js", ".html", ".exe"], a: 2 },
    { q: "CSS property for color?", o: ["font", "background", "color", "style"], a: 2 },
    { q: "JS used for?", o: ["Structure", "Design", "Logic", "Hosting"], a: 2 },
    { q: "Which is backend?", o: ["HTML", "CSS", "JavaScript", "None"], a: 3 },
    { q: "Which tag makes list?", o: ["<ul>", "<li>", "<ol>", "All"], a: 3 },
    { q: "Which is correct?", o: ["HTMl", "Html", "HTML", "html5"], a: 2 }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.getElementsByClassName("option");
const resultEl = document.getElementById("result");

loadQuestion();

function loadQuestion() {
    let q = quizData[index];
    questionEl.innerText = `Q${index + 1}. ${q.q}`;

    for (let i = 0; i < 4; i++) {
        optionBtns[i].innerText = q.o[i];
        optionBtns[i].disabled = false;
    }
}

function checkAnswer(selected) {
    if (selected === quizData[index].a) {
        score++;
    }
    for (let btn of optionBtns) btn.disabled = true;
}

function nextQuestion() {
    index++;
    if (index < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    let percentage = (score / quizData.length) * 100;
    let status = percentage < 15 ? "❌ FAIL" : "✅ PASS";
    let message = percentage < 15
        ? "Don't give up. Practice makes perfect 💪"
        : "Great job! Keep learning 🚀";

    questionEl.innerText = "Quiz Completed!";
    resultEl.innerHTML = `
        <h2>Scorecard</h2>
        <p>Score: ${score} / ${quizData.length}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Status: <strong>${status}</strong></p>
        <p class="motivation">${message}</p>
    `;
}