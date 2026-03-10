let num1;
let num2;
let score = 0;
let time = 30;

function generateQuestion(){
num1 = Math.floor(Math.random()*10);
num2 = Math.floor(Math.random()*10);

document.getElementById("question").innerHTML =
num1 + " + " + num2;
}

function checkAnswer(){

let userAnswer = document.getElementById("answer").value;

if(userAnswer == num1 + num2){
score++;
}

document.getElementById("score").innerHTML = score;

generateQuestion();
document.getElementById("answer").value="";
}

setInterval(function(){
time--;
document.getElementById("time").innerHTML = time;

if(time == 0){
alert("Game Over! Score: " + score);
location.reload();
}

},1000);

generateQuestion();