import React, { useState } from 'react'
import { imgPokemon } from '../scripts/ustils'
import { Controls } from './Controls'
import { Images } from './Images'
import { NavBar } from './NavBar'


export const PokeDetails = ({pokemon})=>{
  
   const [img,setImg]= useState('')
  
   const changeData = (img)=>{
      setImg(img)
   }
   const checImg = (img)=>{
      if(img === '' ){
         return pokemon.sprites.front_default
      }else if( img !== '' && !imgPokemon(pokemon).find(i=>i.value === img)){
         return pokemon.sprites.front_default
      }else{ 
         return img
      }
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
                            <img className="card-img-top" src={checImg(img)} alt={pokemon.name}/>
                            <div className="card-body">
                              <h4 className="card-title">{pokemon.name}</h4>
                              <Controls pokemon={pokemon}/>  
                            </div>
                         </div>
                         <div className='col-6'>
                            <div className="card-body"> 
                               <Images sprites = {imgPokemon(pokemon)} changeData={changeData} />
                            </div>
                         </div>                         
                      </div>
                   </div>
                </div>
                
            </div> }
        </div>
        
        </div>
        
    )
}