import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'




export const Pagination = ({ offset,advanceList,backList})=>{

    
    return(
        <div className="container">
           <nav aria-label="...">
              <ul className="pagination">
                 { offset <= 0  ?
                 <li className="page-item disabled">
                    <Link 
                       className="page-link"
                                              
                    >
                        Prev
                    </Link>
                 </li>
                 :
                 <li className="page-item">
                    <Link 
                       className="page-link"
                       onClick={(e)=>{
                           backList()
                           
                           
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
                        advanceList()
                        
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