//Ready Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var sourceimg1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", sourceimg1);


//Ready Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var sourceimg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", sourceimg2);


//Score
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  document.querySelector("title").innerHTML = "Player 1 Wins!";

}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
  document.querySelector("title").innerHTML = "Player 2 Wins!"
}

else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "👔 It's a Tie! 👔";
  document.querySelector("title").innerHTML = "Go Again!"
}
