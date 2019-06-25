var deferredPrompt;

// registers the serviceworkers
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('../sw.js')
    .then(function(){
        console.log('Service worker registered!');
    });
}

// prevents the install banner to be shown when visiting home page (scope is in feed.js)
window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
})