![WideImg](https://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 11

- Paradigmas de programación
  - Programación orientada a objetos
  - Programación funcional

## Paradigmas de programación

Una de las características de JS es que es multi-paradigma, desde imperativo hasta orientado a objetos. El paradigma con el que trabajamos marcará nuestro estilo de programación y la estrutura del proyecto. Un paradigma de programación refleja un enfoque o una filosofía para crear las soluciones durante un periodo de tiempo. Historicamente, hemos podido observar el surgimiento y aceptación de distintos paradigmas de programación.

- Programación imperativa o procedural: La más antigua y más extendida. Se basa en dar instrucciones a los sistemas en forma de algoritmos.
- Programación orientada a objetos: Deriva de la imperativa. La principal diferencia es que en esta se abstraen conceptos de la realidad en un estructura de datos llamada objeto que contiene variables y funciones.
- Programación orientada a eventos: Se basa en la idea de que en el sistema ocurrirán ciertos eventos que este deberá manejar. El cuando ocurran dichos eventos escapa al control del programador.
- Programación funcional: En este paradigma, las funciones son ciudadanos de primer orden. En vez de centrarnos en el cómo hacemos la solución, nos centraremos en qué estamos haciendo alejándonos de controles de flujo y de mutabilidad en variables.
- Programación reactiva:  Es un paradigma de programación orientado al manejo de flujos de datos asíncronos optimizando al máximo el uso de recursos. Uno de los ejes centrales de este paradigma es el uso de publicadores y suscriptores de eventos asíncronos. La comunicación entre componentes se lleva a cabo mediante mensajes.
- Programación multiparadigma: Es el uso de dos o más paradigmas en un programa.

### Programación orientada a objetos

Como ya hemos dicho, en este paradigma llevaremos a código entidades de la realidad en forma de objetos. En este paradigma existe ciertos términos que siempre hay que tener presentes:

- Clase: Es la definición de las propiedades y métodos de un Objeto.
- Objeto: Abstracción de una entidad de la realidad que existirá en tiempo de ejecución.
- Propiedad: Característica de un objeto.
- Método: Acción que un objeto puede llevar a cabo.
- Constructor: Es un método que se ejecuta en el momento en que se crea una nueva instancia de un objeto. Sirve para inicializar las propiedades del mismo.

Además, este paradigma está marcado por ciertas características:

- Abstracción: Consiste en identificar que aspectos y comportamientos de una entidad real son importantes para nuestro sistema y usar los mecanismos de la POO para crear una abstracción que refleje los mismos.

```javascript
const carrito = {
  productos: [],
  precioTotal: 0,
  anade() { },
  elimina () { },

  // las siguientes propiedades y métodos si bien pueden reflejar la realidad, no tendrán mucha utilidad en nuestro sistema
  tieneMoneda: false,
  ninos: [],
  avanza(){ },
  meteTurbo() { },
}
```

- Encapsulamiento: Todos lo que consideremos que pertenece a una entidad, debe reflejarse en su abstracción y sólo en su abstracción. Va muy ligado con el principio de ocultación, que dice que las propiedades de los objetos sólo deben ser accesibles dentro de los mismos.

- Herencia: Es el mecanismo por el cual un objeto puede contener las propiedades y métodos de otro objeto padre. Esta relación es unilateral, es decir, el objeto hijo tendrá las propiedades y métodos de la clase padre, pero no al revés.

- Polimorfismo: Se trata de tener clases que tienen las mismas propiedades/métodos, sólo que estas no actúan de la misma forma en cada una de ellas.

Uno de los pilares de la Programación Orientada a Objetos son los llamados principios **SOLID**. Estos principios buscan que las soluciones desarrolladas siguiendo este paradigma sean robustos, mantenibles en el tiempo y legibles. La realidad es que estos principios no sólo se deben aplicar a este paradigma de programación.

- Principio de responsabilidad única: Una entidad debe tener una única responsabilidad.
- Principio de abierto/cerrado: Las entidades de softwares deben estar abiertas a extensiones pero cerradas a su modificación.
- Principio de sustitución de Liskox: Si en un sistema modificamos una clase por otra que herede de ella, la funcionalidad no debe verse comprometida.
- Principio de segregación: Es mejor hacer muchas piezas pequeñas que se comuniquen entre si que hacer una sola que contenga todo el sistema.
- Principio de Inversión de dependencias: Este principio nos dice que las dependencias que debemos tener en nuestro código deben ser con abstracciones, no con implementaciones.

### POO en JS

Si bien JavaScript se vende como un lenguaje orientado a Objetos, la realidad es que no es así. Javascript pertenece a una vertiente de este paradigma llamada Programación orientada a Prototipos. Las principales características de los prototipos son:

- Los prototipos son mutables en tiempo de ejecución.
- Es un objeto en sí mismo.
- Existe en memoria.
- Podemos acceder a él.
- Los objetos heredan propiedades de sus prototipos.

### Prototipos y clases

En JS, los objetos y todo lo que deriva de object, contienen una propiedad llamada `prototype` que es un objeto. Este objeto `prototype`, contiene los métodos y propiedades de la clase a la que pertenece.

```javascript
const array = [1,2,3,4,5]

console.log(array)
```

#### Acceso

En el caso de los objetos de JS, esta propiedad es 'privada', pero podemos acceder a ella de distintas maneras:

- `Object.getPrototypeOf`: Método de la clase Object que nos devuelve el prototipo de cualquier cosa que le pasemos

```javascript
Object.getPrototypeOf({})
Object.getPrototypeOf([]])
Object.getPrototypeOf(new Date())
```

- `__proto__`: una propiedad que tienen todas las variables en JS. Si bien es un estándar desde ES6, su uso está desaconsejado.

```javascript
const obj = {}
obj.__proto__ // Prototipo primitivo

const array = []
array.__proto__ // Prototipo de Array que contiene el prototipo de Object

const fecha = new Date()
fecha.__proto__ // Prototipo de Date que contiene el prototipo de Object
```

En el caso de las clases, podremos acceder a través de la propiedad prototype y modificarla a voluntad:

```javascript
Number.prototype.entre = function(inicio, fin) {
  return (inicio <= this) && (this <= fin);
}

for(let i = 0; i <= 5; i++) {
  console.log(i.entre(2,4))
}
```

#### Cadena de prototipos

Toda variable o función que creemos en JS tendrá un prototipo. Este prototipo almacenará los métodos y propiedades que a nosotros nos interese. Cuando intentemos acceder a un atributo o método de una variable en JS, lo primero que comprobará JS es que exista dentro de esa variable. Si no existiese, miraría en el prototipo de la variable. Si no existiese en el variable de esa variable, iría escalando por los prototipos de los que venga la variable hasta llegar a `Object` buscando la propiedad/método a la que estamos intentando acceder.


```javascript
Object.prototype.secreto = 'Esta variable pertenece al prototipo de Object'


const fecha = new Date();

console.log(fecha.secreto)
```

#### Clases

Con ES6, llegó a JS una sintaxis específica para Clases.

```javascript
class Personaje {
  constructor(nombre, nivel) {
    this.nombre = nombre
    this.nivel = nivel
  }

  saluda() {
    console.log(`Creador, ${this.nombre} te saluda.`)
  }
}

// ES5
function Personaje(nombre, nivel) {
  this.nombre = nombre
  this.nivel = nivel

  saluda() {
    console.log(`Creador, ${this.nombre} te saluda.`)
  }
}
```

Si bien esta sintaxis ayuda mucho a la hora de trabajar con clases, hay que tener en cuenta que por debajo lo que está ocurriendo es lo mismo que ocurría en ES5, es decir, se está creando un prototipo para Coche y se está trabajando con él.

Para crear instancias de las Clases que definamos, usaremos el operador `new`

```javascript
const heroe = new Personaje('Batman', 100)
```

Si quisieramos, podríamos modificar el esta clase en tiempo de ejecución usando los prototipos como previamente hemos visto:

```javascript

class Personaje {
  constructor(nombre, nivel) {
    this.nombre = nombre
    this.nivel = nivel
  }

  saluda() {
    console.log(`Creador, ${this.nombre} te saluda.`)
  }
}

Personaje.prototype.subeNivel = function() {
  this.nivel += 1;
}
```

#### Herencia

Como hemos visto antes, una de las características de la Programación orientada a Prototipos, es que permite la herencia de prototipos. Esto se lleva a caba usando la palabra reservado `extends`. Cuando definamos una clase que hereda de otra, tendremos que ser nosotros los que desde el `constructor` de la clase hija inicialicemos las propiedades de la clase padre usando la función `super()`.


```javascript
class Guerrero extends Personaje {
  constructor(nombre, nivel, arma) {
    super(nombre, nivel)
    this.arma = arma
  }
}

const guerrero = new Guerrero('Conan', 2000)
guerrero.saluda()
```

#### Getters y Setters

El uso de getters y setters está muy extendido con el de clases para preservar la privacidad de los atributos de los de los objetos.

```javascript
class Personaje {
  constructor(nombre, nivel) {
    this._nombre = nombre
    this._nivel = nivel
  }

  get nombre() {
    return this._nombre
  }

  set nombre(nombre) {
    this._nombre = nombre
  }

  get nivel() {
    return this._nivel
  }

  set nivel(nivel) {
    this._nivel = nivel
  }

  saluda() {
    console.log(`Creador, ${this.nombre} te saluda.`)
  }
}
```

#### Static

Dentro de las clases podremos usar la palabra reservada `static` para definir métodos o propiedades que tienen que ver con la clase que estamos definiendo pero no con los objetos que se van a crear a partir de ella. Si definimos un método estático, los objetos creados a partir de esta clase no tendrán acceso a esas propiedades/métodos.

```javascript
class Personaje {
  constructor(nombre, nivel) {
    this._nombre = nombre
    this._nivel = nivel
  }

  get nombre() {
    return this._nombre
  }

  set nombre(nombre) {
    this._nombre = nombre
  }

  get nivel() {
    return this._nivel
  }

  set nivel(nivel) {
    this._nivel = nivel
  }

  static compara(personaje1, personaje2) {
    console.log(this)
    return personaje1.nivel > personaje2.nivel
  }

  saluda() {
    console.log(`Creador, ${this.nombre} te saluda.`)
  }
}

const batman = new Personaje('Batman', 100)
Personaje.compara(batman, new Personaje('Superman', 20))
```

#### Ejercicio

En la clase 4, creamos un objeto estantería que contenía libros que contenía un array de libros. De cada libro teníamos su nombre, el nombre del autor y si lo habíamos leído o no. Además, la estantería nos permitía listar por consola todos los libros que contenía y nos hacía sugerencias. Implementar esta estantería de nuevo utilizando clases.

## Programación funcional

Este paradigma destaca por el uso de funciones altamente componibles en las que tanto funciones como variables son inmutables. Se trata de un enfoque con un fundamente teórico muy fuerte y muy cercano a las matemáticas. Las bases de este paradigma son:

- Todo es inmutable, incluyendo variables, funciones y estado de las aplicaciones.
- Las funciones son componibles: Igual que en POO los objetos se componen a su vez de otros objetos cada vez más simples, en funcional, son las funciones las que se componen a su vez de llamadas a otras funciones cada vez más simples. Además, estas deben ser elementos de primer nivel en el lenguaje, por que podremos tratarlas como cualquier otro tipo de variable. Las funciones que reciben como parámetros otras funciones o devuelven funciones se conocen como funciones de orden superior y son indispensables a la hora de componer.
- Transparencia referencial: Este concepto significa que `una expresión puede ser sustituida directamente por su valor sin que esto afecte a la ejecución del programa`. Esto, dicho de otra manera, significa que el resultado de una función debe depender siempre de las entradas que reciba. Va muy ligado a la ausencia de lo que se conocen como 'efectos colaterales', que es cuando la ejecución de una función produce cambios fuera de su ambito (muta variables, cambia el estado, etc...).

Algunos conceptos importantes que se manejan en este paradigma son:

- Funciones puras: Son funciones que cumplen con los siguientes requisitos:
  - Para unos mismos parámetros de entrada siempre devuelven lo mismo.
  - No tienen efectos colaterales
- Recursividad: Dado que en este paradigma no usaremos estructuras de control como while/for, la forma de iterar sobre listados de elementos será la recursividad. La recursividad es una técnica muy utilizada en informática que consiste en que para obtener la solución a un problema usamos las soluciones más pequeñas de ese mismo problema. Algunos problemas tipo que se resuelven así son el teorema de Fibonacci o el cálculo del factorial de un número. Este tipo de problemas se hacen definiendo un resultado concreto para un/unos caso/s base y haciendo que el resto hagan calculos en función de estos

```javascript
// Solución iterativa
const factorial = (n) => {
  let cont = 1
  for(let i = cont; i < n; i ++) {
    cont *= i
  }
  return total
}

// Solución recursiva
const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

const loop = (numero) => {
  return numero < 1 ? numero : loop(numero - 1)
}
```

### JS Funcional

En los últimos años, el paradigma funcional ha ido ganando cada vez más popularidad. A la par que esto ocurría, muchos lenguajes de programación que típicamente estaban orientados a otro paradigma de programación han ido dando soporte de forma nativa a este paradigma. Uno de estos casos es Javascript, que ha ido incorporando funcionalidades como las funciones de arrays o el tipo de variables `const` que permiten usar este lenguaje cómo si fuese funcional, pero sin llegar a serlo del todo.

A continuación, podemos ver una lista de elementos del lenguaje que estarían prohibidos en funcional:

- Loops
  - while
  - do...while
  - for
  - for...of
  - for...in
- Declaración de variables con var y let
- funciones que no devuelven nada
- Mutaciones en objetos
- Métodos que mutan los arrays:
  - fill
  - pop
  - push
  - reverse
  - shift
  - sort
  - splice
  - unshift
- Métodos de escritura de Set y Map

Además, hay que tener en cuenta que hay ciertos casos en los que el uso de la programación funcional tendrá que ser muy laxo:

- Manipulación del DOM
- Uso de API's de navegador
- Gestión de errores
- Comunicación HTTP

Además, hay que tener en cuenta que JS es un lenguaje de tipado débil, lo cual puede ser un problema en un paradigma donde siempre tienes que tener muy acotado que reciben y qué devuelven tus funciones. Si bien JS ha avanzado mucho en el uso del paradigma funcional, a día de hoy no es el lenguaje más utilizado para este paradigma.

```javascript
  // Imperativo
  function ponPrimeraMayuscula(str) {
    const strAsArray = str.trim().split(' ')
    let result = ''
    for(let i = 0; i < strAsArray.length; i += 1) {
      const word = strAsArray[i]
      result += `${word[0].toUpperCase()}${word.slice(1)} `
    }
    return result.trim()
  }

  // funcional
  const toUpperCase = str => str.toUpperCase()
  const capitalizar = (str) => str.replace(/^[a-z]/, toUpperCase)
  function ponPrimeraMayuscula(str) {
    const stringSinEspacios = str.trim();
    const stringComoArray = stringSinEspacios.split(' ')
    const capitalizado = stringComoArray.map(capitalizar)
    return capitalizado.join(' ')
  }
```

### Librerías

- [typescript](https://www.typescriptlang.org/)
- [lodash](https://lodash.com/)
- [ramda](https://ramdajs.com/)

### Recursos

- [Operaciones más comunes en Programación funcional](https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3)
- [La historia perdida de la programación orientada a objetos: Solo existe uno](https://www.youtube.com/watch?v=2AJ6VJ4Xstc&t=427s&ab_channel=HolaMundo)
- [Te lo explico con gatitos: Programación orientada a objetos](https://teloexplicocongatitos.com/poster/tlecg07)
- [Te lo explico con gatitos: SOLID](https://teloexplicocongatitos.com/poster/tlecg09)
- [¿Qué demonios es la programación funcional?](https://www.youtube.com/watch?v=hzy4_K25h3U) - Rodrigo de Frutos
