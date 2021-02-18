const express = require('express')
const router = express.Router()
const axios = require('axios')
const { addDataCache } = require('../scripts/ustils')

router.get('/', (req,res)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${req.query.offset}&limit=20`)
    .then(response=>{
        let arrPokemons = response.data.results.map(r=>{
            let pokeIndex = r.url.split('/')[r.url.split('/').length - 2]
            let imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`
            return{
                id: pokeIndex,
                name: r.name,
                img: imgUrl
            }
        })
        res.json(arrPokemons)
        
    })
    .catch(err=>console.log(err))
})

router.get('/:name', (req,res)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
    .then(response=>{
        res.send(response.data)
    })
    .catch(err=>console.log(err))
})


module.exports = router