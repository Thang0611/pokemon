const  data = require('../utils/data')


const searChPokemon  =(req,res)=>{
    const search=req.query.search?.toLowerCase()

    if (search){
        const pokemons = data.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search)
        })
        const sortedPokemon=pokemons.sort((a,b)=>a.name.localeCompare(b.name))
        return res.status(200).json(sortedPokemon)
    }
    const sortedPokemon = data.sort((a, b) => a.name.localeCompare(b.name))
    res.status(200).json(sortedPokemon)
}


const showPokemon=(req,res)=>{
  const pokemonId = req.params.id
  const pokemon = data.find((pokemon) => {
    return pokemon.id == pokemonId
  })
  if (!pokemon) {
    res.status(404).json({ message: `Pokemon with id ${pokemonId} not found!` })
  }

  const evolutionId = pokemon.evolutionId
  const evolution = data.filter(
    (pokemon) => pokemon.evolutionId == evolutionId && pokemon.id != pokemonId
  )
  evolution.sort((a, b) => a.level - b.level)
  const evolutions = evolution.map((e) => {
    return {
      pokemonId: e.id,
      image: e.image,
      name: e.name,
    }
  })
  const response = {
    id: pokemon.id,
    image: pokemon.image,
    introduction: pokemon.introduction,
    name: pokemon.name,
    evolutions,
  }
  res.status(200).json(response)
}


module.exports = { searChPokemon, showPokemon }
 