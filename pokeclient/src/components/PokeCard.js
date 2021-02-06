import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getPokemon } from '../redux/actions/actions'

export const PokeCard = ({name,img})=>{

    const dispatch = useDispatch()
    const history = useHistory()
    const handelClick = (e,name)=>{
        dispatch(getPokemon(name))
        e.preventDefault()
        history.push(`/details/${name}`)
    }
    return(
        <div className='col-3 Row'>
            <div className="card" >
                <img className="card-img-top" src={img} alt={name}/>
                <div className="card-body">
                    <h4 className="card-title"><Link onClick={(e)=>handelClick(e,name)}>{name}</Link></h4>
                </div>
            </div>
        </div>
    )
}