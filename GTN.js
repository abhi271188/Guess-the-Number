//Variable declarations
let score = 20;
let highScore = 0;

//Generate a random number
let randNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randNumber);

//Activating the event listener on 'again' button
document.querySelector(".again").addEventListener("click", function () {
  randNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randNumber);
  score = 20;
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "guess the number...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
});

//Activating the event listener on 'check' button
document.querySelector(".check").addEventListener("click", function () {
  //Input the number
  let inputNumber = Number(document.querySelector(".guess").value);

  //Input number should between 0 and 20
  if (inputNumber > 0 && inputNumber <= 20) {
    //Condition for winning
    if (inputNumber == randNumber) {
      document.querySelector(".message").textContent =
        "Found the matching number!";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randNumber;

      //Condition for updating the highscore
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //Conditon for input number is higher than random number
    } else if (inputNumber > randNumber) {
      //Condition to limit number of chances
      if (score > 0) {
        document.querySelector(".message").textContent = "too high!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lost the game.";
      }

      //Conditon for input number is lower than random number
    } else if (inputNumber < randNumber) {
      //Condition to limit number of chances
      if (score > 0) {
        document.querySelector(".message").textContent = "too low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lost the game.";
      }
    }

    //Condition for invalid number
  } else {
    document.querySelector(".message").textContent = "Invalid number!";
  }
});
