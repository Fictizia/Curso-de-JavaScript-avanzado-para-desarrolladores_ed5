![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 2

- Javascript Fundamental

  - Chrome para desarrolladores

  - Sintaxis de JS

### Chrome para desarolladores

#### Inspector de elementos

Tenemos distintas formas de acceder a él:

- Vía menú de Chrome: `Más herramientas` > `Herramientas para desarrolladores`

- Vía menú contextual: Click derecho en cualquier lugar de la página > `Inspeccionar`

- Vía atajos de teclado:

  - MacOS: `cmd` + `alt` + `i`

  - Windows: `ctrl` + `shift` + `i`

Dentro del inspector, encontraremos las siguientes secciones:

- 📱 **Device**: Permite previsualizar el comportamiento de una web en distintas resoluciones de pantalla. Muy útil para emular el comportamiento en móviles.

- 💄 **Elements**: Permite ver cómo se comportan los sitios web cuando manipulas su contenido y estilos.

- 🏆 **Console**: Registra el contenido de logs de la web y permite interactuar con ella y con el código JS que contiene.

- 🐞 **Sources**: Permite depurar el código y conectarnos a nuestro sistema de ficheros para usar el depurador como un editor en tiempo real.

- 🕸 **Network**: Registra el detalle de cada petición y respuesta de un sitio web. Además, permite emular conexiones de red.

- 🏎 **Performance**: Permite grabar todos los eventos que ocurren durante el ciclo de vida de un sitio web.

- 🏎 **Memory**: Muy ligada a performance. Nos permite identificar memory leaks en nuestras aplicaciones.

- 🏠 **Application**: Aquí podemos consultar todos los recursos del navegador que carga un sitio web: cookies, IndexedDB, service workers, etc...

- 🤵🏼 **Lighthouse**: Nos permite realizar auditorías sobre un sitio web: Performance, SEO, Accesibilidad, PWA y Best Practices.

- ☣ **Security**: Sirve para consultar el nivel de seguridad de un sitio web: HTTPS, certificados, etc...

#### La consola

La consola es, quizás, la herramienta más (mal) utilizada para debugear código y entender qué está pasando en él. Vamos a aprender cuales son todas las alternativas que existen a la hora de usarlas. Hay que tener en cuenta que en entorno productivos hay que limitar al máximo posible el uso de logs.

```javascript
// Comprueba que si aserción es verdadera
console.assert("Legolas" > "Gimli");

// Limpia la consola
console.clear();

// Lista de forma interactiva las propiedades de un objeto
console.dir(window);

// Muestra una representación HTML del objeto
console.dirxml(document.body);

```

```javascript
const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
// Permite agrupar diferentes valores
console.group('Superhéroes de Marvel'); // O groupCollapsed
marvel.forEach(superhero => console.log(superhero));
// Indica el fin del grupo
console.groupEnd();

```

```javascript
// Establece un contador y le da un identificador. Muy útil para obtener métricas de rendimiento.
console.time("Reloj del juicio final");
setTimeout(() => {
// Para el contador y muestra el tiempo
console.timeEnd("Reloj del juicio final");
}, 2000);

```

```javascript
const heroes = [{ nombre: 'Bruce', apellidos: 'Wayne', identidad: 'Batman'}, { nombre: 'Diana', apellidos: 'prince', identidad: 'WonderWoman' }, { nombre: 'Clark', apellidos: 'Kent', identidad: 'Superman' }]

// Nos permite ver de forma muy visual el contenido de un array de objetos
console.table(heroes)

// Además permite filtrar que columnas vemos
console.table(heroes, ['identidad'])
```

La consola está orientada a funcionar por niveles de logs. Esto, bien usado, es muy útil cuando queremos monitorizar el estado de nuestro código.

```javascript

// Muestra el mensaje sólo cuando lo forzamos
console.debug("Soy tímido")

// Saca un mensaje por consola
console.log("We ❤ you console.log!");

// Lo mismo que console.log
console.info("A ti también console.info...");

//Muestra una advertencia por consola
console.warn("Hay que lavarse las manos y estornudar en el codo");

// Muestra un error por consola
console.error("Batman vs Superman");
```

No hay que olvidar que la consola, además de util, puede ser tan bonita como queramos. Además, algo que la diferencia de otras funciones de Javascript, es que admite "placeholding" de variables de forma nativa.

| Formato |   Descripción   |
|---------|-----------------|
|    %s   | Cadena de texto |
| %d / %i |     Entero      |
|    %f   |     Decimal     |
|    %o   |       DOM       |
|    %O   |    Objeto JS    |
|    %c   |       CSS       |


```javascript
const parrafos = document.getElementsByTagName("p");
console.log("DOM: %o", parrafos);

const estilos = 'background: #00b5ac; color: #FFF; font-size:18px;'

const egocentrico = { "nombre":"Yo", "Apellido":"Mismo" };

console.log("%c Objeto: %O", estilos, egocentrico);
```

#### Alert & co

```javascript
// Muestra un modal con un mensaje
alert("¡Hola a tod@s!")

// Muestra un modal que pide confirmación. Devuelve true o false
confirm("¿De verdad quieres cerrar sesión?")

// Muestra un modal que recoge la entrada del usuario como string
prompt("¿Cómo te llamas?", 0)

```

### Sintaxis de JS

#### Variables

En Javascript, las variables se declaran con `var`, `let` o `const`. Son case sensitive, es decir, las mayúsuculas son importantes.

```javascript
var variable1;
let variable2;
const variable3 = 2;

// ✅ contener letras, números, _ o $
var $jquery, _private;

// ⛔ empezar por números o contener espacios
var 50cent = 1, esto no vale = 1;

// Son case sensitive
var variable = 2, VARIABLE = 2;
// Mayoritariamente se usa camelCase, pero también se usa snake_case
var camelCase = 2, snake_case = 2;
// Se recomienda declarar una variable por línea
var camelCase = 2;
var snake_case = 3;

```

Cuando declaramos una variable con `var` o `let` podemos modificar su valor. Esto también nos permite declararlas sin darles valor.

```javascript
var miVariable;
let miOtraVariable;

miVariable = 2;
miOtraVariable = 2;

var miVariable = 42;
let miOtraVariable = miVariable;

// var nos permite acceder a una variable antes de inicializarla
console.log(miVariable); //undefined
var miVariable = 2;
console.log(miVariable); //2

// let en cambio...
console.log(miOtraVariable); //Uncaught ReferenceError: miOtraVariable is not defined
let miOtraVariable = 2;
console.log(miOtraVariable);

const estoNoDaraProblemas = 42;

// Una variable declarada con const, no puede cambiar su valor.
// Por tanto, siempre ha de ser inicializada en su declaración
const estoVaAFallar; // Uncaught SyntaxError: Missing initializer in const declaration
const estoTambienFallara = 2;
estoTambienFallara = 3; // Uncaught TypeError: Assignment to constant variable.
```

#### Tipos:

En Javascript aunque no existe un tipado extricto, las variables si tienen "tipos". El tipado en JavaScript es flexible, es decir, se infiere el tipo de las variables a partir de su valor. Además, dicho tipo puede variar. Los tipos en JavaScript son los siguientes:

- undefined
- Object
- Boolean
- Number
- String
- Function
- Symbol (ES6)

Para conocer el tipo de una variable, tenemos dos opciones:

```javascript
// como obtener el tipo de una variable
typeof variable;
// comprobar el tipo de una variable
variable instanceof Clase;

// undefined
typeof undefined;
typeof estaVariableQueNoHeInicializadoAun;

// object
typeof null;
typeof { key: 2 };
typeof [15, 4];
typeof new Date();

// boolean
typeof true;
typeof false;
typeof new Boolean(true);

// string
typeof "hola";

// function
typeof function (){};

// number
typeof 1;
typeof 1.3;
typeof NaN;
typeof Infinity;

// symbol
typeof Symbol();
typeof Symbol("mi simbolo");
```

#### Aritmética básica:

```javascript

// operador suma
const suma = 1 + 2; // 3

// operador resta
const resta = 3 - 2; // 1

// operador producto
const producto = 2 * 4; // 8

// operador division
const division = 9 / 3; // 3

// operador potencia
const potencia = 3 ** 2; // 9

// operador modulo u operador resto
const modulo = 8 % 3; // 2

```

Hay que tener en cuenta que en JavaScript, la suma no sólo se puede utilizar con números, lo cual puede llevar a situaciones [curiosas](https://github.com/denysdovhan/wtfjs)

Entre otras, podemos usar el operador suma para lo siguiente:

```javascript

const concatenarStrings = "Hola" + " " + "mundo" + "!";

// Y aunque esto puede ser util...
const sumaStringYNumero = 1 + "1"

// Pueden ocurrir cosas como esta

const banana = "b" + "a" + +"a" + "a"
```

Cabe mencionar también, que al igual que en otros lenguajes de programación, existe lo que se llama [precedencia de operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence). Esto es una guía de qué operadores tienen más prioridad (los parentesis siempre son los que más tienen) y cual es el orden a la hora de operar dentro de una misma línea.

```javascript
// Las operaciones aritmeticas van de izquierda a derecha en js.
// El operador de exponenciación es el único que va de derecha a izquierda
// Los operadores aritmeticos tienen el siguiente orden de prioridad:
// () > * > / > % > + > -
const expresion1 = (3 + 7) * 10; // 100
const expresion2 = 3 + 7 * 10; // 73
const expresion3 = 2 ** 3 ** 2; // 512

// Al igual que en las matemáticas u otros lenguajes de programación,
// el orden importa. Estos operadores son los que más prioridad tienen
let inicio = +5; // también podría ser negativo
const sumaYAsigna = ++inicio; // 6
const asignaYSuma = inicio++; // 6
const restaYAsigna = --inicio; // 5
const asignaYResta = inicio--; // 5
console.log(inicio);


let x = 1; // El operador de asignación es el que menos prioridad
let y = 2;
let z = 3;
x = y;
x += z;
x *= y;
x /= y;
x %= x;
```

#### Lógica:

```javascript
// Los operadores lógicos también siguen las normas de la precendencia de operadores.
// Casi todos van de izquierda a derecha, exceptuando el operador NOT, que va de derecha a izquierda
const masFalsoQueSalvame = !true;

// El operador AND tiene más prioridad que el operador OR
const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;

let cherto = true || true;
eCherto = false || false;
eCherto = true || false;
const noECherto = false || false;
```

Cabe destacar que, por el tipado flexible de JavaScript, se pueden producir situaciones extrañas con el operador NOT.

#### Comparación

```javascript
// Los operadores de comparación también van de izquierda a derecha
const mayorQue = 100 > 50;
const menorQue = 50 < 100;
const mayorOIgualQue = 100 >= 100;
const menorOIgualQue = 100 <= 100;
const igualOCasi = 100 == "100";
const igualYDelMismoTipo = 100 === 100;
const noIgual = 100 !== "100";

// Más ejemplos de esto:
1 == '1' // verdadero
1 === '1' // falso
false == 0 // verdadero
false === 0 // falso
'' == 0 // verdadero
'' === 0 // falso
```


#### Control de flujo

* `if / else`

```javascript
/* IF ...ELSE
  if (-algo verdadero-) {
    -ejecutaremos este código-
  } else {
    -Si lo anterior no era verdadero, se ejecutara este código-
  }; */

if (true) {
  console.log("true, por eso me ejecuto");
} else {
  console.log("false, por eso me ejecuto");
}

// Podemos poner condiciones intermedias
const miNumero = prompt("¿Qué número estoy pensando?")
if (miNumero < 5) {
  alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
  alert("vaya, miNumero se ha pasado");
} else {
  alert("¡miNumero es 5!");
}
```

* `switch`
Si bien hay quien lo considera un bad smell, la realidad es que una herramienta tan válida como cualquier otra y realmente útil para casos de uso muy concretos.

```javascript
/* switch
switch(expresión) {
  case n:
    //Código
  break;
  default:
  //Código
}
*/

let numero = prompt("¿Qué número estoy pensando?")
switch(numero) {
  case "5":
    alert("¡Número correcto!");
    break;
  case "4":
  case "6":
    alert("¡Casi aciertas!");
    break;
  default:
    alert("Frío, frío")
}
```

* `operador ternario`

```javascript
// <condición lógica> ? cuando es true ocurre esto : cuando es falsa ocurre esto
let edad = prompt("¿Cuantos años tienes?", 0)

// Aquí ocurre algo que modifica la variable edad
const mensaje = edad >= 18 ? "Perfecto, puedes pasar" : "No vayas tan rápido, fiera";

// Se pueden ejecutar múltiples expresiones. No es nada recomendable, pero poder, se puede :-)
let mensaje, edad = prompt("¿Cuantos años tienes?", 0)
edad >= 18 ? (
  mensaje = "Perfecto, puedes pasar",
  console.log(mensaje)
) : (
  mensaje = "No vayas tan rápido, fiera",
  alert(mensaje)
)
```

* `while`

```javascript
/* while
  while (<Condición>) {
    <instrucciones>
  };
*/

let edad = prompt("¿Cuantos años tienes?", 0)
while (edad <= 18) {
  alert("Eres demasiado joven lo siento");
  edad = prompt("¿Cuantos años tienes?", 0)
};
```

* `do..while`

```javascript
/* do...while
  do {
    <instrucciones>
  } while (<Condición>);
*/

let edad
do {
  edad = prompt("¿Cuantos años tienes?", 0)
  if (edad <= 18) {
    alert("Eres demasiado joven lo siento");
  }
} while (edad <= 18)
```

* `for`

```javascript

/* for
  for (<expresión inicial>; <condición>; <expresión que actualiza>) {
    <instrucciones>
  };
*/

for (let i = 0; i < 10; i += 1){
  console.log(i)
}
// a veces nos olvidamos de que también existe la resta
for (let i = 10; i > 0; i -= 1){
  console.log(i)
}

// las expresiones en for no tienen por qué ser individuales
for (let i = 10, j = 0; i > j; i -= 1){
  console.log(i, j)
}
```

* `for...in`

```javascript

/* for...in
  for (variable in objecto) {
    <instrucciones>
  };
*/

const objeto = { a: 1, b: 5, c: 10}
for (const clave in objeto){
  console.log(clave, objeto[clave])
}
```

* `for...of`

```javascript
/* for... of
  Los iterables son una incorporación de ES6.
  Son iterables los objetos que implementan el método @@iterator
  Los principales son: String, Array (y parecidos), TypedArray, Map, Set
  for (variable of iterable) {
    <instrucciones>
  };
*/

const iterable = [ 1, 5, 10]
for (const valor of iterable){
  console.log(valor)
}
```

###Enlaces de interés

- [Lenguajes dinámicos y lenguajes estáticos](https://charlascylon.com/2017-05-10-dynamic-vs-static)
- [wtfjs](https://github.com/denysdovhan/wtfjs)
- [The secret life of javascript primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

### Ejercicios

1. Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados.

Como hablamos en clase, este problema es uno de los más complejos de la informática. En [este](https://itnext.io/sorting-algorithms-in-javascript-4c3b7b80e88d) enlace podéis ver diferentes acercamientos para solucionarlo de forma gráfica junto con el código.

```javascript
// Lo que nos gustaría
function ordenar(arr) {
  return [...arr].sort()
}


// Ya que alguien hizo spoiler del Bubble, aquí lo tenéis
function ordenar(arr) {
  const nuevoArray = [...arr]
  for (let i = 0; i < nuevoArray.length ; i++) {
    for(let j = 0 ; j < nuevoArray.length - i - 1; j++){
    if (nuevoArray[j] > nuevoArray[j + 1]) {
      let temporal = nuevoArray[j];
      nuevoArray[j] = nuevoArray[j+1];
      nuevoArray[j + 1] = temporal;
    }
    }
  }
  return nuevoArray;
}
```

2. Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.

```javascript
function esPar (numero) {
  return numero % 2 === 0;
}
```

3. Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

```javascript

function calculadora(num1, num2, operador) {
  const operadorMinuscula = operador.toLowerCase();
  switch(operadorMinuscula) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "multiplicación":
    case "multiplicacion":
      return num1 * num2;
    case "division":
    case "división":
      return num1 / num2;
    default:
      console.log("La has liao parda");
  }
}
```

4. Crear una función que reciba un `divisor` y un `limite` y devuelva el mayor número divisible por `divisor` menor que `limite`. Ambos valores serán siempre enteros positivos.

```javascript
// Cómo lo haría yo
function maximoDivisible (divisor, limite) {
  for(let i = limite - 1;  i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// La solución más óptima
function maximoDivisible (divisor, limite) {
  return limite - (limite % divisor);
}
```

5. Cada día una planta crece en metros según su `velocidadCrecimiento`. Cada noche, dicha planta decrece en metros en base a su `velocidadDecrecimiento` debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta `alturaDeseada`. Crear una función que reciba `velocidadCrecimiento`, `velocidadDecrecimiento` y `alturaDeseada` como números enteros positivos y devuelva el número de días que tardará la planta en medir la `alturaDeseada`.

```javascript
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) { return dias }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

```

6. Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

- Los lunes odio el 12.
- Los martes odio los números mayores de 95.
- Los miércoles odio el 34.
- Aborrezco el 0 en jueves.
- En viernes odio los números pares.
- Ni me hables del 56 en sábado.
- El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no

```javascript

function aquiHayOdio(dia, numero) {
  const diaMinus = dia.toLowerCase();
  switch(diaMinus) {
    case 'lunes':
      return numero === 12;
    case 'martes':
      return numero >=85
    case 'miercoles':
    case 'miércoles':
      return numero  === 34;
    case 'jueves':
      return numero === 0;
    case 'viernes':
      return numero % 2 === 0;
    case 'sábado':
    case 'sabado':
      return numero === 56;
    case 'domingo':
      return numero === 666 || numero === -666;
  }
}

```
