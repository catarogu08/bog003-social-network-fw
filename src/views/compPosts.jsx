import React, { useState } from 'react';
import { db } from '../firebase.js';
import '../styles/stylesComp.css'

const ShowApp = () => {
  const [Mark, setMark] = useState("");
  const [Model, setModel] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowMsj, setShowMsj] = useState(false);
  const [MsjError, setMsjError] = useState(true);

  const btnSubmitChanges = (e) => {
    e.preventDefault();

    db.collection("posts").doc().set({
      mark: Mark,
      model: Model,
      description: Description
    })
      .then(() => {
        setShowMsj(true);
        console.log("Document successfully written!");
        setMark('')
        setModel('')
        setDescription('')
      })
      .catch((error) => {
        setMsjError(false)
        console.error("Error writing document: ", error);
      });
    //console.log(e.target['Mark'].value);
    //console.log(e.target['Model'].value);
    //console.log(e.target['Description'].value);

  //  db.collection("posts").doc(id)
    //  .onSnapshot((doc) => {
      //  console.log();
     // });
  }

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
     {ShowMsj===true?<p>Publicacion Creada</p>:''} 
     {MsjError===false?<p>Revisa tu Informacion</p>:''}
    </form>
  )

};
export default ShowApp;
