import React from "react";
import {
  Link,
  useHistory
} from 'react-router-dom'
import { useState } from "react/cjs/react.development";
import { auth } from "../firebase";



const LogApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const historyApp = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log('usuario logueado');
        historyApp.push('/post')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        setError( error.message);
      });
  }
console.log(error);
  return (
    <form className="log" onSubmit={handleSubmit}>
      <label>
        Correo:
        <input type="text" id="email" name="email" onChange={(event) => { setEmail(event.target.value) }} />
      </label>
      <label>
        Contraseña
        <input type="password" id="password" name="password" onChange={(event) => { setPassword(event.target.value) }} />
      </label>
      <button type="submit">Iniciar sesion</button>
      {error ? <p> {error} </p>: null}
      <Link to="/">Aun no me registro :(</Link>
    </form>
  )
}

export default LogApp;