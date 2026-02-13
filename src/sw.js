const CACHE_NAME = 'framp-videos-v1';
const VIDEO_URLS = [
  '/assets/videos/idle.mp4',
  '/assets/videos/msg1.mp4',
  '/assets/videos/msg2.mp4',
  '/assets/videos/msg3.mp4',
  '/assets/videos/msg4.mp4'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Fetch each video without range headers to get full response
      return Promise.all(
        VIDEO_URLS.map((url) => {
          return fetch(new Request(url, { headers: { 'Range': '' } }))
            .then((response) => {
              if (response.status === 200) {
                return cache.put(url, response);
              }
            })
            .catch((err) => console.warn('Failed to cache', url, err));
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Only cache video files
  if (url.pathname.startsWith('/assets/videos/')) {
    // Don't cache range requests (partial content)
    if (event.request.headers.has('range')) {
      return;
    }
    
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Only cache successful full responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          
          return response;
        });
      })
    );
  }
});
