import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { episodioIndividual, personajesCapitulo, personajeCapitulo} from "../funciones";

const Capitulo = () => {

    const [episodio, setEpisodio] = useState(null)
    const [personajes, setPersonajes] = useState(null)
    const [personaje, setPersonaje] = useState(null)

    const params = useParams()
    useEffect(()=>{
        episodioIndividual(params.id, setEpisodio)
        personajesCapitulo(params.id, setPersonajes)
        
        {personajes != null ? (
            console.log("funciona")
        ):(console.log("f"))}

    },[])

    console.log(personajes)

    return (
        <>
        {episodio && personajes != null ?(
            <div>
                <h2>Nombre: {episodio.name}</h2>
                <h2>Id: {episodio.id}</h2>
                {/* <a href={personajes[5]}>{personaje.id}</a> */}
                
            </div>
            
        ): ('no hay episodio')}
        </>
    )
}

export default Capitulo