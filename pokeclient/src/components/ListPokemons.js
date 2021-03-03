import React from 'react'
import { PokeCard } from './PokeCard'


export const ListPokemons = ({results})=>{
    
    
    return(
        <div className='container'>
            <div className='text-center pt-5'>
                <h1>Pokemons Gallery</h1>
            </div>
            {!results && <span className='font-weight-bold text-success h1 mx-auto mb-3'>Loading</span>}
            <div className='row my-1'>
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