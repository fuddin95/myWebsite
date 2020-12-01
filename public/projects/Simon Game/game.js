//Global Variables
var gamePattern = [];
var gameState = true;
var userClickedPattern = [];
var sequenceMatch = true;
var gameLevel = 0; //level of the game player
var loopLevel = 0; // level to check the user input
var btnColor = ["red", "blue", "green", "yellow"];


//Starting the game
$(document).keypress(function () {
    if (gameState) {
        nextSequence();
        gameState = false;
    }
});


//what button got clicked and action taken
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    //now we need to check if the user clicked the right button
    //by passing the this every time user clicks we check if he clicked the 
    //right option
    checkAnswer(userClickedPattern.length - 1); //-1 since the array starts from zero
});


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); //0-3
    var randomColorChosen = btnColor[randomNumber];
    gamePattern.push(randomColorChosen); //saves the color pattern

    //flashing the next button
    $("#" + randomColorChosen).fadeIn(300).fadeOut(300).fadeIn(300);
    playSound(randomColorChosen);
    animatePress(randomColorChosen);
    gameLevel++; //increment the level
    $("#level-title").text("Level " + gameLevel);
    userClickedPattern = [];
}


//Checking the answer if it matched the gmae pattern

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        //this if statement will only execute incase you have clicked the required time
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        gameEnds();
    }
}

function gameEnds() {
    $("h1").text("Game Over, Press any Key to Restart");
    $("body").toggleClass("game-over");
    setTimeout(function () {
        $("body").toggleClass("game-over");
    }, 200);
    startOver();
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    gameState = true;
    gameLevel = 0;
}

/* Functions for playing sound and animating the buttons */

//function for playing sound
function playSound(name) {
    // adding sounds to the color button
    var btnAudio = new Audio("sounds/" + name + ".mp3");
    btnAudio.play();
}

//animation
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}