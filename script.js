let counterValue = 0;
let displayCounterValue = document.createElement("div");
const buttonsBox = document.getElementsByClassName("p");
const buttonIncrease = document.createElement("button");
const buttonDecrease = document.createElement("button");

document.body.append(displayCounterValue, buttonIncrease, buttonDecrease);
buttonIncrease.innerText = "Increase";
buttonDecrease.innerText = "Decrease";
displayCounterValue.innerHTML = counterValue;

const clickMore = (event) => {
  if (counterValue < 10) {
    counterValue += 1;
    displayCounterValue.innerHTML = counterValue;
    document.body.style.backgroundColor = "green";
  }
};

const clickLess = (event) => {
  if (counterValue > 0) {
    counterValue -= 1;
    displayCounterValue.innerHTML = counterValue;
    document.body.style.backgroundColor = "red";
  }
};

buttonIncrease.addEventListener("click", clickMore);
buttonDecrease.addEventListener("click", clickLess);
