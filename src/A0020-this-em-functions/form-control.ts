import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFilds(username, email, password, password2);
  validateEmail(email);
  validatePassword(password, password2);
  if (shouldSendForm(target)) console.log('Form enviado');
};

form.addEventListener('submit', submitEventFn);

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErroMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkForEmptyFilds(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErroMessage(input, 'Campo não pode ser vazio');
  });
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => {
    send = false;
  });
  return send;
}

function validateEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErroMessage(email, 'Este email não é valido');
}

function validatePassword(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErroMessage(password, 'As senhas não são iguais');
    showErroMessage(password2, 'As senhas não são iguais');
  }
}
