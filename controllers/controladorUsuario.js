import { Usuario } from '../models/Usuario.js';

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuario = new Usuario(email, password);

    // Validación de correo electrónico
    if (!usuario.validarCorreo()) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Validación de contraseña
    if (!usuario.validarContraseña()) {
      alert('La contraseña debe tener entre 4 y 10 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      return;
    }

    // Si todo es válido, puedes enviar el formulario o realizar otras acciones
    alert('Inicio de sesión exitoso');
    loginForm.submit(); // Envía el formulario
  });
});