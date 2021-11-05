import React from "react";

const LogApp = () => {
    return (
        <div className="log">
            <h3>LogIn</h3>
            <p>Correo:</p>
             <input type="text" />
            <p>Contraseña:</p>
             <input type="password" />
             
            <button>Iniciar sesion</button>
            <button>No tengo cuenta:(</button>
        </div>
    )
}

export default LogApp;