import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { detailsPokemon } from '../redux/actions/actions'

export const PokeCard = ({name,img})=>{

    const dispatch = useDispatch()
    const history = useHistory()
    const handelClick = (e,name)=>{
        dispatch(detailsPokemon(name))
        e.preventDefault()
        history.push(`/details/${name}`)
    }
    return(
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card" >
                <img className="card-img-top " src={img} alt={name}/>
                <div className="card-body">
                    <h4 className="card-title"><Link className='btn btn-outline-info' onClick={(e)=>handelClick(e,name)}>{name}</Link></h4>
                </div>
            </div>
        </div>
    )
}