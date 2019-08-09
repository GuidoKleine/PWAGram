// install server worker to browser
self.addEventListener('install', function (event) {
    console.log('[Service worker] Installing service worker ...', event);
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                console.log('[Service Worker] Precaching App Shell');
                cache.add('/src/js/app.js')
            })
    )
})

// activates server worker in browser
self.addEventListener('activate', function (event) {
    console.log('[Service worker] Activating service worker ...', event);
    return self.clients.claim();
})

// catches all fetch request from browser going through service worker
self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match() 
      .then(function(response) {
        if (response) {
            return response; 
        } else {
            return fetch(event.request);
        }
      }) 
    );
})