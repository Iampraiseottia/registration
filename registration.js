const name = document.getElementById('name');
const userName = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const form = document.getElementById('form');
const confirmPassword = document.getElementById('Confirm-password');
const country = document.getElementById('Country');

form.addEventListener('submit', event => {
  event.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputFieldControl = element.parentElement;
  const displayError = inputFieldControl.querySelector('.error');

  displayError.innerHTML = message;
  inputFieldControl.classList.add('error');
  inputFieldControl.classList.remove('success');
};

const setSuccess = element => {
  const inputFieldControl = element.parentElement;
  const displayError = inputFieldControl.querySelector('.error');

  displayError.innerHTML = '';
  inputFieldControl.classList.add('success');
  inputFieldControl.classList.remove('error');
};

const validateInput = () => {
  const nameValue = name.value.trim();
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (nameValue === '') {
    setError(name, 'Full Name Is Required');
  } else {
    setSuccess(name);
  }

  if (userNameValue === '') {
    setError(userName, 'User Name Is Required');
  } else {
    setSuccess(userName);
  }

  if (emailValue === '') {
    setError(email, 'Email Address Is Required');
  } else {
    setSuccess(email);
  }
  if (countryValue === '') {
    setError(country, 'Country Is Required');
  } else {
    setSuccess(country);
  }

  if (passwordValue === '') {
    setError(password, 'Password Is Required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password Must Be At Least 8 Characters');
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Confirm The Above Password');
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, 'Passwords Do Not Match');
  } else {
    setSuccess(confirmPassword);
  }
};