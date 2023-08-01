const express =require('express')
const {searChPokemon,showPokemon} = require('../controllers/pokemon.controller')
const route=express.Router();

route.get('/', searChPokemon)
route.get('/:id', showPokemon)
module.exports=route
