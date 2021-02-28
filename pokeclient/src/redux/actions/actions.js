import axios from 'axios'
import { loadState, saveState } from '../../scripts/ustils'


export const GET_LIST_POKEMONS = 'GET_LIST_POKEMONS'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const DETAILS_POKEMON = 'DETAILS_POKEMON'
export const ADD_CACHE = 'ADD_CACHE'
export const DELETE_DATA_CACHE = 'DELETE_DATA_CACHE'

export const addCache = (pokemon)=>{

    return (dispatch)=>{
        let arr = []
        let data = localStorage.getItem('item')
        data !== null ? arr = [...JSON.parse(data),pokemon] : arr = [...arr,pokemon]
        localStorage.setItem('item',JSON.stringify(arr))
        dispatch({
            type:ADD_CACHE,
            payload: arr
        })
    }
}

export const deleteDataCache = (pokemon)=>{
    return (dispatch)=>{
        const data = loadState()
        let arr = data.filter(d=>d.name !== pokemon.name)
        saveState(arr)
        
        dispatch({
            type:DELETE_DATA_CACHE,
            payload: arr
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
            console.log("I'm sorry! We are having trouble connecting to the server")
        })
    }
}

export const searchPokemon = (query)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/details/${query}`)
        .then(response=>{
            dispatch({
                type: SEARCH_POKEMON,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log("I'm sorry! We are having trouble connecting to the server")
            
        })
    }
}

export const detailsPokemon = (query)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/details/${query}`)
        .then(response=>{
            dispatch({
                type: DETAILS_POKEMON,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log("I'm sorry! We are having trouble connecting to the server")
            
        })
    }
}



