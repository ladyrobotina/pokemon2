import React from 'react'
import { loadState } from '../../scripts/ustils'
import { NavBar } from '../NavBar'
import { ListFavorites } from './ListFavorites'


export const Favorites = ()=>{

    
    
    const results = loadState()
    
   


    
    
    return(
        <div >
            <NavBar/>
            <ListFavorites results={results}/>
        </div>
    )
}