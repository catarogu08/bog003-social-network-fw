import React from 'react';

const RegisterApp = () => {
  return (
      <section className="register">
        <h3>Registro</h3>
        <p>Nombre:</p>
          <input type="text" placeholder="your car"/>
        <p>Correo:</p>
          <input type="text" placeholder="car@gmail.com"/>
        <p>Contraseña:</p>
          <input type="password" placeholder="********"/>
        <button>Registrarme</button>
        <button>Ya tengo cuenta </button>
      </section>
  )
};
export default RegisterApp;
