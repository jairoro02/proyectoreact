import axios from "axios";

const todosPersonajes = async (state) => {
  const peticion = await axios.get('https://rickandmortyapi.com/api/character')
  state(peticion.data.results)
}


const personajeIndividual = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(peticion.data)
}

const todosEpisodios = async (state) => {
  const peticion = await axios.get('https://rickandmortyapi.com/api/episode')
  state(peticion.data.results)
}

const episodioIndividual = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
  state(peticion.data)
}

const prueba = async (id,state) =>{
  const peticion = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
  state(peticion.data.characters)
}

export {todosPersonajes, personajeIndividual, todosEpisodios, episodioIndividual,prueba}