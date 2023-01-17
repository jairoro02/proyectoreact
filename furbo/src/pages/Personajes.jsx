import React,{useEffect, useState} from 'react';
import { todosPersonajes } from '../funciones';

const Jugadores = () => {
  const [personajes, setPersonajes] = useState(null)
  useEffect(()=>{
    todosPersonajes(setPersonajes)
  },[])

  return  (
    <>
      {personajes != null?(
        personajes.map(personaje => (
          <div key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <a href={`/personajes/${personaje.id}`}>{personaje.name}</a>
          </div>
        ))
      ): ('no hay personajes')}
    
    
    </>
  )
}

export default Jugadores
