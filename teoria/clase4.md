![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 4

* Tipos primitivos
  * Objetos
  * function
    * Funciones anónimas
    * Scope
    * Closures

### Object

A diferencia del resto de tipos, los objetos pueden contener más de un valor de cualquiera del resto de tipos. Casi todo en JS es un Object. Los objetos funcionan por referencia en JS, es decir, las variables guardan una referencia al lugar en memoria donde está guardado el objeto. Una definición muy acertada sería: "son cosas que tienen propiedades a las que se accede por una clave única".

#### Declaración

```javascript
const nuestroPrimeritoObjeto = {
  claveComoString: 'valor',
  aquiHayUnNumero: 3000,
  esUnBooleano: true,
  unObjetoAnidado: { }
}

```

Las claves no siguen las mismas normas que las variables, pueden empezar (o ser) números y pueden contener caracteres especiales y/o espacios si van entrecomilladas:

```javascript
const anarquia = {
  'a mi me gustan los espacios': 'pues toma espacios',
  4: 'esta clave es un número'
}
```

También podéis definir claves en dinámicas en función de otras variables (claves computadas)

```javascript

const miClave = Math.random();

const miObjeto = {
  [miClave]: 'esta clave hace lo que quiere'
};
```

Desde ES6 podemos acortar la declaración de claves en objetos:

```javascript

const nombre = 'Fran Quesada';
const escuela = 'Fictizia';

const profesor = { nombre, escuela }
```

#### Jugando con objetos

Hay que tener en cuenta que los objetos mutan en Javascript. Al guardarse por referencia, su contenido puede variar sin modificar dicha referencia.


```javascript

const string = 'mi string'
// Como ya vimos esto no lo puedo hacer
string = 'otra cosa diferente'

// Los objetos mutan, así que puedo modificar su contenido libremente
const objeto = {
  propiedad1: 'Esta es mi propiedad original'
}

objeto.propiedad2 = 'Esta es una propiedad nueva'
objeto.propiedad1 = 'Esta propiedad la modifico'

// Lo que no puedo hacer es lo siguiente:
const peligro = {
  propiedad1: 'Esta es mi propiedad original'
}

peligro = {
    prohibido: 'Esto no lo puedo hacer'
}

```

Podemos usar el [rest operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/parametros_rest) para componer objetos:

```javascript
const personaConNombre = {
  nombre: 'Juan',
}

const personaConApellidos = {
  apellidos: 'de las Nieves'
}

const personaConNombreYApellidos = {
  ...personaConNombre,
  ...personaConApellidos
}
```

#### Acceso

Para acceder a una propiedad de un objeto podemos usar:

- El operador `.`

```javascript
const heroes = {
  dc: ['batman', 'superman'],
  marvel: ['spiderman', 'iron man']
}

const heroesDc = heroes.dc
```

- El operador `[]`

```javascript
const heroes = {
  dc: ['batman', 'superman'],
  marvel: ['spiderman', 'iron man']
}

const heroesDc = heroes['dc']
```

- Una de las cosas que añadieron en ES6 fue el llamado `destructuring`:

```javascript
const heroes = {
  dc: ['batman', 'superman'],
  marvel: ['spiderman', 'iron man']
}

const { dc: heroesDc } = heroes
```

Si queremos prevenir errores, podemos usar valores por defecto.

```javascript
const heroes = {
  marvel: ['spiderman', 'iron man']
}

const { dc: heroesDc = [] } = heroes
```

Combinándolo con las claves computadas:

```javascript
const DC = 'dc'
const heroes = {
  dc: ['batman', 'superman'],
  marvel: ['spiderman', 'iron man']
}

const { [DC]: heroesDc } = heroes
```

Además, podemos usarlo para acceder a objetos anidados:

```javascript
const dc = {
  heroes: {
    batman: {
      nombre: 'Bruce Wayne'
    },
    superman: {
      nombre: 'Clark Kent'
    }
  }
}

const { heroes: { batman } } = dc
```

#### getters y setters

Desde ES6 podemos definir getters y setters en los objetos. Los getters son propiedades que se calculan en base a otras. Los setters se usan para modificar propiedades que componen el getter:

```javascript
const espia  = {
  nombre: 'James',
  apellido: 'Bond',
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  },
  set nombreCompleto(valor) {
    const palabras = valor.split(' ')
    this.nombre = palabras[0] || ''
    this.apellido = palabras[1] || ''
  },
  get nombreEspia() {
    return `${this.apellido}, ${this.nombre} ${this.apellido}`
  }
}

console.log(espia.nombreEspia)
espia.nombreCompleto = 'Austin Powers'
console.log(espia.nombreEspia)
```

#### Métodos

* `.assign(destino, obj1, obj2, ...objn)`: Copia los valores de los n objetos pasados en el objeto destino. Útil para clonado de objetos (a primer nivel).

```javascript
const personaConNombre = {
  nombre: 'Juan',
}

const personaConApellidos = {
  apellidos: 'de las Nieves'
}

const personaConNombreYApellidos = Object.assign({}, personaConNombre, personaConApellidos)
```

* `.defineProperties(objeto, propiedades)`: Define nuevas o modifica propiedades existentes en un objeto y lo devuelve

```javascript
const miObjeto = { propiedad: "Propiedad original..." }
Object.defineProperties(miObjeto, {
  propiedad1: {
    value: true,
    writable: true
  },
  propiedad2: {
    value: "Cadena de texto",
    writable: false
  }
});
console.log(miObjeto);
miObjeto.propiedad = "Propiedad original Modificada";
console.log(miObjeto.propiedad);
miObjeto.propiedad2 = "Cadena de texto... ¿modificada?";
console.log(miObjeto.propiedad2);
```

* `.getOwnPropertyDescriptor(objeto, propiedad)`: Devuelve los detalles de una propiedad de un objeto.

```javascript
const miObjeto = { propiedad: "Propiedad original..." }
Object.defineProperties(miObjeto, {
  propiedad1: {
    value: true,
    // Esta configuración es la misma que al declarar un objeto
    // Por defecto es false
    writable: true,
    // Esto permite que podamos iterar sobre esta propiedad con for...in, Object.keys, etc
    enumerable: true
  },
  propiedad2: {
    value: "Cadena de texto",
    enumerable: false
  }
});
console.log(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad2'))
```

* `.entries(objeto)`: Devuelve los pares clave-valor del objeto como una lista de arrays.

```javascript
const objeto = {
  nombre: 'Ash',
  apellidos: 'Ketchum',
  localidad: 'Pueblo Paleta'
}

const entradas = Object.entries(objeto)
// [['nombre', 'Ash'], ['appelidos', 'Ketchum'], ['localidad', 'Pueblo Paleta']]
```

* `.fromEntries(objeto)`: Devuelve un objeto nuevo a partir de un array de entries con el mismo formato que el generado por `Object.entries`

```javascript
const entradas = [['nombre', 'Ash'], ['appelidos', 'Ketchum'], ['localidad', 'Pueblo Paleta']]

const objeto = Object.fromEntries(entradas)
// { nombre: 'Ash', apellidos: 'Ketchum', localidad: 'Pueblo Paleta' }
```

* `.keys(objeto)`: Devuelve un array con las claves del objeto.

```javascript
const objeto = {
  nombre: 'Fran Quesada',
  edad: 26,
}

const keys = Object.keys(objeto) // ['nombre', 'edad']
```

* `.values(objeto)`: Devuelve un array con los valores de las propiedades del objeto.

```javascript
const objeto = {
  nombre: 'Fran Quesada',
  edad: 26,
}

const keys = Object.values(objeto) // ['Fran Quesada', 26]
```

* `.freeze(objeto)`: Congela el objeto proporcionado para que no se le puedan añadir ni modificar propiedades. ¡Importante!: No se puede descongelar

```javascript
const objeto = {
  nombre: 'Fran Quesada',
  edad: 26,
}

// Devuelve el mismo objeto
const objetoCongelado = Object.freeze(objeto)
objetoCongelado.localidad = 'Madrid'

// Pero si podemos crear nuevas copias a partir del objeto congelado
const nuevoObjeto = {
   ...objetoCongelado,
    localidad: 'Madrid'
}
```

* `.seal(objeto)`: Sella las propiedades de un objeto para que no se puedan añadir nuevas ni cambiar la configuración de las existentes.

```javascript
const objeto = {
  nombre: 'Fran Quesada',
  edad: 26,
}

// Devuelve el mismo objeto
const objetoCongelado = Object.seal(objeto)
objetoCongelado.localidad = 'Madrid'
objetoCongelado.edad = 27
```

#### Ejercicios

10. Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad `productos` que es una lista de los productos. Cada producto tiene las siguientes propiedades:

- `nombre`: Nombre del producto (Papel higiénico, leche, ...)
- `unidades`: número elementos que se van a comprar de dicho producto
- `precio`: precio unitario del producto

Además, tiene una propiedad `precioTotal donde se va actualizando automáticamente el precio del producto. Crear el código necesario para soportar esta funcionalidad.

**Datos de prueba:**

```javascript
const carrito = {
  productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5,
  },
  {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
  }],
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  }
}
```

11. En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:

* `nombre`: Nombre del libro
* `autor`: Nombre de quien lo ha escrito
* `leido`: Un booleano que nos indica si hemos leído o no el libro

Nuestra estantería necesita las siguientes funcionalidades:

* Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
  * Si no lo has leído: `Aun no has leído El Quijote de Miguel de Cervantes`
  * Si lo has leído: `Ya has leído El Quijote de Miguel de Cervantes`
* Un método sugerencia que te devuelva de forma aleatoria el nombre de un libro y su autor que no hayas leído.

Implementar los métodos log y sugerencia del objeto estantería.

Datos de prueba:

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
  }
}
```

### Function

Cuando Brendan Eich creó JS, una de las ideas claves del lenguaje es que las funciones tenían que ser de primera clase. Esto significa que se pueden tratar como si fueran cualquier otro tipo de variable, es decir, en JS podemos:
- Guardar funciones en variables, objetos o arrays
- Pasarlas como argumento de otras funciones
- Devolverlas desde otras funciones

Para declarar y ejecutar una función usaremos la siguiente sintaxis:

```javascript
// Esto permite re-definir la función
function miFuncion(param1, param2) {
  // el código va aquí
}

miFunction(param1, param2);

// Al estar declarada con const, no se puede redefinir
const miFuncionComoVariable = function() {
  // el código va aquí
};

miFuncionComoVariable();

const miOtraFuncion = function otroNombre() {
   // el código va aquí
};

miOtraFuncion();

// llamaremos métodos a funciones dentro de objetos para diferenciarlas de las funciones
const miObjeto = {
  miMetodo: function() {
    console.log('así se ha hecho siempre')
  },
  // Desde ES6 también podemos hacer esto
  miOtroMetodo() {
    console.log('Esto es reciente')
  }
};

miObjeto.miMetodo();
miObjeto.miOtroMetodo();
```

Las funciones devuelven siempre por defecto `undefined`. Para devolver un valor, usamos el operador `return`.

```javascript
const miFuncionQueNoDevuelveNada = function() {
  console.log('¡Hola hola vecinito!')
}

const miFuncionQueDevuelveCosas = function() {
  const mensaje = '¡Hola hola vecinito!';
  console.log(mensaje);
  return mensaje;
}
```

Las funciones pueden auto-ejecutarse:

```javascript
const miObjeto = (function () {
  return {
    miPropiedad: 'Esta es una propiedad'
  }
})()

```

#### Propiedades

Todas las funciones en JS tienen una serie de propiedades. A algunas de estas sólo podemos acceder dentro de las funciones y a otras podemos acceder desde fuera.

- `.name`: Devuelve el nombre de la función

```javascript
function miFuncion() {
  // el código va aquí
}

console.log(miFuncion.name) //miFuncion

// Esto es una función anónima, ya que no tiene nombre
const miNuevaFuncion = function() {
  // el código va aquí
}

console.log(miNuevaFuncion.name) //miNuevaFuncion

const miOtraFuncion = function otroNombre() {
   // el código va aquí
}
// Ojo cuidao
console.log(miOtraFuncion.name) // otroNombre
```

- `.arguments`: Dentro de una función, devuelve los argumentos con los que se ha invocado. Esta propiedad no es un array, aunque si se le parece

```javascript
const wadus = 'wadus'
const lorem = 'lorem'

const miFuncionConUnParametro = function(wadus) {
  console.log(arguments)
}

miFuncionConUnParametro(wadus, lorem)
```

#### Arrow functions

Con ES6 llegó un nuevo tipo de funciones, las arrow functions, que tienen algunas diferencias con respecto a las funciones clásicas:

```javascript
// Funcion tradicional con un parámetro
function saluda(nombre) {
  return `¡Hola ${nombre}!`;
}

// Arrow function
const saluda = nombre => `¡Hola ${nombre}!`;

// Funcion tradicional con varios parámetros
function suma(num1, num2) {
  return sum1 + sum2;
}

// Arrow function
const suma = (num1, num2) => num1 + num2

// Función tradicional que devuelve un objeto
function creaPersona(nombre, apellidos) {
  return {
    nombre,
    apellidos
  };
}

//Arrow function
const creaPersona = (nombre, apellidos) => ({ nombre, apellidos })

// Función tradicional con más de una línea
function sumaEnVariasLineas(num1, num2) {
  const suma = num1 + num2;
  return suma
}

// Arrow function
const sumaEnVariasLineas = (num1, num2) => {
  const suma = num1 + num2;
  return suma;
}
```

#### Parámetros

* Valor por defecto: Cuando declaramos los parámetros de una función, podemos definir un valor por defecto:

```javascript
function saludos(nombre = 'John Doe') {
  console.log(`Hola ${nombre}`)
}
```

* En caso de que un parámetro sea de tipo objeto, podemos acceder a sus propiedades directamente usando destructuring

```javascript
// Hay que estar muy seguro de que va a llegar un objeto como argumento
function saludosPersonales({ nombre = 'John', apellidos = 'Doe' }) {
  console.log(`Hola ${nombre} ${apellidos}`)
}

// Así prevenimos fallos, pero perdemos los valores por defecto
function saludosPersonales(person = { nombre: 'John', apellidos: 'Doe' }) {
  console.log(`Hola ${person.nombre} ${person.apellidos}`)
}
```

* Rest operator (`...nombre`): Podemos usarlo al declarar las funciones si queremos que el número de parámetros que reciba sea opcional

```javascript
function suma(n1, n2, ...rest) {
  let result = n1 + n2
  for(let i = 0; i < rest.length; i++) {
    result += rest[i]
  }
  return result
}
```

* Las funciones también pueden ser parámetros de una función:

```javascript
function palabrasEnMayusculas(str) {
	const primeraEnMayus = str[0].toUpperCase()
	const restInMayus = str.slice(1).replace(/ [a-z]/g, function(x) {
    return x.toUpperCase();
  })
	return `${primeraEnMayus}${restInMayus}`
}
```

#### Scope

El scope define a qué variables se puede acceder desde una función. Tenemos tres tipos:

- Scope Global: Todo lo que se declare fuera de una función o un bloque está en el scope global.

```javascript
const variableGlobal = 'Esta variable está en el scope global';
```

- Scope Local: Cuando sólo puedes acceder a una variable dentro de un bloque.

```javascript
if (true) {
  let variableLocal = 'Esta variable es accesible sólo dentro del bloque';
}
```

- Scope Léxico: Cuando anidamos funciones, cada función interna tiene acceso a las variables que las funciones de fuera han declarado.

```javascript
function blog() {
  const nombre = 'JS avanzado para desarrolladores';
  const version = function () {
    const versionName = 'web';
    return function () {
      return  `${nombre} ${versionName}`
    }
  }
  return version;
}

blog()()()
```

Hasta ES6, el único tipo de variables que existía era `var`, que está diseñada para usar siempre el scope global. Sin embargo, con ES6 introdujeron `let` y `const`, que tienen scope de bloque.

* Con var

```javascript
var miVariable = 'Esta variable esta en el scope global'

if (true) {
  var miVariable = 'Esta variable esta en el scope local'
  console.log(miVariable) // 'Esta variable esta en el scope local'
}

for(var i = 0; i < 3; i += 1) {
  console.log(i)
}

for(var j = 0; j < 3; j += 1) {
  setTimeout(function() {
    console.log(j);
  }, 1000)
}

console.log(i)
console.log(miVariable) // 'Esta variable esta en el scope local'
```

* Con let y const

```javascript
let miVariable = 'Esta variable esta en el scope global'

if (true) {
  let miVariable = 'Esta variable esta en el scope local'
  console.log(miVariable) // 'Esta variable esta en el scope local'
}

for(let i = 0; i < 3; i += 1) {
  console.log(i)
}

console.log(i) // Uncaught ReferenceError: i is not defined

console.log(miVariable) // 'Esta variable esta en el scope global'
```

```javascript
const nombre = 'Bart'

function imprimeNombre(n) {
    const nombre = n
    console.log(nombre)
}

imprimeNombre('Lisa')
console.log(nombre)
```

Cada función tiene su propio scope y este está disponible para todas las funciones que se aniden en ella. En el caso de que haya código no contenido en una función, este pertenece al scope global y todas las funciones que se declaren pueden acceder a este.

```javascript
let nombre = 'Bart'

function cambiaNombre(n) {
    console.log(nombre)
    nombre = n
}

cambiaNombre('Lisa')
console.log(nombre)
```

Dado que las funciones tienen un scope local, una forma de "ocultar" información es con el uso de funciones anidadas (closures)

```javascript
function creaPerro(perro) {
  const humano = 'Fran'
  return function() {
    return `¡Guau, guau! Soy ${perro} y soy un perro. Siempre te querré ${humano}.`
  }
}

const creaToby = creaPerro('Toby');
console.log(creaToby());

function creaGato(gato) {
  return function(humano) {
    return `¡Miau, miau! Soy ${gato} y soy un gato. Si me consientes, quizás te deje ser mi humano durante un rato, ${humano}.`
  }
}

const creaBruce = creaGato('Bruce');
console.log(creaBruce('Fran'))
console.log(creaBruce('Javier'))
```

Si combinamos las funciones auto ejecutadas y los closures podemos hacer cosas como las siguientes:

```javascript
const contador = (function(){
  var _contador = 0;
  return {
    anade: function() {
      _contador += 1;
    },
    resta: function() {
      _contador -= 1;
    },
    valor: function(){
      return _contador;
    }
  }
})()
contador.anade()
contador.valor()
contador.resta()
contador.valor()
```
