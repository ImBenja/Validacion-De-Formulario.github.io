document.getElementById("Formu").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(".inputs");
  const emailInput = document.querySelector("#Input-Email");
  const mensajeTop = document.querySelector(".enviado");
  let isValid = true;

  inputs.forEach((input) => {
    const errorLabel = input.nextElementSibling;
    const errorIcon = errorLabel.nextElementSibling;

    input.classList.remove("error");
    errorLabel.classList.remove("active");
    errorIcon.classList.remove("active");

    if (!input.value.trim()) {
      Errores(input, errorLabel, errorIcon);
      isValid = false;
    }
  });

  if (!emailInput.value || !ValidarEmail(emailInput.value)) {
    Errores(
      emailInput,
      emailInput.nextElementSibling,
      emailInput.nextElementSibling.nextElementSibling
    );
    emailInput.placeholder = "email@example/com";
    emailInput.value = "";
    isValid = false;
  }

  if (isValid) {
    mensajeTop.style.display = "block";
  }
});

function Errores(input, label, icon) {
  input.classList.add("error");
  label.classList.add("active");
  icon.classList.add("active");
}

function ValidaEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
