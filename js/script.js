const form = document.querySelector('.validationForm');
const useridInput = document.getElementById('userid');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const useridError = document.getElementById('useridError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  // UserID 検証
  const userid = useridInput.value.trim();
  if (!userid) {
    showError(useridInput, useridError, 'User IDは必須項目です。');
    isValid = false;
  } else if (
    /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\u2605-\u2606\u2190-\u2195\u203B]/g.test(
      userid
    )
  ) {
    showError(useridInput, useridError, 'User IDは半角英数字のみで入力してください。');
    isValid = false;
  } else if (userid.length < 3 || userid.length > 10) {
    showError(useridInput, useridError, 'User IDは3文字以上10文字以内で入力してください。');
    isValid = false;
  } else if (/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/.test(userid)) {
    showError(useridInput, useridError, 'User IDは特殊記号を使用しないでください。');
    isValid = false;
  } else {
    clearError(useridInput, useridError);
  }

  // MailAddress 検証
  const email = emailInput.value.trim();
  if (!email) {
    showError(emailInput, emailError, 'MailAddressは必須項目です。');
    isValid = false;
  } else if (
    /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\u2605-\u2606\u2190-\u2195\u203B]/g.test(
      email
    )
  ) {
    showError(emailInput, emailError, 'MailAddressは半角英数字で入力してください。');
    isValid = false;
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/i.test(email)) {
    showError(emailInput, emailError, '正しいMailAddressを入力してください。');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // PassWord 検証
  const password = passwordInput.value.trim();
  if (!password) {
    showError(passwordInput, passwordError, 'PassWordは必須項目です。');
    isValid = false;
  } else if (password.length < 3 || password.length > 10) {
    showError(passwordInput, passwordError, 'PassWordは3文字以上10文字以内で入力してください。');

    isValid = false;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,10}$/.test(password)) {
    showError(
      passwordInput,
      passwordError,
      'PassWordは大文字小文字数字の組み合わせで入力してください。'
    );
    isValid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  if (isValid) {
    form.submit();
  }
}

function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearError(errorElement) {
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}
