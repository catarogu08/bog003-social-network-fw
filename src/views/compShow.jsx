import React from "react";

const ShowPost = (props) => {
    return (

        <section id="postShow">
            <img src="" alt="" />
             <p>Marca: {props.mark}</p>
             <p>Modelo: {props.model}</p>
             <p>Descripcion: {props.description}</p>
            <button>Editar</button>
            <button>Eliminar</button>
            <button className="like"> ♥ </button>
        </section>

    )
}
export default ShowPost;
