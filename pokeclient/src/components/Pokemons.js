import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPokemons } from '../redux/actions/actions'
import { ListPokemons } from './ListPokemons'
import { NavBar } from './NavBar'

export const Pokemons = ()=>{
    const dispatch = useDispatch()
    const results = useSelector(state=>state.pokemonReducer)

    useEffect(()=>{
        dispatch(getListPokemons())
    },[dispatch])
    console.log(results.listPokemons)
    return(
        <div>
            <NavBar/>
            <ListPokemons results={results.listPokemons}/>
        </div>
    )
}