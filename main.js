const level1 = [
    {
      questions: [
        {
          question: "¿Cuál fue la serie más vista en Netflix en 2019?",
          answers: ["Respuesta correcta", "Opción incorrecta", "Stranger Things", "Opción incorrecta"],
          correctIndex: 2
        },
        {
          question: "¿Cuántas teclas tiene un piano?",
          answers: ["Opción incorrecta", "88", "Opción incorrecta", "Opción incorrecta"],
          correctIndex: 1
        },
        {
          question: "¿Que ocurrió el 20 de Julio de 1969?",
          answers: ["Opción incorrecta", "Opción incorrecta", "Alunizaje de Apollo 11", "Opción incorrecta"],
          correctIndex: 2
        },
        {
            question: "¿Cómo llama la gente local a la Ciudad de Nueva York?",
            answers: ["Opción incorrecta", "Opción incorrecta", "Gotham", "Opción incorrecta"],
            correctIndex: 2
          },
          {
            question: "¿Cuál es la Cordillera más larga del mundo?",
            answers: ["Los Andes 7000km", "Opción incorrecta", "Respuesta correcta", "Opción incorrecta"],
            correctIndex: 0
          },
      ],
      passingScore: 3,
    },
   
  ];
  
  let currentLevelIndex = 0;
  let currentQuestionIndex = 0;
  let currentScore = 0;
  
  const questionTextElement = document.getElementById("question-text");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const currentScoreElement = document.getElementById("current-score");
  const nextButton = document.getElementById("next-btn");
  const resultTextElement = document.getElementById("result-text");
  const resultContainer = document.getElementById("result-container");
  
  function startGame() {
    nextButton.disabled = true;
    resultContainer.style.display = "none";
    showQuestion(currentLevelIndex, currentQuestionIndex);
  }
  
  function showQuestion(levelIndex, questionIndex) {
    const currentQuestion = level1[levelIndex].questions[questionIndex];
    questionTextElement.textContent = currentQuestion.question;
  
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = currentQuestion.answers[i];
    }
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = level1[currentLevelIndex].questions[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.correctIndex) {
      resultTextElement.textContent = "¡Respuesta correcta!";
      resultTextElement.className = "correct";
      currentScore++;
    } else {
      resultTextElement.textContent = "Respuesta incorrecta.";
      resultTextElement.className = "incorrect";
    }
  
    currentScoreElement.textContent = `Puntaje actual: ${currentScore}`;
  
    resultContainer.style.display = "block";
    nextButton.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < level1[currentLevelIndex].questions.length) {
      showQuestion(currentLevelIndex, currentQuestionIndex);
      resultContainer.style.display = "none";
      nextButton.disabled = true;
    } else {
      endLevel();
    }
  }
  
  function endLevel() {
    if (currentScore >= level1[currentLevelIndex].passingScore) {
      resultTextElement.textContent = `¡Pasaste al siguiente nivel! Tu puntaje total es ${currentScore}.`;
      resultTextElement.className = "correct";
      currentLevelIndex++;
      currentQuestionIndex = 0;
    } else {
      resultTextElement.textContent = `No alcanzaste el puntaje mínimo. Reintentar.`;
      resultTextElement.className = "incorrect";
      currentLevelIndex = 0;
      currentQuestionIndex = 0;
      currentScore = 0;
    }
  
    currentScoreElement.textContent = `Puntaje actual: ${currentScore}`;
  
    resultContainer.style.display = "block";
    nextButton.disabled = true;
  
    if (currentLevelIndex < level1.length) {
      showQuestion(currentLevelIndex, currentQuestionIndex);
    } else {
      endGame();
    }
  }

  function endGame() {
    resultTextElement.textContent = `¡Felicidades! Completaste el nivel. Tu puntaje total es ${currentScore}.`;
    resultTextElement.className = "correct";
    resultContainer.style.display = "block";
    nextButton.disabled = true;
  }
  
  startGame()  ;
  

function retryGame() {
currentLevelIndex = 0;
currentQuestionIndex = 0;
currentScore = 0;

resultContainer.style.display = "none";
nextButton.disabled = true;
currentScoreElement.textContent = `Puntaje actual: 0`;

startGame();
}

