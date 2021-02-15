import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getPokemon } from '../redux/actions/actions'



export const NavBar = ()=>{

  const [query,setQuery] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleInputChange = (e)=>{
    setQuery(e.target.value)
  }
  
  const handleSubmit = (e,q)=>{
    e.preventDefault()
    dispatch(getPokemon(q))
    history.push(`/details/${q}`)
  }

  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to='/' className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
       <Link to='/pokemons' className="nav-link">Pokemons</Link>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={e=>handleSubmit(e,query)}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange}/>
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
         
  
</nav>
    )
}