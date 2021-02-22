import React, { useState } from 'react'
import { Controls } from './Controls'
import { Images } from './Images'
import { NavBar } from './NavBar'


export const PokeDetails = ({pokemon})=>{
  
   const [img,setImg]= useState('')
   const changeData = (img)=>{
      setImg(img)
   }
  
   return (
        <div>
        <NavBar/>
        <div className='container'>
            
            {pokemon && <div className='row'>
                <div className='col-12'>
                   <div className="card mt-5" style={{maxWidth:'100%'}} >
                      <div className='row no-gutters'>
                         <div className='col-6'>
                            <img className="card-img-top" src={img === '' ? pokemon.sprites.front_default: img} alt={pokemon.name}/>
                            <div className="card-body">
                              <h4 className="card-title">{pokemon.name}</h4>
                            </div>
                         </div>
                         <div className='col-6'>
                            <div className="card-body">
                               <h3 className="card-title">{pokemon.name}</h3>                                
                               <Controls pokemon={pokemon}/>    
                            </div>
                         </div>                         
                      </div>
                   </div>
                </div>
                <Images sprites = {pokemon.sprites} name={pokemon.name} changeData={changeData} key={pokemon.name}/>
            </div> }
        </div>
        
        </div>
        
    )
}