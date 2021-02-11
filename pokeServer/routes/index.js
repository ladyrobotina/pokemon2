const express = require('express')
const router = express.Router()
const axios = require('axios')
const { addDataCache } = require('../scripts/ustils')

router.get('/', (req,res)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${req.query.offset}&limit=20`)
    .then(response=>{
        res.json(response.data.results)
    })
    .catch(err=>console.log(err))
})

router.get('/:query', (req,res)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.query}`)
    .then(response=>{
        res.json(response.data)
    })
    .catch(err=>console.log(err))
})


module.exports = router