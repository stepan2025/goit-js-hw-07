const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements.email.value.trim();
  const passwordInput = event.target.elements.password.value.trim();

  if (!emailInput || !passwordInput) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailInput,
    password: passwordInput,
  };

  console.log(formData);
  loginForm.reset();
});
