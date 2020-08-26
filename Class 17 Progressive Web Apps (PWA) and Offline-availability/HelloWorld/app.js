if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register('./serviceWorker.js')
    .then(function(){console.log('service worker Registered Successfully')})
    .catch(function(){console.log('service worker is not Registered ')})
}else{
    console.log('service worker is not available')
}