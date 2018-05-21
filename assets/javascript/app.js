function check() {
    alert("Correct!");


var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var questions3 = document.trivia.question3.value;
var correct = 0;

if (question1 == "FC Barcelona") {
    correct++;
}
if (questions2 == "Zinedine Zidane"){
    correct++;
}
if (question3 == "Real Madrid") {
    correct++;
}

document.getElementById("postSubmit").style.visibility ="visible";
document.getElementById("correctAnswers").innerHTML = "You answered " + correct + " correct.";
}