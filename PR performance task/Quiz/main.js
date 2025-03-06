const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      answer: 0 // Index of the correct answer
    },
    {
    question: "What is the purpose of the <body> tags in html?",
    options: ["It's where the actual contents go for users to see and interact","To show information of the website","to link hyperlinks and stylesheets"],
    answer: 0
    },
    {
    question: "How many header tags are there?",
    options: ["3","5","10","9","6"],
    answer: 4
    },
    {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets","Coloring scaling styling","Calculating Scheming Scanning"],
    answer: 0
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      options: ["color", "background-color", "bgcolor", "style"],
      answer: 1
    },
    {
      question: "What is the correct syntax for calling Console?",
      options: ["Console.log()", "console.log()", "log.console()", "console()"],
      answer: 1
    },
    {
    question: "Which one of these tags are Italic",
    options: ["<l>", "<italic>", "<i>"],
    answer: 2
    },
    {
    question: "Which symbol is used for Modulus?",
    options: ["%", "^"],
    answer: 0
    },
    {
    question: "These are examples of variables in JS, except for one.",
    options: ["let","const","var","Var"],
    answer: 3
    },
    {
    question: "These are different ways in styling in CSS, except for one",
    options: ["inline","inlining","internal","external"],
    answer: 1
    },
    // Add more questions here...
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ''; // Clear previous options

    questionData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(optionElement);
    });
  }

  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("next-button").style.display = "none";
  }

  loadQuestion(); // Load the first question when the page loads