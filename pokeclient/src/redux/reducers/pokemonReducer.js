import {   ADD_CACHE, DELETE_DATA_CACHE, DETAILS_POKEMON, GET_LIST_POKEMONS, NEXT_PAGE, PREVIUS_PAGE, SEARCH_POKEMON } from '../actions/actions'

const initialState ={
    listPokemons: [],
    pokemon:{},
    offset: 0,
    limit:20,
    listCachePokemons: [],
    error: ''
    
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
        case NEXT_PAGE:
            return{
                ...state,
                offset: state.offset + actions.payload
            }
        case PREVIUS_PAGE:
            return{
                ...state,
                offset: state.offset > 0 ? state.offset - actions.payload : 0
            }
        
        default:
            return{
                state
            }
    }
}

