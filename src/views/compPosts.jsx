import React, { useState } from 'react';
import { db } from '../firebase.js';

const ShowApp = () => {
  const [Mark, setMark] = useState("");
  const [Model, setModel] = useState("");
  const [Description, setDescription] = useState("");

  const btnSubmitChanges = (e) => {
    e.preventDefault();
    
    db.collection("posts").doc().set({
      mark: Mark,
      model: Model,
      description: Description
    })
      .then(() => {
        console.log("Document successfully written!");
        setMark.value = '';
        setModel.value = '';
        setDescription.value= '';
    })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  console.log(Mark, Model, Description)
  
  return (
    <form className="form" onSubmit={btnSubmitChanges}>
      <label>
        Marca:
        <input type="text" id="mark" name="Mark" onChange={(e) => { setMark(e.target.value) }} />
      </label>
      <hr />
      <label>
        Modelo:
        <input type="text" id="model" name="Modelo" onChange={(event) => { setModel(event.target.value) }} />
      </label>
      <hr />
      <label>
        Descripcion:
        <input type="text" id="Description" name="Description" onChange={(event) => { setDescription(event.target.value) }} />
      </label>
      <hr />
      <button type="submit">Crear</button>
      <button>Subir Cambios</button>
    </form>
  )

};
export default ShowApp;
