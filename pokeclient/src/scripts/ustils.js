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

export const imgPokemon = (pokemon)=>{
    let imgKey = Object.keys(pokemon.sprites)
    let imgValues = Object.values(pokemon.sprites)
    let arrImg = []
    for(let i = 0; i < imgKey.length; i ++){
        arrImg.push({
            key: imgKey[i],
            value: imgValues[i]
        })
    }
    return arrImg.filter(arr=> typeof arr.value === 'string')
}