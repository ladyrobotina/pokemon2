import React from 'react'
import { CardFavorites } from './CardFavorites'


export const ListFavorites = ({results})=>{
    
    return(
        <div className='container'>
            <div className='text-center pt-5'>
                <h1>Favorites</h1>
            </div>
            
            <div className='row'>
            {
                results && results.map((pokemon)=>{
                    return(
                        <CardFavorites pokemon={pokemon} key={pokemon.name}/>
                    ) 
                })
            }
            </div>
        </div>
    )
}