import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function onInputData(event) {
  formData = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };
  //formData[event.target.name] = event.target.value.trim(); // виводит в localStorage только один ключ со значением, если другой не заполнений
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
const { email, message } = event.currentTarget.elements;
      if (email.value.trim() === "" || message.value.trim() === "") {
      alert(`Please fill in all the fields!`);
      return;
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });

  if (localStorage.getItem(LOCAL_KEY)) {
    // const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
    // console.log(data);
    localStorage.removeItem(LOCAL_KEY);
  }
  event.currentTarget.reset();
  formData = {};
}

function populateFeedbackForm() {
  const data = localStorage.getItem(LOCAL_KEY);
  if (!data) return;
  formData = JSON.parse(data);
  refs.input.value = formData.email ?? '';
  refs.textarea.value = formData.message ?? '';
}
