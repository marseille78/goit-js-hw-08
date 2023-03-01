import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  (function() {
    const KEY_LOCAL_STORAGE = "feedback-form-state";
    const dataForm = {};
    const refs = {
      form: document.querySelector('.feedback-form'),
      email: document.querySelector('.feedback-form input[name=email]'),
      message: document.querySelector('.feedback-form textarea[name=message]')
    };

    if (localStorage.getItem(KEY_LOCAL_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
      dataForm.email = data.email || '';
      dataForm.message = data.message || '';
    } else {
      dataForm.email = '';
      dataForm.message = '';
    }

    refs.email.value = dataForm.email;
    refs.message.value = dataForm.message;

    refs.email.addEventListener('input', throttle((e) => sendData(e, 'email'), 500));
    refs.message.addEventListener('input', throttle((e) => sendData(e, 'message'), 500));

    refs.form.addEventListener('submit', handleSubmit);

    function sendData(e, field) {
      dataForm[field] = e.target.value;
      localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(dataForm));
    }

    function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(refs.form);
      let isValid = true;

      formData.forEach((value, name) => {
        if (value.trim().length === 0) {
          isValid = false;
        }
      });

      if (!isValid) {
        console.log('Fill Complete all fields of this form, please.');
        return;
      }

      console.log(JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)));
      localStorage.removeItem(KEY_LOCAL_STORAGE);
      refs.form.reset();
    }
  })();
});