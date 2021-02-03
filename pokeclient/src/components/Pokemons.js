import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPokemons } from '../redux/actions/actions'
import { ListPokemons } from './ListPokemons'
import { NavBar } from './NavBar'
import { Pagination } from './Pagination'

export const Pokemons = ()=>{

    
    const dispatch = useDispatch()
    const results = useSelector(state=>state.pokemonReducer)
    const offset = useSelector(state=>state.pokemonReducer.offset)
    const limit = useSelector(state=>state.pokemonReducer.limit)
   


    useEffect(()=>{
        dispatch(getListPokemons(offset))
    },[dispatch,offset])
    
    return(
        <div>
            <NavBar/>
            <ListPokemons results={results.listPokemons}/>
            <Pagination />
        </div>
    )
}