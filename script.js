'use strict';
const register = document.forms.register;
const nameForm = refister.elements.name;
const emailForm = refister.elements.email;
const telForm = refister.elements.tel;
const linkForm = refister.elements.link;
const formError = document.querySelector('.form__error');
const formButton = document.querySelector('.form__button');

//Сохранение формы на сервере
class Api {
    constructor(url, token) {
        this.url = url;
        this.token = token
    }
    saveData(saveName, saveEmail, saveTel, saveLink) {
        return fetch(`${this.url}/users/me`, {
            method: 'POST',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: saveName,
              email: saveEmail,
              tel: saveTel,
              link: saveLink
            })
          })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
                return Promise.reject(`Ошибка при добавлении формы: ${res.status}`);
            })
            .catch(err => console.log(err))
    }
}

//Проверка валидности форм
class ValidateForm {
    constructor(formValid) {
        this.formValid = formValid;
        this.listener(formValid, linkOrJob);
        this.validate();
    }
    listener() {
        this.formValid.addEventListener('input', () => {
            this.validate();
        })
    }
    validate() {
        if (this.formValid.value.length === 0) {
            formButton.setAttribute('disabled', true);
            formButton.classList.add("popup__button-disabled");
            formError.setAttribute('display', block);
        } else if (this.linkOrJob.validity.valid && this.name.validity.valid) {
            formButton.removeAttribute('disabled');
            formButton.classList.remove("popup__button-disabled");
        } else if (this.formValid.validity.valid) {

        } else {
            formButton.setAttribute('disabled', true);
            this.button.classList.add("popup__button-disabled");
        }
    }
}

//Информация о том, что форма загружается
function registration(isLoading) {
    if (isLoading) {
      formButton.textContent = 'Загружаю...';
    } else {
      formButton.textContent = 'Отправить';
    }
}

//Сохранение формы на сервере
register.addEventListener('submit', function(event) {
    event.preventDefault();
    registration(true);
    api.saveData(nameForm.value, emailForm.value, telForm.value, urlForm.value)
      .then(res => {
        
      })
      .finally(res => profileLoading(false));
      
  });
