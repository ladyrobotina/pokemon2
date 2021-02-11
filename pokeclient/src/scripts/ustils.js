export const getData = (data)=>{

    let arr = []
    let getStorage = localStorage.getItem('pokeDataCache')
   
   if(!getStorage){
       arr = [...arr,data]
       return arr
   }
   arr = [...JSON.parse(getStorage),data]
   return arr
}

export const setData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}