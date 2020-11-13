![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 17

- HTML5 APIs
  - Geolocation
  - Workers
  - Service Workers
  - Speech

#### Geolocation

Una de las APIs de `navigator` es la de geolocalización que nos permite obtener los datos geográficos (latitud y longitud) del dispositivo de un usuario. Esta API necesita que el usuario apruebe el permiso de geolocalización por lo que es totalmente asíncrona. Su uso está limitado a HTTPS y localhost.

Antes de usar esta API, conviene comprobar que exista en el navegador del usuario. Esto se hace de usando el operador `in`.

```javascript
if ('geolocation' in navigator) {

}
```

Los métodos de esta API reciben 3 parámetros:

- Una función de callback que se ejecutará si todo ha salido bien. Esta función recibirá un objeto con la información geográfica del dispositivo.

```javascript
const todoHaSalidoAPedirDeMilhouse = (position) => {
  console.log('Estas aparecen siempre')
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(position.coords.accuracy);
  console.log('Estas sólo aparecen si están disponibles')
  console.log(position.coords.altitude)
  console.log(position.coords.altitudeAccuracy)
  console.log(position.coords.heading)
  console.log(position.coords.speed)
  console.log(position.timestamp)
}
```

- Una función de callback para manejar el error que recibirá como parámetro el error en cuestión. Este error contendrá una propiedad `code` donde se indicará la razón del fallo.

```javascript
const muestraError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("No te doy permiso y.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("No consigo encontrarte.")
      break;
    case error.TIMEOUT:
      alert("No puedo pasarme la vida buscándote.")
      break;
    case error.UNKNOWN_ERROR:
      alert("No sé qué pasa.")
      break;
  }
}
```

- Un objeto de configuración

```javascript
const objetoConfiguracion = {
  maximumAge: 3000, // Indica el tiempo máximo que se cachea una posición
  timeout: 30000, // El tiempo máximo durante el cual se intentará obtener la información
  enableHighAccuracy: true // Indica si queremos alta precisión o no
}
```

Esta API tiene 3 métodos:

- `.getCurrentPosition(exito, fallo, config)`: Devuelve información geográfica sobre la posición del dispositivo.
- `.watchPosition(exito, fallo, config)`: La función de éxito se ejecutará cada vez que el usuario modifique su posición. Devuelve un id numérico.
- `.clearWatch(id)`: Se encarga de parar la vigía de `watchPosition` a partir del id que esta devuelve.

### Worker

Como ya estudiamos previamente, JS tiene un sólo hilo de ejecución y las tareas que suelen tardar mucho tiempo en finalizarse se suelen ejecutar de forma asíncrona. No obstante, habrá veces en que tengamos que ejecutar código síncrono que sea muy pesado y que bloqueará este hilo de ejecución. O simplemente un código que en un dispositivo moderno sea muy eficiente pero en un dispositivo con menos recursos se demore mucho más, afectando a la experiencia final del usuario.

Cuando se dan este tipo de situaciones, podemos utilizar los llamados `Worker`. Los `Web Workers` son un sistema asíncrono que permite que código JS se ejecute en un hilo aíslado del hilo principal.

El código que esté en este hilo no tendrá acceso a todas las características del navegador, sólo podrá acceder a XMLHttpRequest, Location (en modo lectura) y Navigator y utilidades como `setTimeout()` y `setInterval()`. Además, permite la creación de otros workers desde este hilo.

El scope del código que se ejecute en estos workers es totalmente independiente del que tenga el hilo principal y la comunicación entre estos dos entornos se lleva a cabo mediante eventos. Además, dado que su ejecución es independiente de la del hilo principal, en caso de no terminarla manualmente seguirá ejecutándose en segundo plano.

#### Uso

Lo primero que tenemos que hacer para usar un Worker es crearlo. El Worker recibirá la ruta al archivo js que se desea que ejecute.

```javascript
const worker = new Worker('./js/worker.js')
```

Una vez que está creado, la forma con la que se comunicarán worker e hilo principal será mediante el método `postMessage`. Este método recibirá el mensaje que queramos enviar al worker. En caso de que el mensaje sea un objeto, lo que se recibirá en el worker será una copia.

```javascript
// Desde el hilo principal hacia el worker
worker.postMessage({ mensaje: 'hilo principal --> worker' })

// Desde el worker hacia el hilo principal
self.postMessage({ mensaje: 'worker --> hilo principal'})
```

Para recibir mensajes, usaremos el evento `onmessage`:

```javascript
// En el hilo principal
worker.addEventListener('message', () => {
// Lo que queramos hacer cuando el worker envíe un mensaje al hilo principal
})

// En el worker
self.addEventListener('message', () => {
// Lo que queramos hacer cuando el hilo principal envíe un mensaje al worker
})
```

Una vez que queramos que el worker deje de existir, utilizaremos el método `terminate()` si estamos en el hilo principal o `.close()` desde el propio worker.

```javascript
  // Hilo principal
  worker.terminate()

  // En el worker
  self.close()
```

Los worker son una herramienta muy potente y su uso está muy relacionado con tareas de alto rendimiento. Algunos ejemplos de para qué se puede usar son los siguientes:

- Polling de peticiones HTTP.
- Calculo de resultado de algoritmos intensivos.
- Procesamiento de imágenes y vídeo.
- Asegurar que una petición HTTP se realice.
- Hacer múltiples peticiones HTTP.

#### Librerías

- [ThreadJS](https://threads.js.org/)
- [ParallelJS](https://parallel.js.org/)
- [Comlink](https://github.com/GoogleChromeLabs/comlink)
- [CatilineJS](http://catilinejs.com/)

### [Service Workers](https://serviceworke.rs/)

Los Service Workers son un tipo de Workers cuyo propósito principal es que actúen como proxy entre el navegador y la red o la caché. Su uso está está muy ligado a las PWA, donde la experiencia debe ser muy fluida incluso en escenarios offline.

La principal diferencia con los Workers normales es que los service workers se instalan en el navegador del usuario y que pueden interceptar la comunicación de red que se lleve a cabo desde el hilo principal.

#### Ciclo de vida

Los service workers tienen su propio ciclo de vida :

1. Registro: Cuando, desde el hilo principal, registramos el service worker.

  ```javascript
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
      .then((res) => {
          console.log('Service worker registrado!');
      })
      .catch((err) => {
          console.log('¡Ops!');
      })
  }
  ```

El método register puede recibir un segundo parámetro de configuración donde podremos configurar el alcance del service worker:

  ```javascript
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/user'
      })
      .then((res) => {
          console.log('Service worker registrado!');
      })
      .catch((err) => {
          console.log('¡Ops!');
      })
  }
  ````

2. `Instalación`: Una vez que lo hemos registrado, el navegador se encarga de descargarse ese service worker y de instalarlo en el mismo. Esta fase se dará cuando lo registremos por primera vez o cuando lo actualicemos.

Sólo puede haber un SW instalado para un sitio web en un navegador, por lo que cuando se instale, este afectará a todas las pestañas del sitio web abiertas en ese sitio. En caso de que haya una nueva versión, no se instalará hasta que todas las pestañas se hayan cerrado.

```javascript
self.addEventListener('install', (event) => {
  console.log('service worker instalado')
})
```

3. `Activación`: Cuando ya está instalado, la siguiente fase será la activación. Esta fase no se da de forma automática tras la instalación, pero podemos forzarla o bien recargando la página o bien usando la función `skipWaiting` dentro del manejador de eventos de `install`.

4. `Pasivo`: Mientras el SW está activo pero no se producen peticiones este pasa a un estado pasivo.

5. `Fetch`: Se produce una petición desde el hilo principal, por lo que el SW la intercepta y puede actuar en consecuencia.

6. `Terminated`: Tras permanecer mucho tiempo en estado pasivo, el SW liberará los recursos que ocupa en el navegador pasando al estado `terminated`. Cuando esto ocurre, se liberan las cachés que esté manejando.

#### Uso

Los service workers se usan normalmente en combinación con Cache Storage. Esta API se basa en promesas y ofrece los siguientes métodos:

- `.open(nombreCache)`: Abre una conexión a la caché. Este método será el primero que usemos cuando trabajemos con ella.
- `.addAll(ficheros)`: Añade las entradas proporcionadas a la caché.
- `.delete(elemento)`: Elimina el elemento de la caché.
- `.put(elemento)`: Permite añadir un elemento a la caché.
- `.match(petición)`: Obtiene el elemento de la caché si está. Si no existe se obtiene `undefined`.

```javascript
const miCache = 'v1.0'

const archivos = [
    '/ejemplos/clase17/sw/style.css',
    '/ejemplos/clase17/sw/script.js'
]

self.addEventListener('install', (evento) => {
    console.log('SW instalado')
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

self.addEventListener('fetch', function(event) {
    console.log('Fetch event', event)
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request)
        })
    );
});
```

#### Librerías

- [workbox](https://developers.google.com/web/tools/workbox)


### Speech

Uno de los problemas más recurrentes a la hora de desarrollar una aplicación es la accesibilidad. Para poder abordar el problema de la accesibilidad en personas con problemas de visión, los navegadores nos proporcionan la API de `SpeechSynthesis` para poder comunicarnos con los usuarios de forma programática.

#### Uso

Lo primero que haremos será crear un objeto `SpeechSynthesisUtterance`.

```javascript

const loro = new SpeechSynthesisUtterance();
```

Este objeto contendrá las siguientes propiedades:

- `.text`: El texto que tiene que leer.
- `.volume`: Permite definir el volumen con el que hablará la voz. Será un valor entre 0 y 1.
- `.rate`: La velocidad de lectura de la voz. Será un valor entre 0 y 1.
- `.pitch`: Permite definir el tono de la voz. El valor oscilará entre 0 y 2.
- `.voice`: Define la voz con la que hablará el navegador.

En el navegador, existe un objeto llamado `speechSynthesis` que contiene algunos métodos con los que tendremos que interactuar para que este nos hable:

- `speechSynthesis.getVoices()`: Nos devuelve un listado de voces disponibles en el navegador.

```javascript
loro.voice = speechSynthesis.getVoices().find(function (voice) {
    return voice.name === 'Juan';
})
```

- `speechSynthesis.speak(utterance)`: Recibe un objeto `SpeechSynthesisUtterance` previamente configurado y lee el texto que este contenga.

- `speechSynthesis.pause()`: Pausa la reproducción.
- `speechSynthesis.resume()`: Continúa la reproducción desde el punto en el que se paró.
- `speechSynthesis.cancel()`: Borra la reproducción pendiente.
