const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Hyperlinking Text Management Language",
      correct: "a",
    },
    {
      question: "What does CSS stand for?",
      a: "Creative Style System",
      b: "Cascading Style Sheets",
      c: "Computer Style Syntax",
      d: "Colorful Style Sheets",
      correct: "b",
    },
    {
      question: "Which language is used for web apps?",
      a: "Python",
      b: "PHP",
      c: "JavaScript",
      d: "All of the above",
      correct: "d",
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      a: "<js>",
      b: "<script>",
      c: "<javascript>",
      d: "<code>",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById('quiz');
  
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Restart Quiz</button>
        `;
      }
    }
  });