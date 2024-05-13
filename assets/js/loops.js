// 1. Вивести числа від 25 до 0 (порядок зменшення).

// while
document.write(`<h3>Вивести числа від 25 до 0 (порядок зменшення).
</h3>`);

let currentNumber = 25;
const TOTAL_NUMBER = 0;

while (currentNumber >= TOTAL_NUMBER) {
  document.write(`<p>${currentNumber}; </p>`);
  console.log(currentNumber);
  currentNumber--;
}

// do... while;

// for

// 2. Вивести числа від 10 до 50, які кратні 5.

document.write(`<h3>Вивести числа від 10 до 50, які кратні 5
</h3>`);

let number = 10;
const TOTAL_COUNT = 50;

while (number <= TOTAL_COUNT) {
  document.write(`<p>${number}; </p>`);
  console.log(number);
  number += 5;
}
console.log("Success");

// do... while;

// for

// 3. *Знайти суму чисел в межах від 1 до 100.

document.write(`<h3>Знайти суму чисел в межах від 1 до 100.
</h3>`);

let firstNumber = 1;
const LAST_NUMBER = 100;
let sum = 0;

while (firstNumber <= LAST_NUMBER) {
  sum += firstNumber;
  firstNumber++;
}
console.log("Сума чисел в межах від 1 до 100 = ", sum);
document.write("Сума чисел в межах від 1 до 100 = ", sum);

// do... while;

// for
