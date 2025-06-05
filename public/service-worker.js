// service-worker.js
self.addEventListener('install', (event) => {
  console.log('✅ Service worker geïnstalleerd');
});

self.addEventListener('activate', (event) => {
  console.log('🔁 Service worker geactiveerd');
});
