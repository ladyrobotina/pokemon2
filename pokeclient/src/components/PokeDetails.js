import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { NavBar } from './NavBar'


export const PokeDetails = ()=>{
    
    const [cache,setCache] = useState([])
    const pokemon = useSelector(state=>state.pokemonReducer.pokemon)
    
    
    

    useEffect(()=>{
       let data = localStorage.getItem('dataCachePokemon')
       if(data){
          let arr = JSON.parse(data)
          if(arr.length < 5){
             setCache([...arr,pokemon])
          }else{
             arr.shift()
             setCache([...arr,pokemon])
          }
       }else{
          setCache([...cache,pokemon])
       }
    },[pokemon])

    useEffect(()=>{
       localStorage.setItem('dataCachePokemon',JSON.stringify(cache))
    },[cache])
    console.log(cache)
    return (
        <div>
            <NavBar/>
        <div className='container'>
            
            {pokemon && <di className='row'>
                <div className='col-12'>
                   <div className="card mt-5" style={{maxWidth:'100%'}} >
                      <div className='row no-gutters'>
                         <div className='col-6'>
                            <img className="card-img-top" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <div className="card-body">
                              <h4 className="card-title">{pokemon.name}</h4>
                            </div>
                         </div>
                         <div className='col-6'>
                            <div className="card-body">
                               <h3 className="card-title">{pokemon.name}</h3>
                            </div>
                         </div>                         
                      </div>
                   </div>
                </div>
            </di> }
        </div>
        </div>
        
    )
}