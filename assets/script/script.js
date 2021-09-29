var startGameBtn = document.querySelector("#starter");
var startScreen = document.querySelector("#start-screen");
var optionDiv = document.querySelector("#options");
const qAndAs = [
    {
    question: "How do you change the text of an html element in Javascript?", 
    options: ["innerContent", "textContent", "text", "innerText"],
    answer: "textContent",
    },
    {
    question: "Which of these is not a valid declaration type?",
    options: ["var", "int", "const", "let"],
    answer: "int",
    },
    {
    question: "What tag is used to import Javascript into an html document?",
    options: ["code", "import", "script", "link"],
    answer: "script",
    },
    {
    question: "How do you save a value to the local storage of a browser?",
    options: ["localContent", "localCache", "sessionStorage", "localStorage"],
    answer: "localStorage",
    },
    {
    question: "What loop starts with a variable declaration, then a condition to run on, then an iteration advancement?",
    options: ["for", "while", "for each", "do while"],
    answer: "for"
    }
]
   /* questions: ["How do you change the text of an html element in Javascript?", "Which of these is not a valid declaration type?", "What tag is used to import Javascript into an html document?", "How do you save a value to the local storage of a browser?", "What loop starts with a variable declaration, then a condition to run on, then an iteration advancement."],
    firstAnswers: ["innerContent", "textContent", "text", "innerText"],
    secondAnswers: ["var", "int", "const", "let"],
    thirdAnswers: ["code", "import", "script", "link"],
    fourthAnswers: ["localContent", "localCache", "sessionStorage", "localStorage"],
    fifthAnswers: ["for", "while", "for each", "do while"],
]*/
var timeDisplay = document.querySelector("#timer");
var questionDiv = document.querySelector("#question-div");
var questionOptions = document.querySelector("#options");
var questionIndex = 0;
var questionTitle = document.querySelector("#question-title");
var timeState;

var timeStart = 40;

//Starts the game when button is clicked
/*startGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("working");
   // timer();
    questionPicker(qAndAs.questions[0], qAndAs.firstAnswers, qAndAs.firstAnswers[1]);
}); */

//function for operating the timer
function timer() {
   timeState = setInterval(function() {
        timeStart--;
        timeDisplay.textContent = timeStart;
    }, 1000);
}

function startGame() {
    startScreen.setAttribute("class", "hide-screen");
    console.log("start game working");
    timer();
    questionDiv.removeAttribute("class");
    questionPicker();
}
//function for running the questions
function questionPicker() {
    var displayedQuestion = qAndAs[questionIndex];
    optionDiv = document.querySelector("#options");
    questionTitle.textContent = displayedQuestion.question;
    //Adds the question to the top of the page
    //questionTitle.textContent = question.value;

    /*for(let i = 0; i > displayedQuestion.options.length; i++){
        var optionBtn = document.createElement("button");
        optionBtn.setAttribute("value", qAndAs.options[i].value);
        optionDiv.appendChild(optionBtn);
    } */
    displayedQuestion.options.forEach(function(choice, i) {
        // create new button for each choice
        var optionBtn = document.createElement("button");
        optionBtn.setAttribute("class", "choice");
        optionBtn.setAttribute("value", choice);
        optionBtn.textContent = i + 1 + ". " + choice;
        optionBtn.addEventListener("click", valueCheck);
        optionDiv.appendChild(optionBtn);
        console.log(qAndAs[questionIndex].answer);
    });

    
    //deducts time if the user answers the question incorrectly
    /*if (userSelection !== _correctAnswer){
        timeLeft -= 20;
    } */


    //Removes the elements displayed to continue to the next question
}
//create a function that checks value of each button
// if statement that checks if this.value === qAndAs[questInex].answer
 function valueCheck() {
    if (this.value !== qAndAs[questionIndex].answer){
       timeStart -= 10;
       console.log("incorrect");
    }
    else{
        console.log("correct");
    }
    optionDiv.innerHTML = null;
    questionIndex++;
    if(questionIndex === qAndAs.length){
        endQuiz();
    }
    else{
        questionPicker();
    }
 }

 function endQuiz(){
     clearInterval(timeState);
 }
startGameBtn.onclick = startGame;