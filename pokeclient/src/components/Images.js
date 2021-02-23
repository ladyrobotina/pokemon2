import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Images = ({ sprites, changeData })=>{
        
    return(
        <div>
            {
                sprites.map((img,index)=>{
                    return(
                        <Link onClick={()=>changeData(img.value)}><img src={img.value} alt={img.key} key={img.key}/></Link>
                    )
                })
            }
        </div>
    )
}