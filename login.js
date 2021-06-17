const form = document.getElementById('login-box');
const idNumber = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = email.value.trim();
  const passwordValue = password.value.trim();

  if (idNumber.length===13) {
    email.parentElement.className = 'login-box success';
  } else {
    email.parentElement.className = 'login-box fail';
  }

  if (passwordValue.length >= 6) {
    password.parentElement.className = 'login-box success';
  } else {
    password.parentElement.className = 'login-box fail';
  }
});



