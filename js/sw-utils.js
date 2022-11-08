function actualizaCacheDinamico(dynamicCache,req,res){
    if(res.ok){
        return caches.open(dynamicCache).then(cache=>{
            cache.put(req,res.cole());
            return res.clone();
        });
    }else{
        return res;
    }
}