import React, { useState } from 'react';

const ShowApp = () => {
  const [Marca, setMarca] = useState("")
  return (
    <form className="form" >
      <label>
        Marca:
        <input type="text" id="mark" value={Marca} onChange={(e) => {
          console.log(e.timeStamp)
          setMarca(e.target.value)
        }} />
      </label>
      h
      <label>
        Modelo:
        <input type="text" id="model" />
      </label>
      <hr />
      <label>
        Descripcion:
        <input type="text" id="Description" />
      </label>
      <hr />
      <button onClick={() => {
        console.log(Marca)
      }}>Crear</button>
      <button type="submit" >Subir Cambios</button>
    </form>
  )

};
export default ShowApp;
