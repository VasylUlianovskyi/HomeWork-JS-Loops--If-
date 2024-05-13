// 1. Задане значення isDay (true - зараз день, false - зараз ніч).
// Вивести напис
// "Світла тема", якщо зараз день,
// "Темна тема", якщо зараз ніч.
// *Стилізувати фразу:
// темний текст на світлому тлі, якщо зараз день,
// світлий текст на темному тлі, якщо зараз ніч.

const isDay = false;
const theme = isDay ? "white" : "black";
const textColor = isDay ? "black" : "white";
const textStatus = isDay ? "Світла тема" : "Темна тема";
document.write(
  `<h1 style = "background-color:${theme}; padding:20px; border: 2px solid black; text-align:center"><span style = color:${textColor}>${textStatus}</span></h1>`
);

// 2. Відомо, чи користувач онлайн (isOnline).
// Якщо користувач НЕ онлайн, то вивести попередження "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"

document.write("<h2>Вітаємо на порталі</h2>");

const isOnline = false;

if (!isOnline) {
  document.write(
    "<h2 style = color:red >Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет</h2>"
  );
}

// 3. Користувач вводить суму покупки.
// Обчислити та вивести остаточну суму покупки з урахуванням знижки.
// Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн.

let price = Number(prompt("Input price:", "0"));
let firstDiscount = 0.03;
let secondDiscount = 0.05;

const FIRST_DISCOUNT_VALUE = 500;
const SECOND_DISCOUNT_VALUE = 800;
sum = 0;

if (price > FIRST_DISCOUNT_VALUE && price <= SECOND_DISCOUNT_VALUE) {
  sum = price - price * firstDiscount;
  document.write("Total Price: ", sum);
} else if (price > SECOND_DISCOUNT_VALUE) {
  sum = price - price * secondDiscount;
  document.write("Total Price: ", sum);
  // } else if (price = NaN) {
  //   document.write(`<p style = color:red>INVAVID VALUE</p>`);
} else {
  document.write("Total Price: ", price);
}
