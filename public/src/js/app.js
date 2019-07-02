var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}

// registers the serviceworkers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../sw.js')
        .then(function () {
            console.log('Service worker registered!');
        })
        .catch(function(err) {
            console.log(err);   
        })
}

// prevents the install banner to be shown when visiting home page (scope is in feed.js)
window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredPrompt = event;
    return false;
})