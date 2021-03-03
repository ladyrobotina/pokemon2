import React from 'react'
import { Footer } from './Footer';
import { InputHome } from './InputHome';


import { NavBarHome } from './NavbarHome';

export const Home = ()=>{

    
    return(
        
           <div className="home">
               <NavBarHome/>
               <InputHome/>
               <Footer />
           </div>
           
        
    )
}