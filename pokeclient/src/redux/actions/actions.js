import axios from 'axios'


export const GET_LIST_POKEMONS = 'GET_LIST_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIUS_PAGE = 'PREVIUS_PAGE'




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

export const getPokemon = (query)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/details/${query}`)
        .then(response=>{
            dispatch({
                type: GET_POKEMON,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log("I'm sorry! We are having trouble connecting to the server")
            
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

