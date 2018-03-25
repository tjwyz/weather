var CACHE_NAME = "my_cache";  
var urlsToCache = [  
'/index.html',  
'/css/style.css',  
'/js/script.js'  
];
self.addEventListener('install', function(event) {  
    event.waitUntil(  
        caches.open(CACHE_NAME).then(function(cache) {  
            console.log('Opendhe : ',cache);  
            return cache.addAll(urlsToCache);  
        })  
    );  
});
self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    //如果是同域并且请求的是 dog.svg 的话，那么返回 cat.svg
    if (url.origin == location.origin && url.pathname == '/dog.svg') {
        event.respondWith(caches.match('/cat.svg'));
    }
});