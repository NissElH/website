document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextButton');
    const restartButton = document.getElementById('restartButton');
    const container = document.getElementById('container');
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const resultText = document.getElementById('result-text');
  
    let currentQuestionIndex = 0;
    let answers = [];
  
    const questions = [
      { question: "What's your favorite color?", answers: ["Red", "Blue", "Green", "Yellow"] },
      { question: "Do you prefer cats or dogs?", answers: ["Cats", "Dogs", "Both", "Neither"] },
      { question: "What's your favorite season?", answers: ["Spring", "Summer", "Fall", "Winter"] },
    ];
  
    const results = [
      "You are a creative and thoughtful person!",
      "You are energetic and love the outdoors!",
      "You are calm and enjoy peaceful environments!",
    ];
  
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartGame);
  
    function startGame() {
      startScreen.classList.add('hidden');
      questionScreen.classList.remove('hidden');
      currentQuestionIndex = 0;
      answers = [];
      showQuestion();
    }
  
    function showQuestion() {
      questionText.innerText = questions[currentQuestionIndex].question;
      answersContainer.innerHTML = '';
  
      questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.innerText = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
      });
  
      nextButton.classList.add('hidden');
    }
  
    function selectAnswer(answer) {
      answers[currentQuestionIndex] = answer;
      nextButton.classList.remove('hidden');
    }
  
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  
    function showResult() {
      questionScreen.classList.add('hidden');
      resultScreen.classList.remove('hidden');
      const resultIndex = Math.floor(Math.random() * results.length);
      resultText.innerText = results[resultIndex];
    }
  
    function restartGame() {
      resultScreen.classList.add('hidden');
      startScreen.classList.remove('hidden');
    }
  });
  