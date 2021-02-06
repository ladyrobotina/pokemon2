import React from 'react'
import { PokeCard } from './PokeCard'

export const ListPokemons = ({results})=>{
    
    return(
        <div className='container'>
            <div className='row'>
            {
                results && results.map((pokemon,index)=>{
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                    
                    let img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`
                    
                    return(
                        <PokeCard name={pokemon.name} img={img} key={pokeIndex}/>
                    ) 
                })
            }
            </div>
        </div>
    )
}