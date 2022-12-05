//Variables needed from html
var quizContainer = document.getElementById('quiz');
var timerElement = document.getElementById("timer-count");
var points = document.getElementById("points");
var questionContainer = document.getElementById('question');
var startHeader = document.getElementById('start-header');
var finalResult = document.getElementById('display-result');
var finalPoints = document.getElementById("final-result");
var result = document.getElementById("result");
var initials = document.getElementById("submit-results")
var allScores = document.getElementById("all-scores")
// Gathered all buttons needed 
var startButton = document.getElementById("start-button");
var resetButton = document.getElementById("reset-button");
var submitButton = document.getElementById("submit")
var highScoreButton = document.getElementById("high-score-button")

// Getting the options for quiz
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
var timer;
var timerCount;
var currentQuestion = 0;

//Array of Questions to be asked
const questions = [
    {
        question: "Commonly used data types DO NOT include?",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    }, 
    {
        question: "The condition in an if/else statement is enclosed with ___________ ?",
        answers: {
            a: "quotes",
            b: "parentheses",
            c: "curly brackets",
            d: "square brackets", 
        },
        correctAnswer: "b" 
    }, 
    {
        question: "Arrays in JavaScript can be used to store ",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above", 
        },
        correctAnswer: "d" 
    }, 
    {
        question: "String values must be enclosed within ________ when being assigned to variables  ",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis", 
        },
        correctAnswer: "c" 
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log", 
        },
        correctAnswer: "d" 
    }
];


// correct Response function 
function correctResponse() {
    result.innerText = "Correct🏆 ";
    points.textContent++;
    currentQuestion++;
    nextQuestion();
}

 
// Function for Incorrect response
function incorrectResponse() {
   result.innerText = "Wrong "
    points.textContent--
    currentQuestion++;

    // Timer decreases by 10 if incorrect choice is made
    timerCount -= 10;
    timerElement.textContent = timerCount;

    if (timerCount <= 0) {
        displayResults ();
        return;
    }

    nextQuestion();

}

// Timer Function
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;

      // Tests if time has run out
      if (timerCount <= 0) {
        // If timer has run out display results 
        displayResults(); 
      }
    }, 1000);
}

// Function for display results

function displayResults() {
    //Hide quiz when finished  
    quizContainer.classList.add("nodisp")
    //Display Result form 
    finalResult.classList.remove("nodisp")
    //Clear timer 
    clearInterval(timer);
    //Display final points
    finalPoints.textContent = points.textContent;
}

//function to store points when submit button is clicked
function storePoints() {
    //Gets current stored points
    var currentPointsString = localStorage.getItem("points");
    //If else statement for if there is points are already stored 
    if (currentPointsString) {
        localStorage.setItem("points", currentPointsString + "_" + finalPoints.textContent);
    } else {
        localStorage.setItem("points", finalPoints.textContent);
    }
    //Gets current initials 
    var currentInitialString = localStorage.getItem("initials");
    //If else statement for if there is initials already stored 
    if(currentInitialString) {
        localStorage.setItem("initials", currentInitialString + "_" + initials.value);
    } else {
        localStorage.setItem("initials", initials.value );
    }
    // Goes to beginning of quiz once submit is hit 
    startQuiz()
}

     
  
// function for getpoints displaying on view high scores 
function getPoints() {
    //Removing nodisp class so High scores are visible 
    allScores.classList.remove("nodisp");
    
    // Ensures that points are cleared everytime view high scores button is clicked
    allScores.innerText = ""

    // Making Point and all initial into arrays instead of string 
    var pts = localStorage.getItem("points")?.split("_");
    var inits = localStorage.getItem("initials")?.split("_");

    // If stored value doesn't exist, let user know there are no saved values
    if (!pts) {
        allScores.innerText = "no saved scores";
    } else {
        // If a value is retrieved from client storage set t
        for (var i = 0; i < pts.length; i++) {
            allScores.innerText += pts[i] + " " + inits[i] + "\r";
        }
    }

}

// Function to reset points 

function resetPoints() {
    // Resets win and loss counts
    points.textContent = 0;
    // Clears local storage
    localStorage.clear()
    //Goes to beginning of quiz once Reset is clicked
    startQuiz()
}
 
  



//function to start Quiz 
function startQuiz() {
    //Makes sure current question is equal to 0 so that quiz can restart when submit or reset button is clicked
    currentQuestion = 0
    //Hide starter header when quiz starts 
    startHeader.classList.add("nodisp");
    // Display quiz 
    quizContainer.classList.remove("nodisp")

    timerCount = 75;
    startTimer();

    nextQuestion();
}


// function to go to next Question
function nextQuestion() {
    // If statement to display results after last question
    if (currentQuestion >= questions.length) {
        displayResults();
        return;
    }
    //Remove event listeners
    option1.removeEventListener('click', correctResponse)
    option1.removeEventListener('click', incorrectResponse)
    option2.removeEventListener('click', correctResponse)
    option2.removeEventListener('click', incorrectResponse)
    option3.removeEventListener('click', correctResponse)
    option3.removeEventListener('click', incorrectResponse)
    option4.removeEventListener('click', correctResponse)
    option4.removeEventListener('click', incorrectResponse)
  
    // Getting the question
    questionContainer.innerText= questions[currentQuestion].question;

    // Providing option text
    option1.innerText = questions[currentQuestion].answers.a;
    option2.innerText = questions[currentQuestion].answers.b;
    option3.innerText = questions[currentQuestion].answers.c;
    option4.innerText = questions[currentQuestion].answers.d;

    if (questions[currentQuestion].correctAnswer === "a") {
        option1.addEventListener('click', correctResponse)
        option2.addEventListener('click', incorrectResponse)
        option3.addEventListener('click', incorrectResponse)
        option4.addEventListener('click', incorrectResponse)
        
    }
    else if (questions[currentQuestion].correctAnswer === "b") {
        option1.addEventListener('click', incorrectResponse)
        option2.addEventListener('click', correctResponse)
        option3.addEventListener('click', incorrectResponse)
        option4.addEventListener('click', incorrectResponse)

    }
    else if (questions[currentQuestion].correctAnswer === "c") {
        option1.addEventListener('click', incorrectResponse)
        option2.addEventListener('click', incorrectResponse)
        option3.addEventListener('click', correctResponse)
        option4.addEventListener('click', incorrectResponse)

    }
    else if (questions[currentQuestion].correctAnswer === "d") {
        option1.addEventListener('click', incorrectResponse)
        option2.addEventListener('click', incorrectResponse)
        option3.addEventListener('click', incorrectResponse)
        option4.addEventListener('click', correctResponse)

    }
}


// Listening for click on start button
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', storePoints);
resetButton.addEventListener("click", resetPoints);
highScoreButton.addEventListener("click", getPoints);











  
  

  




