// 1) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (наприклад, від 16 до 64).
// Функція приймає в якості параметра вік людини і повертає значення булевого типу.

// Очікуваний результат:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

function isWorkingAgePerson(age) {
  const customerAge = age >= 16 && age <= 64;
  return customerAge;
}

console.log(isWorkingAgePerson(+prompt("Input customer age:", "16")));
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

const checkMultiplicity = function (a, b) {
  return a % b === 0 ? "true" : "false";
};

console.log(
  checkMultiplicity(
    +prompt("Введіть перше число"),
    +prompt("Введіть друге число")
  )
);
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

// 3) Перевірка можливості існування трикутника.
// Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо трикутник можливий, і false, якщо ні (див. умови існування трикутника, наприклад https://zkan.com.ua/rizne/jak-pereviriti-chi-isnue-trikutnik.html).

/**
 * 
The function determines whether a triangle with such sides is possible
 * @param {number} a - side one
 * @param {number} b - side two
 * @param {number} c - side three
 * @returns {boolean} - returns "true" if triagle is possible, and "false" if in not
 */

function triagle(a, b, c) {
  const isTriagle = a + b > c && a + c > b && b + c > a;
  return isTriagle;
}

console.log(triagle(1, 2, 10));
console.log(
  triagle(
    +prompt("Довжина першої сторони:", "0"),
    +prompt("Довжина другої сторони:", "0"),
    +prompt("Довжина третьої сторони:", "0")
  )
);

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

// Наприклад, для розрахунку площі квадрата функція має приймати довжину сторони, а площі прямокутника -- довжини двох сторін.

/**
 * the function calculates the area of ​​the figure
 * @param {number} width - width of figure
 * @param {number} length - lenght of figure
 * @returns {number} - the area of ​​the figure
 */

const figureSquare = function (width, length) {
  width = +prompt("Введіть ширину:", 0);
  length = +prompt("Введіть довжину:", 0);
  return width * length;
};
console.log("Площа фігури =", figureSquare(), "см.кв");

function figureVolume(parWidth, parLenght, parWidth) {
  parWidth = +prompt("Введіть ширину:", 0);
  parLenght = +prompt("Введіть довжину:", 0);
  parHeight = +prompt("Введіть висоту:", 0);
  return parWidth * parLenght * parHeight;
}
console.log("Об'єм фігури =", figureVolume(), "см.куб");

function coneSquare(radius, coneSlantHeight) {
  const PI = Math.PI;
  radius = +prompt("Введіть радіус конуса:");
  coneSlantHeight = +prompt("Введіть довжину твірної конуса:");
  coneSquareFormule = PI * radius * (radius + coneSlantHeight);
  return coneSquareFormule;
}

console.log("Площа повної поверхні конуса =", coneSquare(5, 10));

// 5) *Реалізувати функцію, яка приймає число і повертає булеве значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

function isSimpleNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isSimpleNumber(prompt("Input number:")));

// 6) *Реалізувати функцію для формування розмітки картки товару. Функція має приймати
// адресу зображення товару (по дефолту, наприклад, взяти https://cdn-icons-png.flaticon.com/512/1170/1170679.png),
// назву,
// короткий опис,
// ціну,
// ціну зі знижкою (якщо undefined - то не виводити, якщо знижка є - то вивести нову ціну, стару ціну закреслити і порахувати і вивести розмір знижки у відсотках (округлити до цілого))

function createProductCard(
  productName,
  productDescription,
  productPrice,
  productDiscount,
  productImage = "https://cdn-icons-png.flaticon.com/512/1170/1170679.png"
) {
  let productCard = `
    <article class="product-card">
      <img class="product-img" src="${productImage}" alt="Product Image">
      <div class="product-details">
        <h3 class="product-title">${productName}</h3>
        <p class="product-description">${productDescription}</p>
        <p>Ціна: ${productPrice} грн</p>
  `;

  if (productDiscount !== undefined && productDiscount < productPrice) {
    const productPriceDiscount = Math.round(
      ((productPrice - productDiscount) / productPrice) * 100
    );
    productCard += `
      <p class="price">Ціна: ${productPrice} грн</p>
      <p>Знижена ціна: ${productDiscount} грн</p>
      <p>Знижка: ${productPriceDiscount}%</p>
    `;
  }

  productCard += `
      </div>
    </article>
  `;

  return productCard;
}

const productCard = createProductCard(
  "Назва товару",
  "Елегантний, функціональний і стильний предмет для дому",
  100,
  80
);

document.write(productCard);
