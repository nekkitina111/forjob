// Функция, проверяющая валидность введенного логина
function checkLogin(form) {
  let regularExpressionMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i; // Регулярное выражение для e-mail
  let enterLogin = form.login.value; // Получение значения из поля для ввода e-mail
  let validMail = regularExpressionMail.test(enterLogin); // Проверка на соответствие введенного значения регулярному выражению
  let errorForm = document.getElementById("textError");

  // Если введенный адрес электронной почты не совпал с регулярным выражением, то выведется сообщение
  if (!validMail) {
    errorForm.innerHTML = "Адрес электронной почты введен неправильно!";
  }

  return validMail; // Если введенная строка не совпала с регулярным выражением, то функция вернет false,в противном случае true
}
