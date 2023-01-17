import React,{useEffect, useState} from 'react';
import { todosEpisodios } from '../funciones';

const Capitulos = () => {
  const [episodios, setEpisodios] = useState(null)

  useEffect(()=>{
    todosEpisodios(setEpisodios)
  },[])
  return  (
    <>
      {episodios != null?(
        episodios.map(episodio => (
          <div key={episodio.id}>
            <a href={`/episodios/${episodio.id}`}>{episodio.name}</a>
          </div>
        ))
      ): ('no hay episodios')}
    
    
    </>
  )
}

export default Capitulos
