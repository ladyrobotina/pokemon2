import React from 'react'

export const Images = ({ sprites,name })=>{
    let arrImages = Object.values(sprites).filter(s=> typeof s === 'string')
   console.log(arrImages)
    return(
        <div>
            {
                arrImages.map((img,index)=>{
                    return(
                        <img src={img} alt={name} key={index+1}/>
                    )
                })
            }
        </div>
    )
}