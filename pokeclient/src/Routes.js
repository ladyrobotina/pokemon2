import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Favorites } from './components/Favorites/Favorites'
import { Home } from './components/Home'
import { Pokemons } from './components/Pokemons'
import { Results } from './components/Results'

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokemons' component={Pokemons}/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/details/:name' component={Results}/>
        </Switch>
    )
}