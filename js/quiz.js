// ===============================
// QUIZ DE QI - NÍVEL DIFÍCIL
// ===============================

const questions = [
  {
    q: "Qual número completa a sequência: 3, 8, 15, 24, ?",
    options: ["35", "33", "34", "32"],
    answer: 0 // +5, +7, +9, +11
  },
  {
    q: "Qual opção NÃO segue o mesmo padrão?",
    options: [
      "Quadrado → 4 lados",
      "Triângulo → 3 lados",
      "Pentágono → 5 lados",
      "Círculo → 1 lado"
    ],
    answer: 3
  },
  {
    q: "Se todos os Zorps são Blins e nenhum Blin é Frux, então:",
    options: [
      "Alguns Zorps são Frux",
      "Nenhum Zorp é Frux",
      "Todos os Frux são Zorps",
      "Alguns Blins são Frux"
    ],
    answer: 1
  },
  {
    q: "Complete a sequência: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    answer: 2
  },
  {
    q: "Qual palavra NÃO pertence?",
    options: ["Eco", "Reflexo", "Sombra", "Espelho"],
    answer: 2
  },
  {
    q: "Qual valor de X resolve a equação: 2X + 6 = 20?",
    options: ["6", "7", "8", "5"],
    answer: 0
  },
  {
    q: "Qual número completa a sequência: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "90"],
    answer: 2
  },
  {
    q: "Se ontem fosse amanhã, hoje seria sexta-feira. Que dia é hoje?",
    options: ["Segunda", "Terça", "Quarta", "Quinta"],
    answer: 1
  },
  {
    q: "Qual alternativa mantém a mesma relação lógica?",
    options: [
      "Pássaro está para ar assim como peixe está para água",
      "Pássaro está para água assim como peixe está para ar",
      "Pássaro está para ninho assim como peixe está para lago",
      "Pássaro está para ovo assim como peixe está para escama"
    ],
    answer: 0
  },
  {
    q: "Qual número completa a sequência: 1, 11, 21, 1211, ?",
    options: ["111221", "212211", "121121", "112211"],
    answer: 0
  }
];

// ===============================
// VARIÁVEIS DE CONTROLE
// ===============================

let index = 0;
let score = 0;
let selected = null;

// ===============================
// ELEMENTOS DO DOM
// ===============================

const quiz = document.getElementById("quiz-container");
const progress = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");

// ===============================
// FUNÇÕES
// ===============================

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

function selectOption(i, el) {
  selected = i;
  nextBtn.disabled = false;

  document.querySelectorAll(".option").forEach(opt => {
    opt.style.background = "#1e1e1e";
  });

  el.style.background = "#00ff99";
}

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

// ===============================
// INICIAR QUIZ
// ===============================

loadQuestion();

