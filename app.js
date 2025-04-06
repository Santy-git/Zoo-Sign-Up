const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sign-Up");
  const successModal = document.getElementById("success-modal");
  const closeSuccessModal = document.getElementById("close-modal");
  const errorModal = document.getElementById("error-modal");
  const closeErrorModal = document.getElementById("close-error-modal");
  const errorMessage = document.getElementById("error-message");
  const password = document.getElementById("pass");
  const confirmPassword = document.getElementById("re-pass");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Verifica si el formulario es válido
    if (form.checkValidity()) {
      // Verifica si las contraseñas coinciden
      if (password.value === confirmPassword.value) {
        successModal.classList.remove("hidden"); // Muestra el modal de éxito
        form.reset(); // Limpia el formulario después de enviarlo
      } else {
        showErrorModal("Passwords do not match. Please try again."); // Muestra el modal de error
      }
    } else {
      showErrorModal("Please fill out all required fields correctly."); // Muestra el modal de error
    }
  });

  closeSuccessModal.addEventListener("click", () => {
    successModal.classList.add("hidden"); // Oculta el modal de éxito
  });

  closeErrorModal.addEventListener("click", () => {
    errorModal.classList.add("hidden"); // Oculta el modal de error
  });

  // Función para mostrar el modal de error con un mensaje personalizado
  function showErrorModal(message) {
    errorMessage.textContent = message; // Actualiza el mensaje del modal
    errorModal.classList.remove("hidden"); // Muestra el modal de error
  }

  // Funcionalidad para mostrar/ocultar contraseñas
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetInput = document.getElementById(targetId);

      if (targetInput.type === "password") {
        targetInput.type = "text";
        button.innerHTML = `
          <svg class="icon-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.3 21.3 0 0 1 5.07-6.07"></path>
            <path d="M1 1l22 22"></path>
          </svg>
        `;
      } else {
        targetInput.type = "password";
        button.innerHTML = `
          <svg class="icon-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
      }
    });
  });
});