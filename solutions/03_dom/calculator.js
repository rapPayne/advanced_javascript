let firstValue = 0;
let operator = "";
const inputBox = document.querySelector("input");
document.querySelectorAll('button')
  .forEach(btn => btn.addEventListener("click", e => {
    switch (btn.textContent) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        appendCharacter(btn.textContent);
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        symbol(btn.textContent);
        break;
      case "=":
        equals();
        break;
      case "c":
        clearInput();
        break;
      default:
        console.warn(`The ${btn.textContent} key isn't supported`);
    }
  }));

function appendCharacter(character) {
  inputBox.value = inputBox.value + character;
}
function clearInput() {
  firstValue = 0;
  operator = "";
  inputBox.value = "";
}
function symbol(theSymbol) {
  operator = theSymbol;
  firstValue = Number(inputBox.value);
  inputBox.value = "";
}

function equals() {
  const secondValue = Number(inputBox.value);
  switch (operator) {
    case "+":
      firstValue = firstValue + secondValue;
      break;
    case "-":
      firstValue = firstValue - secondValue;
      break;
    case "x":
      firstValue = firstValue * secondValue;
      break;
    case "/":
      firstValue = firstValue / secondValue;
      break;
    default:
      console.warn(`${operator} is not a valid operator`);
  }
  inputBox.value = firstValue;
}