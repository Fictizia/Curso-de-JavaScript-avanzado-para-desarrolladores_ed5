![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 5

* Funciones
  * this
  * Hoisting
* Derivados de object
  * Array
  * Set
  * Map
  * Date

#### this

`this` refleja el contexto de un objeto. Cuando no hay ningún objeto que lo englobe, `this`se refiere al contexto global. El valor de `this` depende de en donde se utilice:

- En una función, `this` siempre se refiere al contexto en el que está definida. Si no hay ningún contexto, este será el contexto global.

```javascript
console.log(this) // Window / contexto global
```

Las arrow functions NO tienen contexto, es decir, no generan `this`. El `this` al que accedamos dentro de una arrow function será al `this` de su ancestro más cercano que genere un contexto:

```javascript
const espania = (function () {
    this.capital = 'Madrid'
    const self = this
    const madrid = () => {
        this.capital = 'Los Madriles'
    }
    const andalucia = function () {
        console.log(`La capital de España es ${this.capital}`);
        this.capital = 'Sevilla';
    }
    return {
        madrid,
        andalucia,
        capital: this.capital
    }
})()
```

- en un método, `this` se refiere al objeto en el que esté contenido.

```javascript
const persona = {
  nombre: 'Fran',
  apellidos: 'Quesada',
  nombreCompleto() {
    return `${this.nombre} ${this.apellidos}` // this aquí vale lo que valga persona
  }
}

// en objetos anidados, se mantiene esta norma, this hace referencia al objeto en el que está contenido
const carrito = {
  productos: [{
    nombre: 'papel higienico',
    precio: 4,
    unidades: 3,
    get precioTotal() {
     return this.precio * this.unidades;
    }
  },
  {
    nombre: 'fideos instantaneos',
    precio: 0.80,
    unidades: 6,
    get precioTotal() {
      return this.precio * this.unidades;
    }
  }
  ],
  get precioTotal() {
    let precio = 0;
    for(let i = 0; i < this.productos.length; i += 1) {
      precio += this.productos[i].precioTotal
    }
    return precio
  }
}
```
- en un evento, this se refiere al elemento que ha recibido el evento

```html
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
```

```javascript
$('button#myButton').on('click', function() {
    const miBoton = $(this)
})
```

- podemos usar `.apply()`, `.call()` y `.bind()` para modificar el this

```javascript
const persona1 = {
  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
const persona2 = {
  nombre:"Juan",
  apellido: "de las Nieves",
}
persona1.nombreCompleto(); // undefined undefined
persona1.nombreCompleto.call(persona2);  // Juan de las Nieves
const nombreCompletoConDatos = persona1.nombreCompleto.bind(persona2)
nombreCompletoConDatos() // Juan de las Nieves
```

#### Hoisting

El intérprete de JS tiene algunos comportamientos muy curiosos. Uno de ellos es el llamado `hoisting`, que consiste en que en JS podemos referenciar variables y funciones antes de declararlas sin que esto provoque un error en código.

```javascript
console.log(miVariable);
var miVariable = 'Esto no existe'
```

Esto se debe a que cuando declaramos una variable con `var` (importante, esto sólo funciona con `var`), el motor de Javascript "mueve la declaración" a la parte más alta de su contexto de tal forma que el código al final queda de esta forma:

```javascript
// se "eleva" la declaración (hoisting)
var miVariable

console.log(miVariable)

miVariable = 'Esto no existe'
```

Con las funciones ocurre algo parecido, se pueden usar antes de ser declaradas:

```javascript
saludos('Fran');

function saludos(nombre) {
  console.log(`¡Hola ${nombre}!`);
}
```

Esto es porque las variables se "declaran" aun más "arriba" que las funciones:

```javascript
function saludos(nombre) {
  console.log(`¡Hola ${nombre}!`);
}

saludos('Fran');
```

## Derivados de Object

Como ya hemos visto, en JS casi todo es, de una forma u de otra, un objeto. Por tanto, todo lo que derive de un objeto, funcionará por referencia, y tendremos que tener en cuenta la mutabilidad de los objetos.

### Array

Un array en JS es, basicamente, un listado de cosas. Es un iterable, es decir, se puede recorrer con for...of. Su contenido puede ser de cualquier tipo, object, function, string,... no importa el tipo. Los elementos de un array pueden estar repetidos.

#### Declaración

Para crear un array tenemos dos opciones:

```javascript
const miArray = ['elemento1', 'elemento2'];

// Usando el constructor
const miOtroArray = new Array('elemento1', 'elemento2');

// También podemos crear un array vacío
const miArrayVacio = new Array(5) // [empty x5]
```

#### Propiedades

* `.length`: Número de elementos de un array (una dimensión)

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const heroesLength = heroes.length
```

Esta propiedad se puede modificar, cambiando así el contenido del array a voluntad.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

// Al decirle que su tamaño es mayor del real, añadimos espacios en blanco.
heroes.length = 10;

// Esta es una forma de eliminar elementos de un array
heroes.length = 4;
```

Pese a que se pueda hacer, esta práctica no es muy recomendable ya que modifica el array original.

### Acceso

- El operador `[]`

```javascript
const heroes = ['batman', 'superman']

const batman = heroes[0]
```

- Al igual que con los objetos, podemos usar `destructuring` para acceder a las propiedades:

```javascript
const heroes = ['batman', 'superman'];

const [batman, superman] = heroes
```

Si nos pasamos asignando variables, estas tendrán valor `undefined`

```javascript
const heroes = ['batman', 'superman']

const [batman, superman, wonderwoman] = heroes
```

Al igual que en los objetos, podemos usar valores por defecto

```javascript
const heroes = ['batman', 'superman']

const [batman, superman, wonderwoman = 'wonderwoman'] = heroes
```

Si no queremos quedarnos con todos los valores, podemos saltarnos algunos

```javascript

const heroes = ['batman', 'aquaman', 'superman']

const [batman, , superman] = heroes
```

#### Jugando con Arrays

```javascript

const string = 'mi string'
// Como ya vimos esto no lo puedo hacer
string = 'otra cosa diferente'

// Los arrays mutan, así que puedo modificar su contenido libremente
const miArray = ['elemento1', 'elemento2', 'elemento3']

const miOtroArray = miArray

miOtroArray[0] = 'EsteEs el primer elemento'
console.assert(miOtroArray[0] === miArray[0])
```

Podemos usar el [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator) para componer arrays:

```javascript
const frutas = ['🍐', '🍎']

const verduras = ['🥬', '🍅']

const frutasYVerduras = [
  ...frutas,
  ...verduras
]
```

Podemos borrar propiedades de un array usando `delete`. Lo que hace por debajo es cambiar a undefined ese valor.

```javascript

delete frutasYVerduras[0];

// dicho de otra manera
frutasYVerduras[0] = undefined;
```

#### Métodos

* `.isArray()`: Nos dice si una variable es o no un Array.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman'];

Array.isArray(heroes)
```

* `.from(casiArray)`: Crea un array a partir de un iterable.

```javascript
const miPalabra = 'batman';

const miPalabraComoArray = Array.from(miPalabra);

// Esto es equivalente a usar el spread operator
const miPalabraComoArray = [...miPalabra];
```

* `.of()`: Crea un array con los elementos que reciba

```javascript
// La principal diferencia con new Array es que .of trata los enteros como miembros del array
const miNuevoArray = Array.of(8) // [8]
const miOtroArray = Array.of('batman', 'superman', 'wonderwoman')
```

##### Metodos que mutan

* `.pop()`: Borra el último elemento de una matriz y lo devuelve

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const elHeroeQueNadieQuiere = heroes.pop() // aquaman
```

* `.push(param1, param2, ...paramn)`: Añade uno o n elementos al final de un array y devuelve la nueva longitud.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevaLongitud = heroes.push('flechaVerde', 'linternaVerde') // 7
```

* `.reverse()`: Da la vuelta a los elementos de un array

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevoOrden = heroes.reverse() // ['aquaman', 'shazam', 'wonderwoman', 'superman', 'batman']
```

* `.shift()`: Elimina el primer elemento del array y lo devuelve

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const elMejorHeroe = heroes.shift() // batman
```

* `.sort(funcionDeComparación)`: Ordena los elementos de un array y devuelve el array ordenado. Si son strings, se devolverán alfabéticamente. Puede recibir una función como parámetro en la que se establezca el orden.

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const heroesOrdenados = heroes.sort() // ["aquaman", "batman", "shazam", "superman", "wonderwoman"]

const ordenaPorNumeroDeLetras = (a, b) => {
  // Si a es menor que b por el criterio que nosotros elegimos, devolvemos -1
  if (a.length > b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  }
  return 0;
}

const heroesOrdenadorPorNumeroDeLetras = heroes.sort(ordenaPorNumeroDeLetras)

console.assert(heroes === heroesOrdenados)
console.assert(heroes === heroesOrdenadorPorNumeroDeLetras)
```

* `.splice(inicio, elementosQueBorra?, elemento1, elemento2, ...elementon)`: Añade y/o elimina elementos de un arrray. En caso de que no se indiquen cuantos elementos se quieren borrar, todos los elementos desde start hasta el final se borran. Si es 0 o menor que 0 no se eliminarán elementos. Los elementos que se indiquen al final serán los que se indiquen en el lugar de los borrados. Devuelve un array con los elementos eliminados.

```javascript
const marvel = ['capitan america', 'iron man', 'maquina de guerra', 'thor', 'groot', 'spiderman', 'pantera negra', 'halcón']

// Thanos consigue las joyas del infinito y elimina a la mitad de la población

const desvanecidos = marvel.splice(marvel.length / 2)

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

// A Superman lo matan, así que necesitamos sustituirlo y flash se ofrece voluntario
const eliminados = heroes.splice(1, 1, 'flash')
```

* `.unshift(elem1, elem2, ...elemn)`: Añade n elementos a un array por el inicio y devuelve la nueva longitud del array.

```javascript
const heroesAntesDeMolar = ['superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevaLongitud = heroesAntesDeMolar.unshift('batman')
```

##### Metodos que no mutan

* `.concat(array1, array2, arrayn)`: Devuelve un nuevo array con la unión del array original con los n array recibidos.


```javascript
const heroesQueMolan = ['batman', 'wonderwoman', 'flash']
const heroesQueMeh = ['superman', 'aquaman', 'shazam']

const heroes = heroesQueMolan.concat(heroesQueMeh)

// Equivalente a usar spread operator

const heroes = [...heroesQueMolan, ...heroesQueMeh]
```

* `.join(separador)`: Une todos los elementos del array en una cadena. Si recibe un separador, lo usará para unirlos. Por defecto el separador es ','.


```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

console.log(`En la Liga de la justicia podemos encontrar a ${heroes.join(', ')}`)
```

* `.toString()`: Devuelve un string con el contenido del array. El array será parecido al generado por `.join()`. También tenemos una versión `.toLocaleString()`

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

console.log(`En la Liga de la justicia podemos encontrar a ${heroes.toString()}`)

const datos = [new Date(), 12000.43]

console.log(`Mis datos son: ${datos.toString()}`)
console.log(`Mis datos en locale son: ${datos.toLocaleString()}`)
```

* `.indexOf(elemento)`: Devuelve el primer índice en el que se encuentra un elemento o -1.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']
const indiceDeSuperman = heroes.indexOf('superman') // 1
const indiceDeFlash = heroes.indexOf('flash') // -1
```

* `.lastIndexOf(elemento)`: Devuelve el último índice en el que se encuentra un strinng o -1. Es case sensitive.

* `.includes`: Devuelve un booleano que dice si un elemento existe en un array o no.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']
const indiceDeSuperman = heroes.includes('superman') // true
const indiceDeFlash = heroes.includes('flash') // false
```

##### Metodos de repetición

Estos métodos llegaron con ES6. Todos estos métodos reciben una función que se ejecuta por cada elemento del array.

- `.forEach(funcionIteracion, contexto)`: Recibe una función que se ejecuta por cada elemento del array y cuyos parámetros serán:
  1. el elemento actual del array
  2. indice en el que nos encontramos del array
  3. el array completo

Además, puede recibir un contexto (this)

```javascript
// Una simplificación
function forEach(array, funcion) {
  for(let i = 0; i < array.length; i++) {
    funcion(array[i], i, array)
  }
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  log() {
    this.libros.forEach((libro, index) => {
      let prefijo = libro.leido ? 'Ya' : 'Aun no';
      console.log(`${prefijo} has leido ${libro.nombre} de ${libro.autor}`)
    })
  }
}
```

* `.filter(funcionDeFiltrado)`: Aplica una función de filtrado a los elementos de un array devolviendo un nuevo array que sólo contenga los elementos que cumplan una condición. Esta función recibe los mismos parámetros que forEach

```javascript
// Una simplificación
function filter(array, funcion) {
  const nuevoArray = []
  for(let i = 0; i < array.length; i++) {
    if (funcion(array[i], i, array)) {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
    const elementoRandom = librosNoLeidos[indiceRandom]
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  }
}
```

* `.map(funcionDeTransformacion)`: Aplica una función de transformación a cada uno de los elementos del array, devolviendo un nuevo array con la misma longitud que el original.

```javascript
function filter(array, funcion) {
  const nuevoArray = []
  for(let i = 0; i < array.length; i++) {
      nuevoArray.push(funcion(array[i], i, array))
  }
  return nuevoArray;
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  log() {
    const librosComoMensajes = this.libros.map(libro => {
      let prefijo = libro.leido ? 'Ya' : 'Aun no';
      return `${prefijo} has leido ${libro.nombre} de ${libro.autor}`;
    })
    console.log(librosComoMensajes.join('\n'))
  }
}
```

* `.some(funcionDeBusqueda)`: Itera por el array ejecutando la función de busqueda por cada elemento hasta que en uno de ellos la función devuelva true. Comprueba que al menos uno de los elementos sea true. Esta función no recorre todo el array, si encuentra un resultado para.

```javascript
function some(array, funcionDeBusqueda) {
  let encontrado = false;
  let i = 0;
  while(!encontrado && i < array.length) {
    encontrado = funcionDeBusqueda(array[i], i, array)
    i += 1;
  }
  return encontrado;
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  todoLeido() {
    const hayAlgoSinLeer = this.libros.some(libro => !libro.leido)
    const mensaje = hayAlgoSinLeer ? 'Aun te quedan libros por leer' : 'Ya has leído todo';
    console.log(mensaje)
  }
}
```

* `.every(funcionDeBusqueda)`: Itera por el array ejecutando la función de busqueda por cada elemento hasta que en uno de ellos la función devuelva false. Esta función no recorre todo el array, si encuentra un que no sea satisfactorio para.

```javascript
function every(array, funcionDeBusqueda) {
  let cumple = true;
  let i = 0;
  while(cumple && i < array.length) {
    cumple = funcionDeBusqueda(array[i], i, array)
    i += 1;
  }
  return cumple;
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  todoLeido() {
    const estaTodoLeido = this.libros.every(libro => libro.leido)
    const mensaje = estaTodoLeido ? 'Ya has leído todo' : 'Aun te quedan libros por leer';
    console.log(mensaje)
  }
}
```

* `.find(funcionDeBusqueda)`: Itera por el array ejecutando la funcion de busqueda y devuelve el primer elemento para el que la función devuelva true. Muy similar a `.find` tenemos `.findIndex()` que devuelve el indice del elemento que cumple la condición

```javascript
function find(array, funcionDeBusqueda) {
  let encontrado;
  let i = 0;
  while(!encontrado && i < array.length) {
    encontrado = funcionDeBusqueda(array[i], i, array)
    if (!encontrado) {
      i += 1;
    }
  }
  return array[i]; // en el caso de findIndex: return i;
}

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  proximoSinLeer() {
    const proximoSinLeer = this.libros.find(el => !el.leido)
    console.log(`El proximo libro que te toca por leer es ${proximoSinLeer.nombre} de ${proximoSinLeer.autor}`)
  }
}
```

* `.reduce(funcionReductora, valorInicial)`: Ejecuta la función reductora por cada miembro del array y devuelve un único valor.


```javascript

function reduce (array, funcion, inicio) {
  let valor = inicio
  for(let i = 0; i < array.length; i += 1) {
    valor = funcion(valor, array[i], i, array)
  }
  return valor
}

const sumaTodosLosNumeros = (arrayNumeros) => arrayNumeros.reduce((a,b) => a + b, 0)

const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  log() {
    const mensaje = this.libros.reduce((acumulado, actual) => {
      const prefijo = actual.leido ? 'Ya' : 'Aun no';
      return `${acumulado}
${prefijo} has leido ${actual.nombre} de ${actual.autor}`
    }, '')
    console.log(mensaje)
  }
}
```

#### Ejercicios

1. Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método crear un método interno `ordenarPorNombre` que ordene los títulos de la librería por su título.

2. Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen libros para pasar el rato y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído. Crear una propiedad interna `prestamo` que sea booleana que al cambiar a true almacene en otra propiedad interna `librosPrestados` los libros que hemos leído y los quite del total de libros. Ambas propiedades pertenecen al objeto estanteria.

3. Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. Modificar esta variable interna para que cuando pase a valer false los libros leidos vuelvan a la estanteria. No hace falta mantener el orden.


```javascript
const estanteria = {
  libros: [{
    nombre: 'El caballero oscuro',
    autor: 'Frank Miller',
    leido: false
  },
  {
    nombre: 'El mundo amarillo',
    autor: 'Albert Espinosa',
    leido: false,
  },
  {
    nombre: 'Harry Potter y el caliz de fuego',
    autor: 'J.K. Rowling',
    leido: true,
  },
  {
    nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    leido: false
  },
  {
    nombre: 'Berserk',
    autor: 'Kentaro Miura',
    leido: true
  },
  {
    nombre: 'Iliada',
    autor: 'Homero',
    leido: false
  }],
  prestamo: false,
  librosPrestados: [],
  set prestamo(nuevoValor) {
    if (nuevoValor) {
      this.librosPrestados = this.libros.filter(libro => libro.leido);
      this.libros = this.libros.filter(libro => !libro.leido)
    } else {
      this.libros = [...this.libros, ...this.librosPrestados]
      this.librosPrestados = []
    }
  },
  log() {
    const { libros } = this;
    let resultado = ''
    for (const libro of libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      resultado = `${resultado}
${prefijo} leído ${libro.nombre} de ${libro.autor}`
    }
    console.log(resultado)
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
    const elementoRandom = librosNoLeidos[indiceRandom]
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  },
  ordenarPorNombre() {
    this.libros = this.libros.sort((a, b) => {
      if(a.nombre < b.nombre) { return -1; }
      if(a.nombre > b.nombre) { return 1; }
      return 0;
    })
  }
}
```
