import React from 'react'
import { useSelector } from 'react-redux'
import { Error } from "./Error"
import { PokeDetails } from "./PokeDetails"


export const Results = ()=>{
   
   const pokemon = useSelector(state=>state.pokemonReducer.pokemon)
   
   return(
       <div>
           
           {pokemon && <PokeDetails pokemon={pokemon}/>}
           {!pokemon && <Error/>}
           

       </div>
   )


}