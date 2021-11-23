import ract, { useState } from "react";


const photos = () =>{
    const [photo, setPhoto] = useState("");
        return (
        <input type="file" name="photo" id="photo" onChange={(e)=>{setPhoto(e.target.value)}} />
    )
}