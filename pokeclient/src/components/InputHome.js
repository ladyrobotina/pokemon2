import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { detailsPokemon } from '../redux/actions/actions'

export const InputHome = ()=>{

    const [query,setQuery] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
  
    const handleInputChange = (e)=>{
       setQuery(e.target.value)
    }
  
    const handleSubmit = (e,q)=>{
       e.preventDefault()
       dispatch(detailsPokemon(q))
    history.push(`/details/${q}`)
    }
    return(
        <di className='mx-auto my-auto d-block container-form'>
            
            <form className="form-inline my-2 my-lg-0 " onSubmit={e=>handleSubmit(e,query)}>
                 <img className='img-fluid' src='https://media.redadn.es/imagenes/dswii_90124.jpg' alt='pokemon'/>
                 <di className='form-group mx-auto d-block'>
                    <input className='form-control mr-sm-2 form-input' type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange}/>
                    <button className='btn btn-outline-primary my-2 my-sm-0 form-btn'>Search</button>
                    <h3 className=' text-center mt-2 text-secondary text-form'>Search for Pokemons</h3>
                 </di>            
            </form>
            
        </di>
    )
}