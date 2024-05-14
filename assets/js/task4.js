// Задане значення змінної isLogin (залогінився користувач чи ні).
// Сформувати header наступним чином:
// зліва - логотип (зображення на ваш смак). Класично лого є посиланням на головну сторінку.
// справа - або кнопки Login та Register (якщо користувач не залогінився)
//                 або фото і ім'я користувача (якщо користувач залогінився)
// *додатково застилізувати фото користувача: за значанням isMale для чоловіка зробити синю рамку, для жінки червону, при незаданому значенні isMale - сіру.

const isLogin = true;
const isMale = true;

let borderColor;
if (isMale === null) {
  borderColor = "grey";
} else if (isMale) {
  borderColor = "blue";
} else {
  borderColor = "red";
}

if (isLogin) {
  document.write(`
  <header>
    <div class="logo-wrapper">
      <a href="#home"><img src="./assets/images/icons8-freebsd-50.png" alt=""></a>
    </div>
    <div class="user-info">
      <p class = "user-name">User Name</p>
      <div  style = "border:5px solid ${borderColor}; border-radius:50px">
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  </header>
  `);
} else {
  document.write(`
  <header>
  <div class="logo-wrapper">
  <a href="#home"><img src="./assets/images/icons8-freebsd-50.png" alt=""></a>
  </div>
  <div class="btn-wrap">
    <button class=btn>Login</button>
    <button class=btn>Register</button>
  </div>
</header>
`);
}
