import { GET_LIST_POKEMONS, GET_POKEMON, NEXT_PAGE, PREVIUS_PAGE } from '../actions/actions'

const initialState ={
    listPokemons: [],
    pokemon:{},
    offset: 0,
    limit:20
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