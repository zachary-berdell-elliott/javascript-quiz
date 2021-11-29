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
var timeDisplay = document.querySelector("#timer");
var questionDiv = document.querySelector("#question-div");
var questionOptions = document.querySelector("#options");
var submitBtn = document.querySelector("#submit-score");
var nameInput = document.querySelector("#name-input");
var questionIndex = 0;
var questionTitle = document.querySelector("#question-title");
var timeState;
var finalScreen = document.querySelector("#final-screen");
var finalScore = document.querySelector("#final-score");
var timeStart = 40;
var highScoreList = document.getElementById("highscores");
var mainMenuLink = document.querySelector('#main-menu-link');
var clearBtn = document.querySelector("#clear-scores");
var highScore = document.querySelector('#highscore-tracker');
var getHighscores = JSON.parse(localStorage.getItem("saved-scores")) || [];
getHighscores.sort((a, b) => b.score-a.score);
highScore.textContent = getHighscores[0].score || 0;

//function for operating the timer
function timer() {
    timeStart = 40;
   timeState = setInterval(function() {
        timeStart--;
        timeDisplay.textContent = timeStart;
        if(timeStart <= 0){
            timeStart = 0;
            endQuiz();
        }
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
}

 function valueCheck() {
    if (this.value !== qAndAs[questionIndex].answer){
       timeStart -= 10;
       console.log("incorrect"); //if have time add feedback
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
     //Hide questions and unhide end screen
     finalScreen.removeAttribute("class");
     submitBtn.removeAttribute('class');
     questionDiv.setAttribute("class", "hide-screen");
     finalScore.textContent = timeStart;
 }

 function saveScore(){
     var userName = nameInput.value;
    var savedScores = {
        name: userName,
        score: timeStart,
    }
    getHighscores.push(savedScores);
    localStorage.setItem("saved-scores", JSON.stringify(getHighscores));
    showHighscores(getHighscores);
    submitBtn.setAttribute('class', 'hide-screen');
    mainMenuLink.removeAttribute('class');
    clearBtn.removeAttribute('class')
 }

 function showHighscores(getHighscores) {
    getHighscores.sort((a, b) => b.score-a.score);
    console.log(getHighscores);
    getHighscores.forEach (i =>  {
        console.log("running");
        console.log(i);
        var highScoreBlock = document.createElement('li');
        highScoreBlock.setAttribute('class', 'highscore-block');
        highScoreBlock.textContent = i.name + ': ' + i.score;
        document.querySelector('#highscores').appendChild(highScoreBlock);
    });
 }

 function clearScores(){
    localStorage.setItem("saved-scores", null);
    highScoreList.textContent = '';
 }

startGameBtn.onclick = startGame;
submitBtn.onclick = saveScore;
clearBtn.onclick = clearScores;