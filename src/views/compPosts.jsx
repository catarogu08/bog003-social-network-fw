import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import '../styles/stylesComp.css';
import ShowPost from './compShow.jsx';


const ShowApp = () => {
  const [Mark, setMark] = useState("");
  const [Model, setModel] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowMsj, setShowMsj] = useState(false);
  const [MsjError, setMsjError] = useState(false);
  const [data, setData] = useState([]);


  useEffect(
    () => {

      db.collection('posts').onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach(doc => {
          array.push({ ...doc.data(), id: doc.id })
        })
        setData(array)

      })

    }, []);


  const btnSubmitChanges = (e) => {
    e.preventDefault();

    if (Mark !== '' && Model !== '' && Description !== '') {
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

          console.error("Error writing document: ", error);
        })
    } else {
      window.alert('revisa tu informacion')
      setMsjError(true)
    }




  };




  return (
    <>
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
        {ShowMsj === true ? <p>Publicacion Creada</p> : ''}
        {MsjError === true ? <p>Revisa tu Informacion</p> : ''}
      </form>
      <div>
        {data.map(item => {
          return (
            <ShowPost key={item.id} 
            mark={item.mark} 
            model={item.model} 
            description={item.description} />
          )
        })}
      </div>
    </>
  )

}
export default ShowApp;
