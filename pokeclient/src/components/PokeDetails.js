import React from 'react'


import { NavBar } from './NavBar'


export const PokeDetails = ({pokemon})=>{
   
    
   
   
   return (
        <div>
            <NavBar/>
        <div className='container'>
            
            {pokemon && <div className='row'>
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
            </div> }
        </div>
        
        </div>
        
    )
}