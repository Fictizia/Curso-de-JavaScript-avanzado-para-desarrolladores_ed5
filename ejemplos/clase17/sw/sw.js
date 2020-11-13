const miCache = 'heroes-v1.0';

const archivos = [
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
    '/ejemplos/clase17/sw/style.css',
    '/ejemplos/clase17/sw/script.js'
]

function update(request) {
    return caches.open(miCache).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        });
    });
}

function fromCache(event) {
    const { request } = event
    return caches.open(miCache).then(function(cache) {
        return cache.match(request).then(function(matching) {
            return matching || request;
        });
    });
}

self.addEventListener('install', (evento) => {
    evento.waitUntil(
        caches.open(miCache).then(cache => {
            return cache.addAll(archivos);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('SW activado')
    event.waitUntil(
        caches.keys().then(clavesCache => Promise.all(
            clavesCache.filter(claveCache => {
                return claveCache !== miCache
            }).map(claveCache => caches.delete(claveCache))
        ))
    );
});

function fromNetwork(request, timeout) {
    return new Promise(function(resolve, reject) {
        const timeoutId = setTimeout(reject, timeout);

        fetch(request).then(function(response) {
            clearTimeout(timeoutId);
            resolve(response)
        }, reject);
    });
}

self.addEventListener('fetch', function(event) {
    console.log('Fetch event', event)
    event.respondWith(fromNetwork(event.request, 400).catch(function() {
        return fromCache(event.request);
    }));
});
