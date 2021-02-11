const addDataCache = (data)=>{
   let arr = []
   let getStorage = localStorage.getItem('pokeCache')
   if(!getStorage){
       arr = [...arr,data]
   }else{
    arr = [...JSON.parse(getStorage),data]
   }

   localStorage.setItem(key,JSON.stringify(data))
}

const setData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}

module.exports = addDataCache