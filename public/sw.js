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
  'index.html',
  'main.js',
];

function echo(label, show = true) {
  return show && console.log(label);
}

self.addEventListener('install', event => {
  echo('Service Worker: Installed');
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(cache => {
        echo('Service Worker: Caching Files');
        cache.addAll(CACHE_SOURCES);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_VERSION) {
            echo('Service Worker: Clearing Old Cache');
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener('fetch', event => {
  echo('Service Worker: Fetching');
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
