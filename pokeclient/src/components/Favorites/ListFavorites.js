import React from 'react'
import { CardFavorites } from './CardFavorites'


export const ListFavorites = ({results})=>{
    
    return(
        <div className='container'>
            <div className='text-center pt-5'>
                <h1>Favorites</h1>
            </div>
            {!results.length && <span className='font-weight-bold text-warning h1 mx-auto mb-3'>You haven't added Pokemons to your Favorites list yet</span>}
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