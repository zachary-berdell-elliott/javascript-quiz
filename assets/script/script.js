var startGameBtn = document.getElementById("#game-starter");
const qAndAs = {
    questions: ["How do you change the text of an html element in Javascript?", "Which of these is not a valid declaration type?", "What tag is used to import Javascript into an html document?", "How do you save a value to the local storage of a browser?", "What loop starts with a variable declaration, then a condition to run on, then an iteration advancement."],
    firstAnswers: ["innerContent", "textContent", "text", "innerText"],
    secondAnswers: ["var", "int", "const", "let"],
    thirdAnswers: ["code", "import", "script", "link"],
    fourthAnswers: ["localContent", "localCache", "sessionStorage", "localStorage"],
    fifthAnswers: ["for", "while", "for each", "do while"],
}
const timeStart = 40;

//Starts the game when button is clicked
startGameBtn.addEventListener("click", function () {
    event.preventDefault();
    console.log("working");
   // timer();
    startGameBtn.remove();
    questionPicker(qAndAs.questions[0], qAndAs.firstAnswers, qAndAs.firstAnswers[1]);
});

//function for operating the timer
function timer() {
    setInterval(timeStart * 1000);
}

//function for running the questions
function questionPicker(_question, _answerArray, _correctAnswer) {
    //Adds the question to the top of the page
    displayedQuestion = document.createElement("h2").textContent = _question.value;
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