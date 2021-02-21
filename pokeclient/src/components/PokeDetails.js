import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCache, deleteDataCache } from '../redux/actions/actions'
import { loadState } from '../scripts/ustils'
import { NavBar } from './NavBar'


export const PokeDetails = ({pokemon})=>{

   const dispatch = useDispatch()
   const [message,setMessage] = useState('Add Favorites')
   const dataCache = loadState()
   const [checked,setChecked] = useState(false)

   const addFavorites = (e)=>{
      if(e=== true){
         dispatch(addCache(pokemon))
         setMessage('Delete Favorites')
         setChecked(e)
      }else{
         dispatch(deleteDataCache(pokemon))
         setMessage('Add Favorites')
         setChecked(e)
      }
   }

 useEffect(()=>{
   if(dataCache.find(d=>d.name===pokemon.name)){
      setMessage('Delete Favorites')
   }else{
      setMessage('Add Favorites')
   }
 })
 const statusCheck = ()=>{
   if(dataCache.find(d=>d.name===pokemon.name)){
     
      return(
         <input type='checkbox' checked={true} onChange={(e)=>addFavorites(e.target.checked)}/>
      )
   }
   else{
     
      return(
         <input type='checkbox' checked={false} onChange={(e)=>addFavorites(e.target.checked)}/>
      )
   }
  }
  console.log(dataCache.find(d=>d.name===pokemon.name))
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
                               {statusCheck()}     
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