import React from 'react'
import { PokeCard } from './PokeCard'


export const ListPokemons = ({results})=>{
    
    
    return(
        <div className='container'>
            <div className='text-center pt-5'>
                <h1>Pokemons Gallery</h1>
            </div>
            <div className='row'>
            {
               results && results.map((pokemon)=>{
                    return(
                        <PokeCard name={pokemon.name} img={pokemon.img} key={pokemon.id}/>
                    ) 
                })
            }
            </div>
            
        </div>
    )
}