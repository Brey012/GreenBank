import { expresionesRegulares } from '../js/expresiones.js';

export class Usuario {
  constructor(correo, contraseña) {
    this.correo = correo;
    this.contraseña = contraseña;
  }

  // Método para validar el correo
  validarCorreo() {
    return expresionesRegulares.correo.test(this.correo);
  }

  // Método para validar la contraseña
  validarContraseña() {
    return expresionesRegulares.contraseña.test(this.contraseña);
  }
}