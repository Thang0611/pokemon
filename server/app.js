const express =require('express')
const app=express()
const pokemon=require('./routes/pokemon.route')
const cors=require('cors')

app.use(express.json())

const PORT = 3000
app.use(
  cors({
    origin: ['http://127.0.0.1:5500', '27.118.27.66'],
  })
)
app.use('/pokemons',pokemon)

app.listen(PORT, () => console.log(`Running Express app on port ${PORT}`))