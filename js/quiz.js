// Perguntas do teste
const questions = [
  {
    q: "2, 4, 8, 16, ?",
    options: ["18", "24", "32", "30"],
    answer: 2
  },
  {
    q: "Qual não pertence ao grupo?",
    options: ["Quadrado", "Círculo", "Triângulo", "Relógio"],
    answer: 3
  },
  {
    q: "Se A > B e B > C, então:",
    options: ["A > C", "C > A", "A = C"],
    answer: 0
  },
  {
    q: "Qual número completa a sequência? 1, 1, 2, 3, 5, ?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    q: "5 × 6 − 10 = ?",
    options: ["10", "20", "30", "25"],
    answer: 1
  },
  {
    q: "Qual palavra é diferente?",
    options: ["Cão", "Gato", "Pássaro", "Mesa"],
    answer: 3
  },
  {
    q: "Qual figura tem mais lados?",
    options: ["Triângulo", "Quadrado", "Pentágono", "Círculo"],
    answer: 2
  },
  {
    q: "Qual é o oposto de expandir?",
    options: ["Crescer", "Diminuir", "Aumentar", "Estender"],
    answer: 1
  },
  {
    q: "Qual número vem depois? 3, 9, 27, ?",
    options: ["54", "81", "90", "72"],
    answer: 1
  },
  {
    q: "Qual não é ferramenta?",
    options: ["Martelo", "Chave", "Alicate", "Relógio"],
    answer: 3
  }
];

let index = 0;
let score = 0;
let selected = null;

const quiz = document.getElementById("quiz-container");
const progress = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");

// Carrega pergunta
function loadQuestion() {
  selected = null;
  nextBtn.disabled = true;

  progress.style.width = `${(index / questions.length) * 100}%`;

  const q = questions[index];
  quiz.innerHTML = `
    <div class="question">${q.q}</div>
    ${q.options
      .map(
        (opt, i) =>
          `<div class="option" onclick="selectOption(${i}, this)">${opt}</div>`
      )
      .join("")}
  `;
}

// Selecionar alternativa
function selectOption(i, el) {
  selected = i;
  nextBtn.disabled = false;

  document.querySelectorAll(".option").forEach(opt => {
    opt.style.background = "#1e1e1e";
  });

  el.style.background = "#00ff99";
}

// Próxima pergunta
function nextQuestion() {
  if (selected === null) return;

  if (selected === questions[index].answer) {
    score++;
  }

  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "resultado.html";
  }
}

// Inicia o teste
loadQuestion();
