import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Images = ({ sprites,name, changeData })=>{
    let arrImages = Object.values(sprites).filter(s=> typeof s === 'string')
    console.log(sprites)
    return(
        <div>
            {
                arrImages.map((img,index)=>{
                    return(
                        <Link onClick={()=>changeData(img)}><img src={img} alt={name} /></Link>
                    )
                })
            }
        </div>
    )
}