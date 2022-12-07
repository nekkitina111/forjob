function checkPassword(form) {
        let enterPassword = form.password.value; // Получение значения из поля для ввода пароля

        let lowerRegistersLetters = "йцукенгшщзхъфывапролджэячсмитьбюqwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
        let upperRegistersLetters = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮQWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
        let digitSymbols = "0123456789"; // Цифры
        let specialSymbols = "!@#$%^&*()_-+=\|/.,:;[]{ }"; // Спецсимволы

        let isLowerLetters = false; // Есть ли в пароле буквы в нижнем регистре
        let isUpperLetters = false; // Есть ли в пароле буквы в верхнем регистре
        let isDigitSymbols = false; // Есть ли в пароле цифры
        let isSpecialSymbols = false; // Есть ли в пароле спецсимволы

        let errorForm = document.getElementById("textError");

        if (enterPassword.length == 0) {
                errorForm.innerHTML = "Заполните поле пароля";
                return false;
        }

        if (enterPassword.length < 6) {
                errorForm.innerHTML = "Ненадежный пароль. Пароль должен содержать не менее 6 символов";
                return false;
        }

        for (var i = 0; i < enterPassword.length; i++) {
                if (lowerRegistersLetters.indexOf(enterPassword[i]) != -1) {
                        isLowerLetters = true;
                } else if (upperRegistersLetters.indexOf(enterPassword[i]) != -1) {
                        isUpperLetters = true;
                } else if (digitSymbols.indexOf(enterPassword[i]) != -1) {
                        isDigitSymbols = true;
                } else if (specialSymbols.indexOf(enterPassword[i]) != -1) {
                        isSpecialSymbols = true;
                }
        }

        let flagError = true;
        let messageError = "";

        if (!isLowerLetters) {
                messageError += " <br> - минимум одну строчную букву";
                flagError = false;
        }

        if (!isUpperLetters) {
                messageError += " <br> - минимум одну прописную букву";
                flagError = false;
        }

        if (!isDigitSymbols) {
                messageError += " <br> - минимум одну цифру";
                flagError = false;
        }

        if (!isSpecialSymbols) {
                messageError += " <br> - минимум один спец.символ";
                flagError = false;
        }

        errorForm.innerHTML = "Ненадежный пароль. Пароль должен содержать:" + messageError;

        return flagError;
}
