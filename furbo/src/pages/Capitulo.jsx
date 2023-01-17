import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { episodioIndividual, prueba} from "../funciones";

const Capitulo = () => {

    const [episodio, setEpisodio] = useState(null)
    const [personajes, setPersonajes] = useState(null)

    const params = useParams()
    useEffect(()=>{
        episodioIndividual(params.id, setEpisodio)
        prueba(params.id, setPersonajes)
    },[])

    return (
        <>
        {episodio && personajes != null ?(
            <div>
                <h2>Nombre: {episodio.name}</h2>
                <h2>Id: {episodio.id}</h2>
                <a href={personajes[5]}>{personajes[5].name}</a>
                <img src={episodio.image} alt="" />
            </div>
            
        ): ('no hay episodio')}
        </>
    )
}

export default Capitulo