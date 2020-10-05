![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 3

- Tipos primitivos
  - number
  - string
  - object

### Tipos

#### [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number)

Dos tipos:

- Números normales que se almacenan en un formato binario de doble precisión de 64 bits siguiendo el estandar [IEEE 754](https://www.wikiwand.com/en/IEEE_754-2008_revision) (1 bit para el signo, 11 para el exponente y 52 para la mantisa). Estos son los que usamos normalmente.

- BigInt (ES2020) permite representar números enteros mayores de 2<sup>53</sup> - 1. Este es un nuevo tipo primitivo.

```javascript
const maximoNumero = 1.7976931348623157e+308 // 2^53 - 1
const minimoNumero = 5e-324 // -(2^53 - 1)

const numerajo = 1200
const mismoNumerajo = 1.2e3
const aunElMismoNumerajo = 0.12e4

const otroNumero = -56.21312
const mismoNumero = -5.621312e+4
```

Tenemos 5 alias importantes:

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308

Number.MIN_VALUE // 5e-324

Number.MAX_SAFE_INTEGER // 9007199254740991

Number.MAX_SAFE_INTEGER // -9007199254740991

// Esta es la diferenia entre 1 y el valor más pequeño mayor que uno que se puede representar como Number
Number.EPSILON  // 2.220446049250313e-16
```

Y tres símbolos especiales:

```javascript
Number.POSITIVE_INFINITY // Infinity

Number.NEGATIVE_INFINITY // -Infinity

Number.NaN // NaN
```

Hay que tener cuidado con cómo escribimos los números, hay ciertos prefijos que se usan para indicar con qué base estamos trabajando:

```javascript

const miNumeroTramposo = 0888  // Oro parece, plata no es
const miNumeroOctal = 0777 // 511 en decimal, el 0 delante significa que es octal
const miNumeroBinario = 0b01111111100000000000000000000000 // 0b indica que es binario
const miNumeroHexadecimal = 0xA // 0x indica que es Hexadecimal
```

##### Métodos:

* `.toExponential(n)` Devuelve un string con el valor numérico redondeado a n decimales en coma flotante.

``` javascript
const numerito = 77.1234;

console.log(numerito.toExponential());  // 7.71234e+1
console.log(numerito.toExponential(4)); // 7.7123e+1
console.log(numerito.toExponential(2)); // 7.71e+1
console.log(77.1234.toExponential()); // 7.71234e+1
```

* `.toFixed(n)`: Devuelve un string con el valor numérico redondeado a n decimales en punto fijo.

``` javascript
const numObj = 12345.6789;

numObj.toFixed();       //'12346' redondeo
numObj.toFixed(1);      //'12345.7'
numObj.toFixed(6);      //'12345.678900' Se añaden ceros en caso necesario
(1.23e+20).toFixed(2);  //'123000000000000000000.00'
(0).toFixed(2);         //'0.00'
2.34.toFixed(1);        //'2.3' redondeo
-2.34.toFixed(1);       //-2.3 Numeros negativos no son devueltos como cadenas.
(-2.34).toFixed(1);     //'-2.3' En caso de usar paréntesis se salta la limitación
```

* `.toLocaleString(lang)`

```javascript
const numero = 3500;
// En Local
console.log(numero.toLocaleString()); // 3.500
// En Árabe
console.log(numero.toLocaleString('ar-EG')); // ٣٬٥٠٠
// En Chino decimal
console.log(numero.toLocaleString('en-us')); // 三,五〇〇
```

* `.toPrecision(n)`: Devuelve un número con n dígitos

```javascript
const numero = 5.123456;

console.log(numero.toPrecision());    // 5.123456
console.log(numero.toPrecision(5));   // 5.1235
console.log(numero.toPrecision(2));   // 5.1
console.log(numero.toPrecision(1));   // 5
console.log((1234.5).toPrecision(2)); // 1.2e+3 (En ocasiones )
```

* `.toString(base)`: Devuelve un string con en el número en la base que indiquemos

```javascript
console.log((17).toString());     // '17'
console.log((17.2).toString());   // '17.2'
console.log((-0xff).toString(2)); // '-11111111'
console.log((4064).toString(16));  // 'fe0'
```

* `.parseInt(numero, base)`: Devuelve un número entero en una base específica (10 por defecto)

```javascript
parseInt(" 0xF", 16); // 15
parseInt(" F", 16);  // 15
parseInt("17", 8);  // 15
parseInt(021, 8);  // 15
parseInt("015", 10);  // 15
parseInt(15.99, 10);  // 15
parseInt("15,123", 10);  // 15
parseInt("FXX123", 16);  // 15
parseInt("1111", 2);  // 15
parseInt("15*3", 10);  // 15
parseInt("15e2", 10);  // 15
parseInt("15px", 10);  // 15
parseInt("12", 13);  // 15
```

* `parseFloat(numero)`: Devuelve un número decimal a partir de una cadena

```javascript
Number.parseFloat("3.14"); // 3.14
Number.parseFloat("314e-2"); // 3.14
Number.parseFloat("0.0314E+2"); // 3.14
Number.parseFloat("3.14textos..."); // 3.14
Number.parseFloat("1textos..."); //1
```

#### [Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math)

> `Math` es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.


##### Propiedades

* `E`: Constante de Euler

* `LN2`: Logaritmo natural de 2

* `LN10`: Logaritmo natural de 10

* `LOG2E`: Logaritmo de E con base 2

* `LOG10E`: Logaritmo de E con base 10

* `PI`: Número PI

* `SQRT1_2`: Raíz cuadrada de 1/2

* `SQRT2`: Raíz cuadrada de 2

```javascript
const constanteDeEulers = Math.E // ~2.718
const lnDe2 = Math.LN2 // ~0.693
const lnDe10 = Math.LN10 // ~2.303
const log2DeE = Math.LOG2E // ~1.443
const log10DeE = Math.LOG10E // ~0.434
const pi = Math.PI // ~3.14159
const sqrt1Entre2 = Math.SQRT1_2 // ~0.707
const sqrt2 = Math.SQRT2 // ~1.414
```

##### Metodos

La precisión de estos métodos depende de la implementación. Diferentes navegadores pueden dar resultados diferentes, e incluso esto puede variar dependiendo del Sistema Operativo o la arquitectura.

* `.pow(base, exp)`: Devuelve la base elevada al exponente. Equivalente al operador `**`.

```javascript
const cuatro = Math.pow(2, 2)

const dos = Math.pow(8, 1/3)
```

* `.round(n)`: Devuelve el valor de n redondeado al entero más cercano

```javascript
Math.round(20.5); // 21
Math.round(20.49); // 20
Math.round(-20.51); // -21
```

* `.floor(n)`: Devuelve la parte entera de n

```javascript
Math.floor(20.5); // 20
Math.floor(20.49); // 20
Math.floor(-20.51); // -21
```

* `.random()`: Devuelve un número pseudo-aleatorio entre 0 y 1

```javascript
// Número aleatorio entre 0 (incluido) y 1 (excluido)
Math.random();

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
Math.floor(Math.random() * (max - min)) + min;

const arrayConMuchosValores = []
const indiceRandom = Math.floor(arrayConMuchosValores.length * Math.random())

```

* `.max(n1, n2, n3, ..., nm)`: Devuelve el valor más alto de entre los m pasados

```javascript
Math.max(4, 5, 213, 56, 2) // 213
```

* `.min(n1, n2, n3, ..., nm)`: Devuelve el valor más bajo de entre los m pasados

```javascript
Math.min(4, 5, 213, 56, 2) // 2
```

* `.sqrt(num)`: Devuelve la raíz cuadrada de un número

```javascript
const cuatro = Math.sqrt(16)
```

##### Librerías

* [math.js](https://mathjs.org/)

### Ejercicios

1. Crea una función que devuelva el perímetro de un círculo a partir de su radios:

```javascript
// 2PIr
function perimetroCirculo(r) {
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)

```

2. Crea una función que devuelva el area de un círculo a partir de su radio:

```javascript
function areaCirculo(r) {
  // πr^2
}

console.assert(perimetroCirculo(2) === 12.566370614359172)
console.assert(perimetroCirculo(8) === 201.06192982974676)
```

3. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de pitagoras).

```javascript
// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
}

console.assert(hipotenusa(1, 2) === 2.23606797749979)
```

### [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)

> Un objeto que representa una serie de caracteres dentro de una cadena

Tenemos dos formas de crear strings:

- Forma tradicional: usando comillas dobles o simples. Si usamos el operador '+' podemos concatenarlos

```javascript

const miPrimeritoString = 'Hola mundo'
const miStringConComillasDobles = '¡' + miPrimeritoString + '!' // ¡Hola mundo!

const miStringConSaltosDeLinea = 'Volverán las oscuras golondrinas\n' +
'en tu balcón sus nidos a colgar, \n' +
'y otra vez con el ala a sus cristales \n' +
'jugando llamarán.'

const escapandoComillas = "Este string contiene 'comillas simples', así que lo englobo en comillas dobles".
```

- String templates: Llegó con ES6 para hacernos muy felices. Se declaran con acento grave (`). Permiten interpolar valores en cadenas de texto respetando los saltos de línea

```javascript

const pi = Math.PI
const miPrimerStringTemplate = `El número PI vale ${pi} (aprox)`

const random = Math.random()
const stringTemplateConCodigo = `El valor ${random} vale más de 0.5: ${random > 0.5 ? 'si' : 'no'}`

const stringTemplateEnVariasLineas = `
Volverán las oscuras golondrinas
en tu balcón sus nidos a colgar,
y otra vez con el ala a sus cristales
jugando llamarán.`
```

##### Propiedades

* `.length`: Devuelve la longitud de un string

```javascript
const cadena = 'Fictizia';

console.log(`Fictizia tiene ${cadena.length} caracteres.`);

console.log('Una cadena vacia tiene ' + ''.length + ' caracteres.');
```

##### Métodos

* `.charAt(posicion)`

```javascript
const cadena = 'Fictizia';
console.log(`El carácter(posición) 3 es "${cadena.charAt(3)}"`)

// También podemos acceder con [3]
console.log(`El carácter(posición) 3 es "${cadena[3]}"`)
```

* `.concat(cadena1, cadena2, ...cadenam)`: Concatena el string original con 1 o m strings

```javascript
const cadena1 = 'Yo '
const cadena2 = 'soy '
const cadena3 = 'Iron Man 🦾'

const momentoEpico = cadena1.concat(cadena2, cadena3)
console.log(momentoEpico)
```

* `.repeat(repeticiones)`: Repite tantas veces como se indique el string original

```javascript
const cerveza = '🍺';
const cuantosSomos = 16;

const canias = cerveza.repeat(cuantosSomos * 2)
console.log(canias)
```

* `.indexOf(cadena)`: Devuelve el primer índice en el que se encuentra un strinng o -1. Es case sensitive.

```javascript
'No sabes nada, Jon Nieve'.indexOf('jon') // -1

'No sabes nada, Jon Nieve'.indexOf('Jon') // 14
```

* `.lastIndexOf(cadena)`: Devuelve el último índice en el que se encuentra un strinng o -1. Es case sensitive.

```javascript
'No sabes nada, Jon Nieve'.lastIndexOf('E') // -1

'No sabes nada, Jon Nieve'.lastIndexOf('e') // 23
```

* `.includes(string)`: Devuelve si un string existe dentro de otro.

```javascript
'cuarentena'.includes('sol') // false como una catedral
```

* `.match(regex)`: Devuelve las ocurrencias de una expresión regular

```javascript
const ocurrencias = 'No sabes nada Jon Nieve'.match(/s/ig)
```

* `.replace(string, reemplazo)`: Devuelve un string en el que se sustituye el string o regexp recibido por el valor de reemplazo dado. Dicho valor puede ser un string, una función o una expresión regular.

```javascript
const miCadena = 'I love you tres mil'
const miCadenaConNúmero = miCadena.replace('tres mil', '3000') // I love you 3000
```

* `.split(separador)`: Devuelve un array con el string original separado por el string proporcionado como parámetro.

```javascript
const frutasParaComprar = '🍌, 🍊, 🍎, 🍐, 🥝'

const frutasComoArray = frutasParaComprar.split(', ') // ['🍌', '🍊', '🍎', '🍐', '🥝']
```

* `.slice(inicio, fin)`: Devuelve un segmento de un array. El atributo fin es opcional. No modifica el array original, lo copia. Acepta números negativos.

```javascript
const cadena = 'I❤️you 3000'
console.log(cadena.slice(7)); // 3000
console.log(cadena.slice(-4)); // 3000
console.log(cadena.slice(0, 6)); // I❤️you
console.log(cadena.slice(0, -5)); // I❤️you
```

También podemos usar `.substring`,  pero sólo si usamos números positivos.

* `.substr(inicio, n)`: Devuelve n caracteres de una cadena a partir del índice recibido.

```javascript
const cadena = 'I❤️you 3000'
console.log(cadena.substr(0, 6)); // I❤️you
console.log(cadena.substr(7, 4)); // 3000
```

* `.toLowerCase()`: Devuelve el string con letras minúsculas

```javascript
const hulkTimido = 'Hulk aplasta'.toLowerCase() // hulk aplasta
```

* `.toUpperCase()`: Devuelve el string con letras mayúsculas

```javascript
const hulkCabreado = 'Hulk aplasta'.toUpperCase() // HULK APLASTA
```

* `.trim()`: Devuelve el string sin espacios vacíos al principio y al final

```javascript
console.log('      Yo soy Batman     '.trim()) // Yo soy Batman
```

* `trimEnd()`: Primo hermano de trim, devuelve el string sin espacios en blanco por el final.Existe el alias `trimRight`.

```javascript
console.log('      Yo soy Batman     '.trimEnd()) //       Yo soy Batman
```


* `trimEnd()`: Primo hermano de trim, devuelve el string sin  espacios en blanco por inicio. Existe el alias `trimLeft`

```javascript
console.log('      Yo soy Batman     '.trimStart()) // Yo soy Batman
```

##### Ejercicios

4. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:

```javascript
function repeat(str, n) {
}

console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ')
```

5. Crea una función que reciba una frase como string y devuelva la palabra más larga:

```javascript
function palabraMasLarga(str) {
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")
```

6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

```javascript
function ponPrimeraMayuscula(str) {
}

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")
```

7. Crea una función que reciba un string y lo devuelva en camelCase

```javascript
function camelize(str) {
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");
```

8. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:

- acaba en 1 --> `301st`

- acaba en 2 --> `302nd`

- acaba en 3 --> `303rd`

- cualquier otra cosa --> `300th`

```javascript
function(num) {
}
```

9. Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: `01000000X000X011X0X`
Donde los valores representan lo siguiente:

- '0': no contagiado
- '1': contagiado
- 'X': océano

Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

- El virus no se puede propagar por el océano.
- Si una persona se contagia en un continente todas las personas se contagian en ese continente.
- Los continentes no están conectados por los extremos

Casos de prueba:

- Input: '01000000X000X011X0X' Output: ~73.33333

- Input: '01X000X010X011XX' Output: ~72.72727272727273

- Input: 'XXXXX' Output: 0

- Input: '0000000010' Output: 100

- Input: 'X00X000000X10X0100' Output: ~42.857142857142854

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
const heroesDc = dc: ['batman', 'superman'],

const heroes = {
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

Además, tiene una propiedad `precioTotal` donde se va actualizando automáticamente el precio del producto. Crear el código necesario para implementar este carrito.

```javascript
const carrito = {
  productos: [],
}
```

11. En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:

- `nombre`: Nombre del libro
- `autor`: Nombre de quien lo ha escrito
- `leido`: Un boleano que nos indica si hemos leído o no el libro
Nuestra estantería necesita las siguientes funcionalidades:
- Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
  - Si no lo has leído: `Aun no has leído El Quijote de Miguel de Cervantes`
  - Si lo has leído: `Ya has leído El Quijote de Miguel de Cervantes`
- Un método sugerencia que te devuelva de forma aletoria un el nombre de un libro y su autor que no hayas leído.

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
  },
  ]
}
```
