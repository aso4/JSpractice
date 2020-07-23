function measureStrength() {
  let passwordElem = document.getElementById('password-input');
  let strengthElem = document.getElementById('strength-level');

  let strengthLevel = 'Weak';

  let password = passwordElem.value;

  if (password.length >= 8 && (password.length < 12)) {
    strengthLevel = 'Strong';
  } else if (password.length >= 12) {
    strengthLevel = 'Very Strong';
  }

  strengthElem.innerText = strengthLevel;
}
