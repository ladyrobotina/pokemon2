const addDataCache = (data)=>{
   let arr = []
   let getStorage = localStorage.getItem('pokeCache')
   if(!getStorage){
       arr = [...arr,data]
   }else{
    arr = [...JSON.parse(getStorage),data]
   }

   localStorage.setItem('pokeCache',JSON.stringify(arr))
}

module.exports ={ addDataCache: addDataCache}