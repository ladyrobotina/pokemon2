import React from 'react'
import { Link } from 'react-router-dom'




export const NavBarHome = ()=>{  
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          
    <ul className="navbar-nav mr-auto">
      <li className='nav-item active' >
      <Link to='/' className='nav-link'>Home</Link>
      </li>
      <li className='nav-item' >
       <Link to='/pokemons' className="nav-link">Pokemons</Link>
      </li>
      <li className='nav-item' >
       <Link to='/favorites' className="nav-link" >Favorites</Link>
      </li>
      
    </ul>
    
  </div>
         
  
</nav>
    )
}