import React from 'react'
import { PokeCard } from './PokeCard'

export const ListPokemons = ({results})=>{
    
    return(
        <div className='container'>
            <div className='row'>
            {
                results && results.map((pokemon,index)=>{
                    let pokeIndex = index + 1
                    
                    let img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`
                    console.log(img)
                    return(
                        <PokeCard name={pokemon.name} img={img} pokeIndex={pokeIndex}/>
                    ) 
                })
            }
            </div>
        </div>
    )
}