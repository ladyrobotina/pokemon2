import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPokemons } from '../redux/actions/actions'
import { ListPokemons } from './ListPokemons'
import { NavBar } from './NavBar'
import { Pagination } from './Pagination'


export const Pokemons = ()=>{

    const[ offset,setOffset] = useState(0)
    const dispatch = useDispatch()
    const results = useSelector(state=>state.pokemonReducer)
    
    const advanceList = ()=>{
        setOffset(offset + 20)
    }

    const backList = ()=>{
        offset > 0?
        setOffset(offset - 20):
        setOffset(0) 
    }
    useEffect(()=>{
        dispatch(getListPokemons(offset))
    },[dispatch,offset])

    
    return(
        <div >
            <NavBar/>
            <ListPokemons results={results.listPokemons}/>
            <Pagination offset={offset} advanceList={advanceList} backList={backList}/>
        </div>
    )
}