var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function newSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColor = buttonColors[newSequence()];

gamePattern.push(randomChosenColor);