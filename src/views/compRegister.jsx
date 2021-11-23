import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase.js';



const RegisterApp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const historyApp = useHistory();

  const btnSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password)
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        historyApp.push('/post')
        console.log('usuario registrado')
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
  console.log(name);
  return (
    <section className="register">
      <form className="register" onSubmit={btnSubmit}>
        <label>
          Nombre:
          <input type="text" id="name" placeholder="Mario" onChange={(event) => { setName(event.target.value) }} />
        </label>
        <label>
          Correo:
          <input type="email" id="emailRegister" name="email" placeholder="car@gmail.com" onChange={(event) => { setEmail(event.target.value) }} />
        </label>
        <label>
          Contraseña:
          <input type="password" id="passRegister" name="password" placeholder="********" onChange={(event) => { setPassword(event.target.value) }} />
        </label>
        <button type="submit">Registrarme</button>
      </form>
      <button>Registro con Gmail</button>
      <Link to="/login">Ya tengo cuenta¡</Link>
    </section>
  )
};
export default RegisterApp;


