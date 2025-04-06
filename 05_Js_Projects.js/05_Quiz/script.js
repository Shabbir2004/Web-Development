document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  const startButton = document.getElementById("start-btn");

  let questionList = [
    {
      question: "What Is The Capital Of Maharashtra",
      choices: ["Mumbai", "London", "Ahmedabad", "Indore"],
      answer: "Mumbai",
    },

    {
      question: "What Is The Capital Of Gujarat",
      choices: ["Kerala", "Ahmedabad", "Surat", "Nagpur"],
      answer: "Ahmedabad",
    },

    {
      question: "What Is The Capital Of France",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "London",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  nextButton.addEventListener(`click`, () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionList.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  startButton.addEventListener(`click`, startQuiz);

  restartButton.addEventListener(`click`, () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextButton.classList.add("hidden");

    questionText.textContent = questionList[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questionList[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    if (choice === questionList[currentQuestionIndex].answer) {
      score++;
    }
    nextButton.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add(`hidden`);
    resultContainer.classList.remove(`hidden`);
    scoreDisplay.textContent = `${score} out of ${questionList.length}`;
  }
});
