const form = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector("#errorMessage");

const clearErrors = () => {
  errorMessage.textContent = "";
  usernameInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");
};

const showError = (input, message) => {
  errorMessage.textContent = message;
  input.classList.add("input-error");
  input.focus();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username) {
    showError(usernameInput, "用户名不能为空");
    return;
  }

  if (!password) {
    showError(passwordInput, "密码不能为空");
    return;
  }

  if (password.length < 6) {
    showError(passwordInput, "密码长度不能少于6位");
    return;
  }

  alert("登录成功");
  form.reset();
  clearErrors();
  usernameInput.focus();
});
