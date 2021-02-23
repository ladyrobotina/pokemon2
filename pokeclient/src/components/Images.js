import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Images = ({ sprites, changeData })=>{
        
    return(
        <div>
            {
                sprites.map((img,index)=>{
                    
                    return(
                        
                        <Link onClick={()=>changeData(img.value)} key={img.key}><img src={img.value} alt={img.key} /></Link>
                    )
                })
            }
        </div>
    )
}