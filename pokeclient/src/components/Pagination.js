import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, previusPage } from '../redux/actions/actions'
export const Pagination = ()=>{
    let ini = 0
    let limit = 20
    const dispatch = useDispatch()

    return(
        <div class="container">
           <nav aria-label="...">
              <ul className="pagination">
                 <li className="page-item">
                    <Link 
                       className="page-link"
                       onClick={(e)=>{
                           e.preventDefault()
                           dispatch(previusPage(limit))
                           
                           
                    }}                        
                    >
                        Previous
                    </Link>
                 </li>
    
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