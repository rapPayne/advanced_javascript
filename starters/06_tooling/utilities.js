const add = (...nums) => nums.reduce((prev, curr) => prev + curr, 0);
const subtract = (base, ...nums) => nums.reduce( (prev, curr) => prev - curr, base);
const multiply = (...nums) => nums.reduce( (prev, curr) => prev * curr, 1);
const divide = (base, ...nums) => nums.reduce( (prev, curr) => prev / curr, base);

export const calculator = { add, subtract, multiply, divide };