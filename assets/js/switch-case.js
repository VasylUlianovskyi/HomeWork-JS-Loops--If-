// 1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). Передбачити обробку помилкового введення номера дня тижня (в гілка default, з повідомленням "дня з таким номером не існує").

let weekDay = Number(prompt("Введіть день тижня:"));
switch (weekDay) {
  case 1:
    alert("Понеділок");
    break;
  case 2:
    alert("Вівторок");
    break;
  case 3:
    alert("Середа");
    break;
  case 4:
    alert("Четвер");
    break;
  case 5:
    alert("П'ятниця");
    break;
  case 6:
    alert("Субота");
    break;
  case 7:
    alert("Неділя");
    break;
  default:
    alert("Дня з таким номером не існує");
}

// 2. (за бажанням) У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.

let day = Number(prompt("Введіть день місяця:"));
switch (true) {
  case day >= 1 && day <= 10:
    alert("Перша декада");
    break;
  case day >= 11 && day <= 20:
    alert("Друга декада");
    break;
  case day >= 21 && day <= 31:
    alert("Третя декада");
    break;
  default:
    alert("Такого дня місяця не існує");
}
