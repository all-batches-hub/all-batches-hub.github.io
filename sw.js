self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});







self.options = {
    "domain": "5gvci.com",
    "zoneId": 11921092
}
self.lary = ""
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')
