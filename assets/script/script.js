var startGameBtn = document.querySelector("#starter");
var startScreen = document.querySelector("#start-screen");
const qAndAs = {
    questions: ["How do you change the text of an html element in Javascript?", "Which of these is not a valid declaration type?", "What tag is used to import Javascript into an html document?", "How do you save a value to the local storage of a browser?", "What loop starts with a variable declaration, then a condition to run on, then an iteration advancement."],
    firstAnswers: ["innerContent", "textContent", "text", "innerText"],
    secondAnswers: ["var", "int", "const", "let"],
    thirdAnswers: ["code", "import", "script", "link"],
    fourthAnswers: ["localContent", "localCache", "sessionStorage", "localStorage"],
    fifthAnswers: ["for", "while", "for each", "do while"],
}
var timeDisplay = document.querySelector("#timer");
var questionDiv = document.querySelector("#question-div");





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
    setInterval(function() {
        timeStart--;
        timeDisplay.textContent = timeStart;
    }, 1000);
}

function startGame() {
    startScreen.setAttribute("class", "hide-screen");
    console.log("start game working");
    timer();
    questionDiv.removeAttribute("class");
}
//function for running the questions
function questionPicker(_question, _answerArray, _correctAnswer) {
    //Adds the question to the top of the page
    displayedQuestion = document.querySelector("#question-title").textContent = _question.value;
    questionForm = document.createElement("form");

    for(let i = _answerArray.length-1; i >= 0; i--){
        document.createElement()
    }

    //deducts time if the user answers the question incorrectly
    if (userSelection !== _correctAnswer){
        timeLeft -= 20;
    }


    //Removes the elements displayed to continue to the next question
}
startGameBtn.onclick = startGame;