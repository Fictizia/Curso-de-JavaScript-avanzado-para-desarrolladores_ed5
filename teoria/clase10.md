![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 10

- Asincronía en JS
  * Comunicación HTTP
    - JSON
    - CORS
    - AJAX
    - Fetch
  * Generadores

## Comunicación HTTP

HTTP (Hypertext transfer protocol) es el protocolo de comunicaciones más extendido en la web. Se basa en una estructura cliente-servidor en la que siempre hay alguien solicitando recursos y otro alguien esperando para atender las solicitudes del primero.

![Client-server flow](../../master-web-1/assets/clase11/client-server.png)

Algunas características de HTTP son:

- Simplicidad: Está diseñado y desarrollado para que su entendimiento sea fácil.
- Extensible: Está diseñado para ser una base sobre la que se puedan crear soluciones personalizadas.
- Sin estado: Las peticiones HTTP son independientes entre sí. Una petición nunca tendrá información sobre las anteriores.
- Permite la transmisión de archivos multimedia. Este tipo de contenido se identifica por su clasificación MIME.

Una llamada HTTP se compone de las siguientes partes:

- Cliente: es el sistema que realiza la petición:
  - URL (Uniform Resource Locator): Es la dirección por la que identificamos al servidor. Las URLs públicas, es decir, todo lo que aparezca en ellas puede ser indexable. Dicha dirección puede contener, a su vez, diferentes partes:
    - Protocolo: Es la parte inicial de la URL e índica el protocolo de comunicación que se usará para la comunicación. En el caso de HTTP, este siempre será `http` o `https` (si es que la conexión es segura).
    - Servidor: Identifica el servidor con el que se realiza la comunicación.
    - Puerto de red: Indica por qué puerto se comunicará con el servidor. Por defecto, para `http` será siempre el puerto 80 y para `https` será 443.
    - Ruta del recurso: Dentro del servidor, indica una ruta para acceder al recurso. Esta ruta, a su vez, puede dividirse en distintas partes:
      - Parámetros de ruta: son partes variables dentro de una ruta.
      - Parámetros de consulta: Es opcional, y sirve para afinar las peticiones al servidor. Se separan de la ruta por una interrogación y son pares de clave valor separados por &. Un ejemplo:

        `https://pokeapi.co:443/api/v2/ability?limit=20&offset=20`
        - `https` es el protocolo.
        - `pokeapi.co` es el servidor.
        - `443` es el puerto
        - `api/v2/ability` es la ruta del recurso.
          - `v2` es un parámetro de ruta.
          - `limit=20&offset=20` son los parámetros de consulta.
  - Cabeceras: Permiten enviar información adicional en la petición. Son pares clave-valor compuestas por el nombre de la cabecera y su valor. El navegador por defecto siempre enviará ciertas cabeceras, aunque programaticamente nosotros también podremos controlar algunas de ellas. Dado que HTTP es extensible, podremos enviar cabeceras personalizadas.
  - Un verbo: Existen 9 verbos, cada uno asociado a la acción que se desea que el servidor realice. Los principales son:
    - `OPTIONS`: Se utiliza para conocer qué opciones de comunicación permite una ruta.
    - `HEAD`: Solicita sólo las cabeceras de respuesta de un recurso, no el cuerpo.
    - `GET`: Es la operación de lectura. Sirve para recuperar un recurso del servidor. Es la que realizan los navegadores desde la barra de direcciones.
    - `POST`: Se utiliza para crear nuevos contenido en el servidor.
    - `PUT`: Se utiliza para actualizar de forma completa un recurso.
    - `PATCH`: Sirve para realizar actualizaciones parciales sobre un recurso.
    - `DELETE`: Borra un recurso específico.
  - Cuerpo: Es una parte opcional de la comunicación HTTP. No todos los verbos la admiten, sólo los de escritura y actualización (POST, PATCH Y PUT). Esta información no es pública, por lo que se recomienda que los datos sensibles siempre viajen en el body de la petición y no en la URL.

- Servidor: Es el sistema que procesa el contenido de la petición y le da al cliente la respuesta que ha pedido. Dicha respuesta se compone de las siguientes partes:
  - Código de estado: Da información sobre cómo ha ido el procesamiento de la petición. Cada código de estado representa una situación concreta:
    - `1xx`: Informativos.
    - `2xx`: Procesamiento satisfactorio.
    - `3xx`: Usos múltiples (caché, redireccionamiento,...).
    - `4xx`: Error de cliente.
    - `5xx`: Error de servidor.
  - Cabeceras: Al igual que en la petición, en la respuesta podemos dar información al cliente a través de las cabeceras. Esta información puede ser sobre el propio servidor (`server`, `x-powered-by`,...), sobre la respuesta (`Content-Length`, `Content-Type`), sobre la sesión (`Set-Cookie`, `Cookie`), etc.
  - Cuerpo de la respuesta: No siempre viaja en las peticiones. El método HEAD no tiene cuerpo y el método DELETE no tiene por qué tener cuerpo, se puede controlar por código de estado.

### JSON

> JSON (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript») es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera (año 2019) un formato independiente del lenguaje.

#### Sintaxis

Admite los siguientes tipos:

- Números: admite negativos y puede tener la parte fraccional separada por puntos. Los ceros por la izquierda están prohibidos.
- Cadenas de texto: Delimitadas por comillas dobles. Se permite el uso de cadenas de escape.
- Booleanos: Representados como `true` o `false`.
- null.
- Array.
- Objetos: Las claves tienen que llevar siempre comillas dobles. Las comas finales están prohibidas.

#### Uso

Javascript nos provee del objeto JSON a nivel global que nos permite interactuar con este tipo de mensajes. Este objeto contiene dos métodos:

- `.parse(json)`: Recibe un JSON como texto y lo transforma a un objeto nativo de JS.
- `.stringify(obj, reemplazador, espacio)`: Recibe un objeto JS y lo transforma a JSON. El parámetro reemplazador puede ser una función o un array. Si es una función, se sobreescribirá el mecanismo por defecto para transformar a string. Si fuera un array, el string final sólo contendría las propiedades indicadas en el array. El parámetro espacio sirve para controlar los espacios que se van a introducir en la cadena final. Si es un número, se indentará el JSON con el número de espacios introducidos (máximo 10). Si se indica una cadena, se usará dicha cadena.

```javascript
const persona = {
  nombre: 'Hackerman',
  contraseña: '12345',
}

const json = JSON.stringify(persona, ['nombre'], '\t')
const otroMas = JSON.stringify(persona, (clave, valor) => {
  if(clave === 'contraseña') {
    return valor.replace(/./g, '*');
  }
  return valor;
}, 2)
```

Si un objeto tiene un método `toJSON`, este será el que se utilice cuando se le aplique `JSON.stringify` sobre él.

```javascript
const miObjeto = {
  nombre: 'Batman',
  toJSON: function() {
    return 42;
  }
}

const json = JSON.stringify({ miObjeto });
```

### CORS

Cross-Origin Resource Sharing es un mecanismo para controlar qué recursos y cómo y desde donde se pueden solicitar recursos a un servidor. Los navegadores realizan dos tipos de peticiones Simples y Preflighted. La diferencia entre ellas radica en cómo se hacen cada una. Las peticiones simples sólo pueden usar las siguientes cosas:

- Verbos:
  - GET
  - HEAD
  . POST
- Cabeceras:
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type: Esta solo puede valer `application/x-www-form-urlencoded`, `multipart/form-data` o `text/plain`.
  - DPR
  - Dowlink
  - Save-Data
  - Viewport-Width
  - Width

Si nuestra petición se sale de estos parámetros, el navegador realizará una petición Preflighted que consiste en que primero hará una petición con el verbo OPTIONS para comprobar que la operación que estamos llevando a cabo es válida. El servidor le dará esa información al navegador en las cabeceras de la respuesta:

- `Access-Control-Allow-Origin`: Indica desde qué orígenes se pueden hacer peticiones al servidor. '*' en caso de que queramos que sea desde cualquiera.
- `Access-Control-Allow-Methods`: Indica qué verbos HTTP se admiten. Es una cadena de texto con los verbos en mayúsculas separados por comas.
- `Access-Control-Allow-Headers`: Indica qué cabeceras se admiten separadas por comas.
- `Access-Control-Allow-Credentials`: Será true of false dependiendo de si queremos permitir que envíen credenciales desde otros dominios.
- `Access-Control-Max-Age`: Indica cuanto tiempo (en segundos), se cacheará el resultado de la petición preflighted para no realizarla más.

### Navegador

AJAX es cómo se conoce a la técnica de desarrollo de web consistente en modificar el contenido de las webs sin necesidad de recargar las páginas. Consiste en usar los recursos que ya existen en el navegador (JS Asíncrono y XML) para solicitar recursos al servidor en segundo plano.

### XMLHttpRequest

Esta técnica se basa en el objeto `XMLHttpRequest` que contienen los navegadores. Dicho objeto no sirve sólo para XML, vale para cualquier tipo de dato.

#### Declaración

Para crear una nueva instancia de XMLHttpRequest usaremos el constructor de su clase. Este no recibe ningún parámetro.

```javascript
const req = new XMLHttpRequest();
```

#### Propiedades

- `.onreadystatechange`: A esta propiedad asignaremos el manejador del evento que saltará cuando se complete una petición. También podemos usar addEventListener

- `.readyState`*: Nos da un entero que representa el stado de la petición.
  - `0` (UNSENT): Se ha creado la instancia de XMLHttpRequest pero no se ha abierto la conexión con el servidor.
  - `1` (OPENED): Se ha abierto una conexión con el servidor pero no se ha hecho la petición.
  - `2` (HEADERS_RECEIVED): Se ha recibido el código de estado y las cabeceras de la respuesta.
  - `3` (LOADING): Tenemos parte del contenido del cuerpo de la respuesta.
  - `4` (DONE): La operación se ha completado
- `.responseType`: Es un enumerado que define el tipo que queremos en la respuesta. Admite los siguientes valores:
  - `''`: La respuesta se trata como texto.
  - `arrayBuffer`: La respuesta es un `ArrayBuffer` de JS que contiene datos binarios.
  - `blob`: La respuesta es un objeto `Blob` que contiene datos binarios.
  - `document`: La respuesta es un documento HTML o XML.
  - `json`: La respuesta es un JSON.
  - `text`: La respuesta es texto plano en un objeto `DomString`.
- `.response`*: Contiene la respuesta. El formato de la misma dependerá de `responseType`.
- `.responseText`*: Contiene la respuesta en formato texto. `null` si no ha ido bien o aún no se ha enviado la petición. Sólo se puede usar si `responseType` es `''` o `text`.
- `.responseURL`*: Devuelve la URL de la respuesta. `null` si aún no se ha indicado una URL.
- `.status`*: Contiene el código de estado de la respuesta.
- `.statusText`*: Contiene el código de estado de la respuesta y el mensaje de estado (`404 Not Found`, `200 OK`, ...)
- `.timeout`: Permite indicar el número de milisegundos máximo que queremos que la petición tarde antes de acabar.
- `.withCredentials`: Sirve para que las peticiones a sitios distintos a nuestro dominio usen las credenciales de las que disponemos (cookies, cabeceras, certificados TLS)

\* Sólo lectura

#### Métodos

- `.open(verbo, url, esAsincrono)`: Crea la conexión.
- `.send(body)`: Envía la petición. Este método devuelve en cuanto se envía la petición. El body siempre será un string.
- `.setRequestHeader()`: Modifica una cabecera de la petición. Se debe usar antes de enviar la petición pero después de abrir la conexión.
- `.abort()`: Aborta la petición si ya se ha enviado.
- `.getAllResponseHeaders()`: Devuelve las cabeceras de la respuesta como string separadas por salto de línea. Devuelve `null` si no se ha recibido respuesta.
- `.getResponseHeader(cabecera)`: Devuelve la cabecera especificada

#### Eventos

- `abort`: Salta cuando se aborta una petición.
- `error`: Salta cuando se produce un error en la petición. Estos erorres nos son relativos a los código de error de la respuesta, sino de la petición.
- `load`: Se lanza cuando la transacción se ha completado.
- `loadend`: Ocurre cuando una petición se completa, ya sea satisfatoriamente (`load`) o no (`abort` o `error`).
- `loadstart`: Salta cuando una petición comienza.
- `progress`: Salta cuando se reciben datos de una petición.
- `loadstart`: Ocurre si se produce un timeout en una petición.

```javascript
const req = new XMLHttpRequest();
// Indicamos verbo, URL y si queremos que sea asíncrona
req.open('GET', 'https://randomuser.me/api/', true);
req.responseType = 'json'
req.timeout = 100
req.onreadystatechange = function(event) {
  console.log(req.getResponseHeader('Content-Length'))
  console.log(req.readyState);
  console.log(req.responseURL)
  console.log(req.status)
  console.log(req.statusText)
}

req.onload = (event) => {
  console.log('Ha llegado load');
};

req.addEventListener('loadend', (event) => {
  console.log('Ha llegado loadend');
});

req.send(null)
```

### [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)

Si bien XMLHttpRequest permitió que la web evolucionase mucho, con la llegada de las promesas se introdujo una nueva forma más sencilla y elegante de gestionar la comunicación HTTP en los navegadores. Fetch se basa en promesas, por lo cual es compatible con async/await.

Fetch devuelve siempre una promesa independientemente del código de estado con el que se resuelva la petición. Esta función se puede usar de distintas maneras.

Con Fetch llegaron una serie de interfaces y objetos que representan de una forma muy "literal" las partes envueltas en la comunicación cliente-servidor. De esta manera, tenemos los objetos `Headers`, `Request` y `Response` y el mixin `Body` que representan a sus homónimos. La función Fetch recibirá una representación de una petición (`Request`), que podrá contener o no ciertas cabeceras (`Headers`) y/o un cuerpo (`Body`) y cuando el servidor responda se recibirá una respuesta (`Response`) que contendrá una serie de cabeceras y/o un cuerpo.

#### Body

Body no es un objeto 'normal' en JS, es un mixin. Un mixin es una clase que provee de ciertas funcionalidades para que otras clases la utilicen, pero no tiene sentido su existencia de forma autónoma.

Los métodos que provee Body sirven para transformar dicho cuerpo al formato deseado devolviendo siempre una promesa. Dichas funciones sólo se podrán ejecutar una vez, el resto de veces resuelven con datos vacíos.

- `.arrayBuffer()`
- `.blob()`
- `.formData()`
- `.json()`
- `.text()`

#### Request

El objeto Request presenta una petición a un servidor y contiene una serie de propiedades y métodos que nos permitirán hilar más fino cuando llevemos a cabo las peticiones. Como viene de `Body`, todos los métodos que contiene el segundo van incluidos en Request.

El constructor de la clase Request recibe una URL y, de forma opcional, un objeto parecido a Request o directamente un objeto Request.

```javascript

const req = new Request('https://randomuser.me/api/')

const req1 = new Request('https://randomuser.me/api/', {
  method: 'GET',
})

const req2 = new Request(req)
```

#### Propiedades

Estas son algunas de las propiedades más importantes de Request.

- `method`: Define el verbo HTTP con el que se llevará a cabo la petición.
- `headers`: Se trata de un objeto `Headers` que contiene las cabeceras que queremos que incluya la petición.
- `body`: El cuerpo de la petición. Este podrá ser de los mismos tipos a los que se transforma Body. En nuestro día a día, lo más probable es que sea un JSON (string).
- `mode`: El modo en el que queremos usar la petición.
  - `cors`: Modo por defecto. Está pensado para hacer peticiones cross-origin, es decir, hacer peticiones a fuera de tu dominio. Es el modo por defecto.
  - `no-cors`: Previene problemas de CORS limitando las operaciones que podemos llevar a cabo. Nos limita a los verbos `HEAD`, `GET` y `POST` y sólo permite una cantidad limitada de cabeceras. Además, impide que se pueda acceder a las propiedades de la respuesta mediante JS.
  - `same-origin`: Así indicamos que es una petición dentro del mismo dominio. En caso de que se haga a otro dominio la petición fallará.
  - `navigate`: Así indicamos que está diseñada para navegar entre documentos HTML.
- `credentials`: Le decimos si queremos que utilice las credenciales que existen en el navegador para las peticiones. Tiene tres modos:
  - `omit`: Si no queremos que las envíe.
  - `same-origin`: Si queremos que las use sólo dentro del mismo origen.
  - `include`: Si queremos que las envíe siempre.

#### Response

Al igual que `Request`, este objeto hereda los métodos de `Body`. Si bien este objeto nosotros no lo crearemos sino que lo recibiremos, es interesante que conozcamos qué contiene.

####Propiedades

- `headers`: Un objeto Headers con las cabeceras de la respuesta.
- `ok`: Un boleano que indica si la petición ha sido satisfactoria.
- `status`
- `statusText`
- `type`: Muestra con qué modo se ha llevado a cabo la petición.
  - `basic`: Representa el modo `same-origin`.
  - `cors`: La respuesta se ha recibido satisfactoriamente desde otro origin. Se pueden acceder a ciertas cabeceras y al body.
  - `error`: Se ha producido un fallo de red.
  - `opaque`: No tenemos acceso al body. El modo de la respuesta fue `no-cors`.
- `url`: Indica la url completa del recurso al que hemos intentado acceder.

#### Uso

Esta sería la forma más sencilla de usar fetch, que es con lo mínimo que necesita para funcionar, una URL.

```javascript
fetch('https://randomuser.me/api/')
.then(response => {
  console.log(response)
})
.catch(error => {
  console.error(error)
})
```

Ahora vamos a complicarlo un poco añadiendo unas cabeceras específicas y modificando alguna de sus opciones

```javascript
const headers = new Headers({
  'Content-Type': 'application/json',
})

fetch('https://randomuser.me/api/', { headers })
.then(response => {
  console.log(response)
}).catch(error => {
  console.error(error)
})

```

Ahora vamos a hacer la petición usando un objeto `Request` y vamos a transformar el resultado a `JSON`.

```javascript
const headers = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})

const request = new Request('https://randomuser.me/api/', {
  method: 'GET',
  headers,
})

fetch(request)
.then(async response => {
  const res = await response.json()
  console.log(res);
})
.catch(error => {
  console.error(error);
})
```

**Librerías**

- [Axios](https://github.com/axios/axios)

### Generadores

Los generadores son una funcionalidad que llegó con ES6 que nos permite crear funciones que en vez de devolver un único valor, varía el mismo en función de las veces que se invoque. Su uso está muy ligado a los iterables. La principal ventaja de los generadores radica en que el código se ejecuta bajo demanda de una forma muy eficiente en memoria.

Para crear un generador, se utiliza una sintaxis especial con las funciones:

```javascript
function* funcionGeneradora() {
  for(let i = 0; i < 10; i += 1) {
    yield i;
  }
}
```

Cuando se ejecuta este código, en vez de devolver un valor devuelve un objeto especial generador con el que podemos manejar la ejecución del generador. Este objeto contiene un método `next` que cuando se ejecuta devuelve un objeto con el valor en el atributo `value` y un atributo `done` que es booleano y que indica si se ha acabado la ejecución del generador o no.

```javascript
function* funcionGeneradora() {
  for(let i = 1; i <= 3; i += 1) {
    yield i;
  }
  return 'final';
}
const generador = funcionGeneradora()

// uno contendrá la propiedad value que valdrá 1 y done valdrá false
const uno = generador.next();
// dos contendrá la propiedad value que valdrá 2 y done valdrá false
const dos = generador.next();
// tres contendrá la propiedad value que valdrá 3 y done valdrá false
const tres = generador.next();
// tres contendrá la propiedad value que valdrá 'final' y done valdrá true
const final = generador.next()

console.log([uno, dos, tres, final])
```

Una vez que hayamos "agotado" los valores de un generador, este siempre devolverá undefined como valor. Para volver a usarlo tendremos que volver a crearlo.

Además, los generadores son iterables, con lo cual podemos recorrerlos usando un `for...of` como haríamos con cualquier otro iterable:

```javascript
function* funcionGeneradora() {
  for(let i = 1; i <= 3; i += 1) {
    yield i;
  }
  return 'final';
}
const generador = funcionGeneradora()

for(const valor of generador) {
  // Esto directamente imprimirá el valor, no el objeto con valur y done
  console.log(valor)
}
```

**Ejercicio**

Crear una función que genere id's autoincrementales. Cada vez que se ejecute la función esta nos devolverá un nuevo id.

```javascript
function* generaId() {

}
```

También podemos combinar esto con `for...of` y `async/await` para crear generadores asíncronos:

```javascript
(async function () {
  async function* getCommits(repositorio) {
    let url = `https://api.github.com/repos/${repositorio}/commits`;
    while (url) {
      const respuesta = await fetch(url)
      const cuerpo = await respuesta.json()

      const siguientePaginaCabecera = respuesta.headers.get('Link').match(/<(.*?)>; rel="next"/)
      const siguientePagina = siguientePaginaCabecera.lentgh > 1 && siguientePaginaCabecera[1];
      url = siguientePagina
      if (siguientePagina) {
        for (const commit of cuerpo) {
          yield commit
        }
      }
    }
  }


  const count = 0;
  const generadorAsincrono = getCommits('vuejs/vue')

  for await (const commit of generadorAsincrono) {
    console.log(commit.author.name, commit.author.date)
  }
})()
```

Vamos a listar los superheroes de la familia Batman. Para ello usaremos la siguiente API: `https://www.superheroapi.com`. De cada super heroe mostraremos su nombre de super heroe, su nombre real, su género y su imagen. Si tuviera un alias también lo mostraríamos.
