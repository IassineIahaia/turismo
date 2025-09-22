const CACHE_NAME = 'descubra-mocambique-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.png',
  './manifest.json',
  // adicione mais arquivos estáticos que queira cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
