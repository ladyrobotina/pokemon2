import axios from 'axios'
import { getData } from '../../scripts/ustils'

export const GET_LIST_POKEMONS = 'GET_LIST_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIUS_PAGE = 'PREVIUS_PAGE'
export const GET_CACHE = 'GET_CACHE'
export const pokeDataCache = 'pokeDataCache'

export const getCache = (data)=>{
    return(dispatch,getState)=>{
        let { listCachePokemons } = getState().pokemonReducer.state
        let arrayCache = getData(localStorage.getItem(pokeDataCache),listCachePokemons,data)
        dispatch({
            type: GET_CACHE,
            payload: arrayCache
        })
    }
}

export const getListPokemons = (offset)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/pokemons?offset=${offset}&limit=20`)
        .then(response=>{
            dispatch({
                type: GET_LIST_POKEMONS,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getPokemon = (query)=>{
    return (disptach)=>{
        axios.get(`http://localhost:3001/details/${query}`)
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

