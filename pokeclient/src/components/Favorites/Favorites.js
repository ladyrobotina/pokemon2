import React from 'react'
import { loadState } from '../../scripts/ustils'
import { NavBar } from '../NavBar'
import { ListFavorites } from './ListFavorites'


export const Favorites = ()=>{

    
    
    const results = loadState()
    
   


    
    
    return(
        <div className='container-fluid'>
            <NavBar/>
            <ListFavorites results={results}/>
        </div>
    )
}