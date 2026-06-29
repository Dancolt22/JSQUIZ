// ===================== STATE =====================
let currentIndex = 0;
// userAnswers[i] = selected option index, or null if unanswered
let userAnswers = new Array(quizQuestions.length).fill(null);

// ===================== DOM REFERENCES =====================
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const retakeBtn = document.getElementById("retake-btn");
const reviewBtn = document.getElementById("review-btn");

const questionNav = document.getElementById("question-nav");
const progressText = document.getElementById("progress-text");
const progressBarFill = document.getElementById("progress-bar-fill");

const questionText = document.getElementById("question-text");
const questionCode = document.getElementById("question-code");
const questionCodeContent = document.getElementById("question-code-content");
const optionsContainer = document.getElementById("options-container");

const reviewSection = document.getElementById("review-section");
const reviewList = document.getElementById("review-list");

// ===================== SCREEN SWITCHING =====================
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultsScreen].forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================== START QUIZ =====================
startBtn.addEventListener("click", () => {
  currentIndex = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  buildQuestionNav();
  renderQuestion();
  showScreen(quizScreen);
});

// ===================== BUILD SIDEBAR NAV (question switching) =====================
function buildQuestionNav() {
  questionNav.innerHTML = "";
  quizQuestions.forEach((_, i) => {
    const pill = document.createElement("div");
    pill.classList.add("nav-pill");
    pill.textContent = i + 1;
    pill.dataset.index = i;
    pill.addEventListener("click", () => {
      // Jumping directly to any previously (or not yet) answered question
      currentIndex = i;
      renderQuestion();
    });
    questionNav.appendChild(pill);
  });
}

function updateQuestionNav() {
  const pills = questionNav.querySelectorAll(".nav-pill");
  pills.forEach((pill, i) => {
    pill.classList.remove("answered", "current");
    if (i === currentIndex) {
      pill.classList.add("current");
    } else if (userAnswers[i] !== null) {
      pill.classList.add("answered");
    }
  });
}

// ===================== RENDER A QUESTION =====================
function renderQuestion() {
  const q = quizQuestions[currentIndex];

  // Header / progress
  progressText.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  const progressPercent = ((currentIndex + 1) / quizQuestions.length) * 100;
  progressBarFill.style.width = progressPercent + "%";

  // Question text + optional code block
  questionText.textContent = q.question;
  if (q.code) {
    questionCode.style.display = "block";
    questionCodeContent.textContent = q.code;
  } else {
    questionCode.style.display = "none";
  }

  // Options
  optionsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((optionText, i) => {
    const optionEl = document.createElement("div");
    optionEl.classList.add("option");
    if (userAnswers[currentIndex] === i) {
      optionEl.classList.add("selected");
    }

    optionEl.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text"></span>
    `;
    optionEl.querySelector(".option-text").textContent = optionText;

    optionEl.addEventListener("click", () => {
      userAnswers[currentIndex] = i;
      renderQuestion(); // re-render to show selection highlight
      updateQuestionNav();
    });

    optionsContainer.appendChild(optionEl);
  });

  // Nav buttons
  prevBtn.disabled = false;
  prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";

  if (currentIndex === quizQuestions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }

  updateQuestionNav();
}

// ===================== PREV / NEXT (switching between questions) =====================
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

// ===================== SUBMIT QUIZ =====================
submitBtn.addEventListener("click", () => {
  const unansweredCount = userAnswers.filter((a) => a === null).length;
  if (unansweredCount > 0) {
    const confirmSubmit = confirm(
      `You have ${unansweredCount} unanswered question(s). Submit anyway?`
    );
    if (!confirmSubmit) return;
  }
  showResults();
});

// ===================== RESULTS =====================
function showResults() {
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  quizQuestions.forEach((q, i) => {
    if (userAnswers[i] === null) {
      skippedCount++;
    } else if (userAnswers[i] === q.correctIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = quizQuestions.length;
  const percent = Math.round((correctCount / total) * 100);

  // Score circle
  const scoreCircle = document.getElementById("score-circle");
  scoreCircle.style.background = `conic-gradient(var(--crimson) ${percent}%, var(--border) ${percent}%)`;
  document.getElementById("score-percent").textContent = percent + "%";

  document.getElementById("score-text").textContent = `${correctCount} out of ${total} correct`;

  let message = "";
  if (percent >= 90) message = "Outstanding! You've mastered conditionals, loops, and functions.";
  else if (percent >= 75) message = "Great work! Just a few gaps to close up.";
  else if (percent >= 50) message = "Decent effort. Review the missed questions below carefully.";
  else message = "This topic needs more practice. Go through every explanation below.";
  document.getElementById("score-message").textContent = message;

  document.getElementById("stat-correct-num").textContent = correctCount;
  document.getElementById("stat-wrong-num").textContent = wrongCount;
  document.getElementById("stat-skipped-num").textContent = skippedCount;

  buildReview();
  reviewSection.style.display = "none";
  reviewBtn.textContent = "Review Answers ↓";

  showScreen(resultsScreen);
}

// ===================== BUILD ANSWER REVIEW =====================
function buildReview() {
  reviewList.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  quizQuestions.forEach((q, i) => {
    const userAnswerIndex = userAnswers[i];
    const isSkipped = userAnswerIndex === null;
    const isCorrect = userAnswerIndex === q.correctIndex;

    const item = document.createElement("div");
    item.classList.add("review-item");
    item.classList.add(isSkipped ? "skipped" : isCorrect ? "correct" : "incorrect");

    let statusLabel = isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect";
    let statusClass = isSkipped ? "skipped" : isCorrect ? "correct" : "incorrect";

    let codeHTML = "";
    if (q.code) {
      codeHTML = `<pre class="review-code"><code></code></pre>`;
    }

    let yourAnswerHTML = "";
    if (isSkipped) {
      yourAnswerHTML = `<div class="review-answer-row your-wrong">Your answer: — not answered —</div>`;
    } else if (isCorrect) {
      yourAnswerHTML = `<div class="review-answer-row your-right">Your answer: ${letters[userAnswerIndex]}. ${escapeText(q.options[userAnswerIndex])} ✓</div>`;
    } else {
      yourAnswerHTML = `<div class="review-answer-row your-wrong">Your answer: ${letters[userAnswerIndex]}. ${escapeText(q.options[userAnswerIndex])} ✗</div>`;
    }

    let correctAnswerHTML = "";
    if (!isCorrect) {
      correctAnswerHTML = `<div class="review-answer-row correct-answer">Correct answer: ${letters[q.correctIndex]}. ${escapeText(q.options[q.correctIndex])} ✓</div>`;
    }

    item.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-number">Question ${i + 1}</span>
        <span class="review-status ${statusClass}">${statusLabel}</span>
      </div>
      <div class="review-question-text"></div>
      ${codeHTML}
      ${yourAnswerHTML}
      ${correctAnswerHTML}
      <div class="review-explanation"><strong>Why:</strong> ${escapeText(q.explanation)}</div>
    `;

    item.querySelector(".review-question-text").textContent = q.question;
    if (q.code) {
      item.querySelector(".review-code code").textContent = q.code;
    }

    reviewList.appendChild(item);
  });
}

// Basic text escaping since we're inserting some pieces via innerHTML
function escapeText(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ===================== REVIEW TOGGLE =====================
reviewBtn.addEventListener("click", () => {
  const isHidden = reviewSection.style.display === "none";
  reviewSection.style.display = isHidden ? "flex" : "none";
  reviewBtn.textContent = isHidden ? "Hide Answers ↑" : "Review Answers ↓";
  if (isHidden) {
    reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ===================== RETAKE QUIZ =====================
retakeBtn.addEventListener("click", () => {
  showScreen(welcomeScreen);
});
