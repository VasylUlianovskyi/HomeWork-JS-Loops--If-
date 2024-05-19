// 1. Створити об'єкт customer, що містить такі властивості:
// ім'я,
// прізвище,
// електронна адреса,
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;
// методи:
// виведення адреси,
// зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
// Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
// Видалити у об'єкта властивість адреса.

// Зробити копії об'єкту customer двома різними способами.

// * Реалізувати картку з відомостями про customer,

const customer = {
  customerName: "Nick",
  customerSurname: "Nickovych",
  customerEmail: "n_nickovych@gmail.com",
  customerPass: "qwaweqs",
  customerPhone: "+380950000000",
  customerAddress: {
    city: "Kyiv",
    street: "Khreshchatyk",
    building: 5,
    apartment: 43,
  },
  getnewPhone(newCustomerPhone) {
    this.customerPhone = newCustomerPhone;
  },
};

customer.newCustomerPhone = prompt("Input new number:");
customer.isMale = true ? "male" : "female";

console.log(customer);

const newCustomer = Object.assign({}, customer);
console.log(newCustomer);

const newCustomer1 = { ...customer };
console.log(newCustomer1);

const customerCard = `
<article class="customer-card">
  <h2>${customer.customerName} ${customer.customerSurname}</h2>
  <p>${customer.customerEmail}</p>
  <p>${customer.newCustomerPhone}</p>
  <p>${customer.customerAddress.city}, ${customer.customerAddress.street} ${customer.customerAddress.building}/${customer.customerAddress.apartment}</p>
</article>
`;

document.write(customerCard);
delete customer.customerAddress;

// 2. Перебрати і вивести властивості об'єкту cat
// {
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
  console.log(key, cat[key]);
}

// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор,
// назва,
// рік видання,
// видавництво (рядок або *об'єкт з властивостями місто, назва),
// ціна.
//    Передбачити методи: (* в прототип)
// для обчислення віку книги (у роках),
// для зміни ціни книги.

function Book(author, title, year, publisher, city, price) {
  this.bookAuthor = author;
  this.bookTitle = title;
  this.bookYear = year;
  this.bookPublisher = { publisher, city };
  this.bookPrice = price;
}

Book.prototype.getBookYears = function () {
  return new Date().getFullYear() - this.bookYear;
};

Book.prototype.cahngePrice = function (newBookPrice) {
  return (newBookPrice = this.price);
};

const book = new Book("Стівен Кінг", "Острів Дума", 2004, "КСД", "Харків", 430);

console.log(book);

book.newBookPrice = "500";
book.getBookYears(2004);
console.log("Книзі", book.getBookYears(), "років");

const book2 = new Book(
  "Хорхе Луїс Бохрес",
  "Книга Піску",
  2022,
  "Фоліо",
  "Харків",
  300
);

console.log(book2);

book.newBookPrice = "400";
book.getBookYears(2022);
console.log("Книзі", book2.getBookYears(), "років");
