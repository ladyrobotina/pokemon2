const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded( { extended:false } ))
app.use(cors())

app.use('/pokemons',(require('./routes/index')))
app.use('/details',(require('./routes/index')))

app.listen(3001,()=>{
    console.log('Servidor corriendo en el puerto 3001')
})