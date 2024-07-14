const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');
const showPasswordButton = document.getElementById('show-password');
const passwordText = document.getElementById('password-text');

let isPasswordVisible = false;

passwordInput.addEventListener('keyup', () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  updateStrengthMeter(strength);
});

showPasswordButton.addEventListener('click', () => {
  isPasswordVisible = !isPasswordVisible;
  passwordInput.type = isPasswordVisible ? 'text' : 'password';
  if (isPasswordVisible) {
    passwordText.textContent = password;
  } else {
    passwordText.textContent = '';
  }
});

function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength++;
  }
  if (/[a-z]+/.test(password)) {
    strength++;
  }
  if (/[A-Z]+/.test(password)) {
    strength++;
  }
  if (/[0-9]+/.test(password)) {
    strength++;
  }
  if (/[^a-zA-Z0-9]+/.test(password)) {
    strength++;
  }
  return strength;
}

function updateStrengthMeter(strength) {
  const meter = strengthMeter.querySelector('.meter');
  meter.style.width = `${strength * 20}%`;
  switch (strength) {
    case 0:
      strengthMeter.textContent = 'Weak';
      meter.classList.add('weak');
      meter.classList.remove('medium', 'strong');
      break;
    case 1:
    case 2:
      strengthMeter.textContent = 'Medium';
      meter.classList.add('medium');
      meter.classList.remove('weak', 'strong');
      break;
    case 3:
    case 4:
    case 5:
      strengthMeter.textContent = 'Strong';
      meter.classList.add('strong');
      meter.classList.remove('weak', 'medium');
      break;
  }
}
