import axios from 'axios'

export const GET_LIST_POKEMONS = 'GET_LIST_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'

export const getListPokemons = ()=>{
    return (dispatch)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
        .then(response=>{
            dispatch({
                type: GET_LIST_POKEMONS,
                payload: response.data.results
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getPokemon = (query)=>{
    return (disptach)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response=>{
            disptach({
                type: GET_POKEMON,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}