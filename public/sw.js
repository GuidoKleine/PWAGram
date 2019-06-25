// install server worker to browser
self.addEventListener('install', function(event) {
    console.log('[Service worker] Installing service worker ...', event);    
})

// activates server worker in browser
self.addEventListener('activate', function(event) {
    console.log('[Service worker] Activating service worker ...', event);
    return self.clients.claim();    
})

// catches all fetch request from browser going through service worker
self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something...', event);
    event.respondWith(fetch(event.request));
})