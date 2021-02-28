import {  ADD_CACHE,  
          DELETE_DATA_CACHE, 
          DETAILS_POKEMON, 
          GET_LIST_POKEMONS, 
          SEARCH_POKEMON } from '../actions/actions'

const initialState ={
    listPokemons: [],
    pokemon:{},
    offset: 0,
    listCachePokemons: [],
    
    
}

export const pokemonReducer = (state=initialState,actions)=>{
    
    switch(actions.type){
        
        case ADD_CACHE:
            return{
                ...state,
                listCachePokemons: actions.payload
            }
        case DELETE_DATA_CACHE:
            return{
                ...state,
                listCachePokemons: actions.payload
            }
        case GET_LIST_POKEMONS:
            return{
                ...state,
                listPokemons: actions.payload
            }
        case SEARCH_POKEMON:
            return{
                ...state,
                pokemon: actions.payload
            }
        case DETAILS_POKEMON:
            return{
                ...state,
                pokemon: actions.payload
            }        
        default:
            return{
                state
            }
    }
}

