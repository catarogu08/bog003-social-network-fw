import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const RegisterApp = (props) => {
  return (
    <section className="register">
      <h2>Bienvenido {props.name}, Tu edad es {props.age}, Tu altura es {props.altura} </h2>
      <h1>YourCar.com</h1>
      <form className="register">
        <label>
          Nombre:
          <input type="text" id="name" placeholder="Mario" />
        </label>
        <label>
          Correo:
          <input type="email" id="emailRegister" placeholder="car@gmail.com" />
        </label>
        <label>
          Contraseña:
          <input type="password" id="passRegister" placeholder="********" />
        </label>
      </form>
      <Link to="/login">Ya tengo cuenta¡</Link>
    </section>
  )
};
export default RegisterApp;

