var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    // $("." + userChosenColor).delay(100).fadeOut(75).fadeIn(75);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push[randomChosenColor];
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$("html").keydown(function() {
    nextSequence();
});