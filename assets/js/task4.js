// Задане значення змінної isLogin (залогінився користувач чи ні).
// Сформувати header наступним чином:
// зліва - логотип (зображення на ваш смак). Класично лого є посиланням на головну сторінку.
// справа - або кнопки Login та Register (якщо користувач не залогінився)
//                 або фото і ім'я користувача (якщо користувач залогінився)
// *додатково застилізувати фото користувача: за значанням isMale для чоловіка зробити синю рамку, для жінки червону, при незаданому значенні isMale - сіру.

const isLogin = true;
const isMale =

if (isLogin) {
  document.write(`
  <header>
  <div class="logo">LOGO</div>
  <div class="user-info">
    <p>Joe Dou</p>
    <img src="" alt="">
  </div>
</header>
  `);
} else {
  document.write(`
  <header>
  <div class="logo">LOGO</div>
  <div class="btn-wrap">
    <button>Login</button>
    <button>Register</button>
  </div>
</header>
`);
}
