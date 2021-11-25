import react, { useState } from "react";


const Photos = () => {
    const [photo, setPhoto] = useState("");
    return (
        <>
            <input type="file" name="photo" id="photo" onChange={(e) => { setPhoto(e.target.value) }} />
        </>
    )
}
export default Photos;