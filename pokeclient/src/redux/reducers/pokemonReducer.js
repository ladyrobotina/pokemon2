import { GET_LIST_POKEMONS, GET_POKEMON } from '../actions/actions'

const initialState ={
    listPokemons: [],
    pokemon:{}
}

export const pokemonReducer = (state=initialState,actions)=>{

    switch(actions.type){
        case GET_LIST_POKEMONS:
            return{
                ...state,
                listPokemons: actions.payload
            }
        case GET_POKEMON:
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