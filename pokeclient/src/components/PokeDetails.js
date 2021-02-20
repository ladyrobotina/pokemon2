import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCache, deleteDataCache } from '../redux/actions/actions'
import { NavBar } from './NavBar'


export const PokeDetails = ({pokemon})=>{

   const dispatch = useDispatch()
   const [message,setMessage] = useState('Add Favorites')
   const addFavorites = (e)=>{
      if(e=== true){
         dispatch(addCache(pokemon))
         setMessage('Delete Favorites')
      }else{
         dispatch(deleteDataCache(pokemon))
         setMessage('Add Favorites')
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
                            <img className="card-img-top" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <div className="card-body">
                              <h4 className="card-title">{pokemon.name}</h4>
                            </div>
                         </div>
                         <div className='col-6'>
                            <div className="card-body">
                               <h3 className="card-title">{pokemon.name}</h3>                                
                               <label>{message}</label>
                               <input type='checkbox' onChange={(e)=>addFavorites(e.target.checked)}/>      
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