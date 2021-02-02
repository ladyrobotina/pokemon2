import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Home } from './components/Home'
import { PokeDetails } from './components/PokeDetails'
import { Pokemons } from './components/Pokemons'

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokemons' component={Pokemons}/>
            <Route path='/details/:name' component={PokeDetails}/>
        </Switch>
    )
}