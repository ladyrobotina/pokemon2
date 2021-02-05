import axios from 'axios'


export const GET_LIST_POKEMONS = 'GET_LIST_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIUS_PAGE = 'PREVIUS_PAGE'




export const getListPokemons = (offset)=>{
    return (dispatch)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
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

export const nextPage = (limit)=>{

    return {
        type: NEXT_PAGE,
        payload: limit
    }
}
export const previusPage = (limit)=>{
    
    return {
        type: PREVIUS_PAGE,
        payload: limit
    }
}

