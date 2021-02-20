import React, { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children })=>{
    
    const [cache,setCache] = useState([])

    return(
        <DataContext.Provider value={{
            cache,
            setCache
        }}>
            { children }
        </DataContext.Provider>
    )
}