// Service worker mínimo — habilita la instalación de la PWA
const CACHE_NAME = 'mis-finanzas-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pasamos todas las peticiones directo a la red.
// (La app usa Firebase en tiempo real, así que no cacheamos datos.)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
