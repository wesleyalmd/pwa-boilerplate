const CACHE_VERSION = 'pwa-boilerplate-v1';
const CACHE_SOURCES = [
  '/manifest.json',
  '/robots.txt',
  '/img/favicon.ico',
  '/img/icon-72x72.png',
  '/img/icon-96x96.png',
  '/img/icon-128x128.png',
  '/img/icon-144x144.png',
  '/img/icon-152x152.png',
  '/img/icon-192x192.png',
  '/img/icon-384x384.png',
  '/img/icon-512x512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(CACHE_SOURCES);
    }),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          // only keep CACHE_VERSION, delete all other caches
          if (key !== CACHE_VERSION) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      const request = event.request.clone();
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
        });

        return response;
      });
    }),
  );
});
