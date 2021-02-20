export const loadState = ()=>{
    try {
        const data = localStorage.getItem('item')
        if(data === null){
            return undefined
        }
        return JSON.parse(data)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state)=>{
    try {
        localStorage.setItem('item',JSON.stringify(state))
    } catch (error) {
        
    }
}