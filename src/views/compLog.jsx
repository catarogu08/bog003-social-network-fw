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
        console.log('usuario logueado');
        historyApp.push('/post')
      })
      .catch((error) => {
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
      <hr />
      <label>
        Contraseña
        <input type="password" id="password" name="password" onChange={(event) => { setPassword(event.target.value) }} />
      </label>
      <button type="submit" id="butLog">Iniciar sesion</button>
      {error ? <p> {error} </p>: null}
      <Link to="/" id="linkLog">Aun no me registro :(</Link>
    </form>
  )
}

export default LogApp;