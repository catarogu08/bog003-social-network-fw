import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase.js';



const RegisterApp = (props) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const historyApp = useHistory();

  const btnSubmit = (e) => {
    e.preventDefault();
    if(Name !== ''  && Email !== '' && Password !== ''){
    console.log(Name, Email, Password)
    auth.createUserWithEmailAndPassword(Email, Password)

   // if( Name !== ''  && Email !== '' && Password !== ''){
      .then((userCredential) => {
        historyApp.push('/post')
        console.log('usuario registrado')
        // ...
      })
      .catch((error) => {
        window.alert('Revisa tu inf')
        // ..
      });
    } else{
     window.alert('Revisa tus datos');
  }

  }

  return (
    <section className="register">
      <form className="register" onSubmit={btnSubmit}>
        <label>
          Nombre:
          <input type="text" id="name" placeholder="Mario" onChange={(event) => { setName(event.target.value) }} />
        </label>
        <hr />
        <label>
          Correo:
          <input type="email" id="emailRegister" name="email" placeholder="car@gmail.com" onChange={(event) => { setEmail(event.target.value) }} />
        </label>
        <hr />
        <label>
          Contraseña:
          <input type="password" id="passRegister" name="password" placeholder="********" onChange={(event) => { setPassword(event.target.value) }} />
        </label>

        <button type="submit" className='register'>Registrarme</button>
      </form>
      <Link to="/login" id="linkRegs">Ya tengo cuenta¡</Link>
    </section>
  )
};
export default RegisterApp;


