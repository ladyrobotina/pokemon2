import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCache, deleteDataCache } from '../redux/actions/actions'
import { loadState } from '../scripts/ustils'

export const Controls = ({ pokemon })=>{

   const dispatch = useDispatch()
   const [message,setMessage] = useState('Add Favorites')
   const dataCache = loadState()
   const [checked, setChecked] = useState(false)

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

   

   if(dataCache && dataCache.find(d=>d.name===pokemon.name)){
      setMessage('Delete Favorites')
   }else{
      setMessage('Add Favorites')

   }
    
   
 },[dataCache,pokemon.name])

 const statusCheck = ()=>{

   
   
   if(dataCache && dataCache.find(d=>d.name===pokemon.name)){

     
         return(
            <input type='checkbox' checked={true} className='form-check-input' onChange={(e)=>addFavorites(e.target.checked)}/>
         )
      }
      else{
        
         return(
            <input type='checkbox' checked={false} className='form-check-input' onChange={(e)=>addFavorites(e.target.checked)}/>
         )
      }
   }
   

    return(
        <div className='form-check'>
            
            {statusCheck()} 
            <label className='form-check-label'>{message}</label> 
        </div>
    )
}