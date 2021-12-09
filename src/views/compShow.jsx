import React, { useEffect, useState } from "react";
import { db } from '../firebase.js';

const ShowPost = (props) => {
    const [Delete, setDelete] = useState();
    

    /* db.collection("posts").doc().delete()
     .then(() => {
       console.log("Document successfully deleted!");
   }).catch((error) => {
       onClick={() => setCount(count + 1)}
       console.error("Error removing document: ", error);
   });*/
    return (

        <section id="postShow">
            <p>Marca: {props.mark}</p>
            <p>Modelo: {props.model}</p>
            <p>Descripcion: {props.description}</p>
            <button>Editar</button>
            <button onClick={(event) => { setDelete(event.target.value) }}>
                Eliminar
            </button>
            {/*<button className="like" onClick={()=>setCount(16)}>
                ♥ {count}
            </button>
            <p> A {count} les a gustado tu Publicacion</p>*/}
            

        </section>

    )
}
export default ShowPost;
