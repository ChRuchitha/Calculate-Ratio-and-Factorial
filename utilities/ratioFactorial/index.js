const ratioOfNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(1, 2, 3));
