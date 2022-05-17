var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function newSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColor = buttonColors[newSequence()];

gamePattern.push(randomChosenColor);

$("." + randomChosenColor).delay(100).fadeOut(75).fadeIn(75);

var audio = new Audio("sounds/" + randomChosenColor + '.mp3');
audio.play();