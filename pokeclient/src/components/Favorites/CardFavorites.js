import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { deleteDataCache } from '../../redux/actions/actions'

export const CardFavorites = ({pokemon})=>{
    const dispatch = useDispatch()
    const history = useHistory()

    const deletePokemon = ()=>{
        dispatch(deleteDataCache(pokemon))
        history.push('/favorites')
    }
   
    return(
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" >
                <img className="card-img-top" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <div className="card-body">
                    <h4 className="card-title">{pokemon.name}</h4>
                    <button className='btn btn-danger' onClick={deletePokemon}>
                        Delete Pokemon
                    </button>
                </div>
            </div>
        </div>
    )
}