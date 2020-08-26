if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register('serviceWorker.js')
    .then(function(){console.log("serviceWorker is registered")})
    .catch(function(){console.log("serviceWorker is not registered")})
}else{
    console.log("serviceWorker is not available")
}