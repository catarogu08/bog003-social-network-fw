import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

const LogApp = () => {
    return (
        <form className="log">
            <label>
                Correo:
                <input type="text" id="email" />
            </label>
            <label>
                Contraseña
                <input type="text" id="password" />
            </label>
            <button>Iniciar sesion</button>
            <Link to="/">Aun no me registro :(</Link>
        </form>
    )
}

export default LogApp;