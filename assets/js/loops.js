// 1. Вивести числа від 25 до 0 (порядок зменшення).

// while
document.write(`<h3>Вивести числа від 25 до 0 (порядок зменшення).
</h3>`);

let currentNumber = 25;
const TOTAL_NUMBER = 0;

while (currentNumber >= TOTAL_NUMBER) {
  document.write(`<span>${currentNumber}; </span>`);
  console.log(currentNumber);
  currentNumber--;
}

// do... while;

let count = 25;
const FINAL_COUNT = 0;

document.write("<p> ");

do {
  document.write(`<span>${count--},</span>`);
  console.log(count);
} while (count >= FINAL_COUNT);

document.write(" </p>");

// for

let stopCount = 0;

document.write("<p> ");
for (let startCount = 25; startCount >= stopCount; startCount--) {
  document.write(`<span>#${startCount} </span>`);
}

document.write(" </p>");

// 2. ВИВЕСТИ ЧИСЛА ВІД 10 ДО 50, ЯКІ КРАТНІ 5.

document.write(`<h3>Вивести числа від 10 до 50, які кратні 5
</h3>`);

// while
let number = 10;
const TOTAL_COUNT = 50;

while (number <= TOTAL_COUNT) {
  document.write(`<span>${number}, </span>`);
  number += 5;
}

// do... while;

let value = 10;

document.write("<p> ");

do {
  document.write(`<span>${value}; </span>`);
  value += 5;
} while (value <= 50);

document.write(" </p>");

// for

document.write("<p> ");

for (let i = 10; i <= 50; i += 5) {
  document.write(`<span>#${i} </span>`);
}

document.write(" </p>");

// 3. *Знайти суму чисел в межах від 1 до 100.
// while

document.write(`<h3>Знайти суму чисел в межах від 1 до 100.
</h3>`);

let firstNumber = 1;
const LAST_NUMBER = 100;
let sum = 0;

while (firstNumber <= LAST_NUMBER) {
  sum += firstNumber;
  firstNumber++;
}
document.write(`<p>Сума чисел в межах від 1 до 100 = ${sum}</p>`);

// do... while;

let a = 1;
let mult = 0;

do {
  mult += a;
  a++;
} while (a <= 100);
document.write(`<p>Сума чисел в межах від 1 до 100 = ${mult}</p>`);

// for

let finalNumber = 100;
let sumValue = 0;

for (let b = 1; b <= finalNumber; b++) {
  sumValue += b;
}
document.write(`<p>Сума чисел в межах від 1 до 100 = ${sumValue}</p>`);
