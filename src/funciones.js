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

const personajesCapitulo = async (id,state) =>{
  const peticion = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
  state(peticion.data.characters)
}

const personajeCapitulo = async (url,state) =>{
  console.log(url)
  const peticion = await axios.get(`${url}`)
  state(peticion.data)
}


export {todosPersonajes, personajeIndividual, todosEpisodios, episodioIndividual,personajesCapitulo,personajeCapitulo}