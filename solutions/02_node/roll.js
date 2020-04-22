const numberOfSides = 12;
const numberOfDice = 10;

const rollDice = () =>
 [...Array(numberOfDice)].map(d =>  Math.floor(Math.random()*numberOfSides) + 1);

let dice = rollDice();
console.log(dice);