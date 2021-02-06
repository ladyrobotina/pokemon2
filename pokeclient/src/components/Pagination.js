import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, previusPage } from '../redux/actions/actions'
export const Pagination = ()=>{
    const offset = useSelector(state=>state.pokemonReducer.offset)
    let limit = 20
    const dispatch = useDispatch()

    return(
        <div className="container">
           <nav aria-label="...">
              <ul className="pagination">
                 { offset === 0 ?
                 <li className="page-item disabled">
                    <Link 
                       className="page-link"
                       onClick={(e)=>{
                           e.preventDefault()
                           dispatch(previusPage(limit))
                           
                           
                    }}                        
                    >
                        Prev
                    </Link>
                 </li>
                 :
                 <li className="page-item">
                    <Link 
                       className="page-link"
                       onClick={(e)=>{
                           e.preventDefault()
                           dispatch(previusPage(limit))
                           
                           
                    }}                        
                    >
                        Prev
                    </Link>
                 </li>
                 }
                 <li className="page-item">
                    <Link 
                      className="page-link"
                      
                      onClick={(e)=>{
                        e.preventDefault()
                        dispatch(nextPage(limit))
                    }}
                    >
                        Next
                    </Link>
                 </li>
              </ul>
           </nav>
        </div>
    )
}