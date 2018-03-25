var CACHE_NAME = "tjwyz";  
var urlsToCache = [  
'/weather',  
'/static/base/vue.js',  
'/img/clear-day.jpg',
'/img/switch-city.png'
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
self.addEventListener('fetch', function(event) {  
    event.respondWith(  
        caches.match(event.request)  
          .then(function(response) {  
            // Cache hit - return response  
            if (response) {  
              return response;  
            }  
            return fetch(event.request);  
          }
        )
    );
}); 