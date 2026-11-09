const questionPool = [
        {
            question: "According to traditional European folklore, farm animals are said to talk at stroke of midnight on Christmas Eve.",
            answer: true
        },
        {
            question: "Santa Claus traditionally delivers presents riding a magical flying bicycle.",
            answer: false
        },
        {
            question: "Jingle Bells was originally written to be sung for Thanksgiving celebrations.",
            answer: true
        }
    ];

    let currentQuestion;
    let score = 0;

    const questionElement = document.querySelector("#question-text");
    const scoreDisplay = document.querySelector("#current-score");
    const trueButton = document.querySelector("#true-btn");
    const falseButton = document.querySelector("#false-btn");
    const displaybody = document.querySelector("#q-box");

    trueButton.addEventListener("click", function() { 
        checkAnswer(true); 
    });

    falseButton.addEventListener("click", function() { 
        checkAnswer(false); 
    });

    function showNextQuestion() {
        displaybody.style.background = "";
        let randomIndex = Math.floor(Math.random() * questionPool.length);
        currentQuestion = questionPool[randomIndex];
        questionElement.innerText = currentQuestion.question;
    }

    function checkAnswer(userselection) {
        if (userselection === currentQuestion.answer) {
            score = score + 1;
            scoreDisplay.innerText = score;
            displaybody.style.background = "#c5ffc8e2";
            questionElement.innerText = "correct" ;
        } else {
            displaybody.style.background= "#e89595ef";
            questionElement.innerText = " WRONG " ;
        }
        setTimeout(showNextQuestion, 2000);
    }

    showNextQuestion();