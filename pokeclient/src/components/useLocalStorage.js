import {useState} from 'react'

export const useLocalStorage = (key,initialValue)=>{

    const [stateValue,setStateValue] = useState(()=>{
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValues = (value)=>{
        try {
            setStateValue(value)
            localStorage.setItem(key,JSON.stringify(value))
        } catch (error) {
            
        }
    }
    return [stateValue,setValues]
}