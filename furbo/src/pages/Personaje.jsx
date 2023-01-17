import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { personajeIndividual } from "../funciones";

const Personaje = () => {

    const [personaje, setPersonaje] = useState(null)

    const params = useParams()
    useEffect(()=>{
        personajeIndividual(params.id, setPersonaje)
    },[])

    return (
        <>
        {personaje != null ?(
            <div>
                <h2>Nombre: {personaje.name}</h2>
                <h2>Id: {personaje.id}</h2>
                <img src={personaje.image} alt="" />
            </div>
        ): ('no hay personaje')}
        </>
    )
}

export default Personaje