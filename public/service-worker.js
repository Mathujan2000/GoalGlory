// service-worker.js
const CACHE_NAME = 'v1';
const ASSETS_TO_CACHE = [
    '/img/aboutnew.1be398df.webp',
    '/img/Calltoaction.b82a4668.webp',
    '/img/GoalGlory.73470d65.webp',
    '/js/chunk-vendors.js',
    '/js/app.js',
];

self.addEventListener('install', (event) => {
    console.log('✅ Service worker geïnstalleerd');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('📦 Caching assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('🔁 Service worker geactiveerd');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('🗑️ Clearing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('📂 Serving from cache:', event.request.url);
                return cachedResponse;
            }
            console.log('🌐 Fetching from network:', event.request.url);
            return fetch(event.request);
        })
    );
});