//-----------Generate random number ---------------------------------------------
let randNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randNumber;

//-----------Invokinng listenner on 'Check' button -------------------------------
document.querySelector(".check").addEventListener("click", function () {
  //---------input a number-------------------------------------------------------
  let inputNumber = Number(document.querySelector(".guess").value);

  //---------------condition for out of range input number------------------------
  if (inputNumber > 0 && inputNumber <= 20) {
    //-------------condition for winning------------------------------------------
    if (inputNumber == randNumber) {
      document.querySelector(".message").textContent =
        "You found the matching number!";

      //---------consdition for high inout number ------------------------------
    } else if (inputNumber > randNumber) {
      document.querySelector(".message").textContent = "too high!";

      //----------condition for low input number ---------------------------------
    } else {
      document.querySelector(".message").textContent = "too low!";
    }

    //-----------condition for invalid input number-------------------------------
  } else {
    document.querySelector(".message").textContent = "Invalid Input Number!";
  }
});
