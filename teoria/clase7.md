![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 7

- Módulos
- Regexp

### Módulos

Hasta ES6, la forma de "compartir" el código entre ficheros consistía en declarar variables globales e importar los scripts que las contenían en el orden en que necesitabas que estuvieran. Se fueron implementando librerías, unas más orientadas al servidor y otras a clientes, pero no fue hasta ES6 que ya hubo un estándar. En node, la importación de módulos es con CommonJS mientras que en browser es con el estándar.

Para que un script sea definido como módulo en HTML, hay que indicar en el atributo `type` que lo es

```html
  <script type="module" src="./index.js"></script>
```

#### Exportación

```javascript
// dc.js
const _miHeroe = {
    nombre: 'Batman',
    apellidos: 'Wayne',
    identidadSecreta: 'Batman',
    habilidades: ['💰', 'inteligencia']
}

const _miVillano = {
    nombre: 'Selina',
    apellidos: 'Kyle',
    identidadSecreta: 'Catwoman',
    habilidades: ['agilidad', 'gran atleta']
}


export function alianza() {
    console.log('Seamos amiguis');
}
export const pelea = () => Math.random() > 0.5 ? _miHeroe : _miVillano;
export const heroe = _miHeroe;
export const villano = _miVillano;


export default {
    miHeroe: _miHeroe,
    miVillano: _miVillano
};
```

También podemos usar wildcards para exportar todo el contenido de otro módulo:

```javascript
export * from 'nombre/de/otra/modulo'
```

#### Importación

Si no especificamos nada, estaremos importando el módulo contenido por defecto.

```javascript
// index.js
import dc from './dc.js';
```

También podemos acceder a elementos concretos.

```javascript
// index.js
import { pelea } from './dc.js';
```

También podemos usar wildcards para importar todo el contenido exportado de un módulo.

```javascript
// index.js
import * as dc from './dc.js';
```

Además, desde ES2020 Javascript soporta la importación dinámica de módulos... ¡Sin necesidad de webpack🎉! Además, estos módulos los podemos importar sin necesidad de declararlos como `type="module"`.

```javascript
import('./dc.js').then((dc) => {
  const { pelea } = dc
  console.log(pelea())
})
```


### Regexp

![](https://media.giphy.com/media/AXorq76Tg3Vte/giphy.gif)

![](https://media.giphy.com/media/gqf0P3jhmEJNK/giphy.gif)

Una expresión regular es un patrón de búsqueda en forma de texto. Se convierten al final en un metalenguaje de búsqueda sobre cadenas de texto. Su uso suele estar ligado a como funciona este metalenguaje.


#### Declaración

Para crear nuevas `Regexps`, podemos usar el constructor de su clase o crearla usando `//flags`. El constructor de `Regexp` admite la expresión regular persé y, ademas, puede recibir ciertos flags.

```javascript
const miRegexp = new Regexp('');

const miOtraRegexp = /expresion/i
```

Los principales flags que admite son los siguientes:

- `g`: La busqueda es global, por defecto es hasta la primera ocurrencia.
- `i`: La busqueda es case-insentive.
- `m`: La busqueda es multilinea.

#### Metodos

* `.test(string)`: Recibe un string sobre el que busca coincidencias con la expresión regular. Devuelve true o false si encuentra alguna.

```javascript
const aquamanRegex = /aquaman/gi

const heroes = ['batman', 'superman', 'flash', 'cyborg', 'Aquaman']

aquamanRegex.test(heroes.join(' '))
```

* `.exec(string)`: Busca el patrón sobre el string que recibe como parámetro. Si existe, recibe un objeto que contiene información sobre las ocurrencias.

```javascript
const aquamanRegex = /aquaman/i

const heroes = ['batman', 'superman', 'flash', 'cyborg', 'Aquaman']

aquamanRegex.exec(heroes.join(' '))
```

Si usamos el flag global (g) podemos usar exec varias veces para encontrar todas las coincidencias de una cadena. Se lleva a cabo usando la propiedad `lastIndex` de la expresión regular que estemos usando

```javascript
const aquamanRegex = /aquaman*/ig
const string = "batman, superman, flash, aquaman, cyborg, wonder woman, aquaman, flecha verde, martian manhunter";

let misResultados = aquamanRegex.exec(string)

while (misResultados !== null) {
  let msg = `Se ha encontrado ${misResultados[0]} en ${misResultados.index}. La coincidencia acaba en el indice ${aquamanRegex.lastIndex}`;
  console.log(msg);
  misResultados = aquamanRegex.exec(string)
}
```

***Importante*** Los métodos `.match`, `.search`, `.replace`, `.replaceAll` y `.split` de la clase String también admiten RegExp como parámetros.

#### Uso

* Caso más simple: string normal de toda la vida.

```javascript
const fraseMillenial = 'Por ahí por La Mancha, no me acuerdo muy bien donde, vivia un pavo un pavo con 1 buga un poco viejo';
const laManchaRegex = /La Mancha/;

laManchaRegex.test(fraseMillenial)
```

**Ejercicio**

1. Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de la Liga de la Justica. Hacomenzao a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear una función que reciba un listao de héroes como strings y devuelva la posición del array en la que está Aquaman o un -1 si no estuviera.

* Agrupando
  * `[]`: Grupo de caracteres:

```javascript
const fraseMillenial = 'Por ahí por La Mancha, no me acuerdo muy bien donde, vivia un pavo un pavo con 1 buga un poco viejo';
const numeros = /[0123456789]/ // muy enfarragoso, podemos usar [0-9]

numeros.test(faseMillenial)

const letras = /[pqrs]/ // equivalente a p-s
letras.test(fraseMillenial)
```

  * `[^]`: Grupo de caracteres negativo. En palabras mundanas: "todo lo que no esté en el grupo".

```javascript
const fraseMillenial = 'Por ahí por La Mancha, no me acuerdo muy bien donde, vivia un pavo un pavo con 1 buga un poco viejo';
const letrasNegativas = /[^a-zA-Z0-9]/

letrasNegativas.test(fraseMillenial)
```

***Ejercicio***

2. Crear una función que recibe un string y devuelva si contiene o no una vocal.
3. Crear una función que recibe un pin y diga si es válido o no. Un pin contiene 4 dígitos numéricos.
4. Crear una función que recibe un número hexadecimal y compruebe si es válido o no. Un número hexadecimal puede contener dígitos numéricos o letras de la a a la f. No debe ser sensible a mayúsculas.

* Metacaracteres:
  * `^`: Fuera de un grupo de captura, indica que es el comienzo del string.
  + `$`: Indica el final del string.
  * `\d`: Digito numérico. Equivalente a [0-9].
  * `\w`: Palabra, esto incluye caracteres alfanumericos y el _ (igual que los nombres de variables). Equivalente a [a-zA-Z0-9_]. No contempla letras con tildes ni símbolos.
  * `\W`: Cualquier cosa que no sea una palabra

```javascript
const fraseMillenial = 'Por ahí por La Mancha, no me acuerdo muy bien donde, vivia un pavo un pavo con 1 buga un poco viejo';
const letrasNegativas = /[^\w\W]/

letrasNegativas.test(fraseMillenial)
```

  * `\s`: Espacio en blanco.
  * `.`: Cualquier cosa que no sea salto de linea

```javascript
const fraseMillenial = 'Por ahí por La Mancha, no me acuerdo muy bien donde, vivia un pavo un pavo con 1 buga un poco viejo';
const cualquierCosa = /./

cualquierCosa.test(fraseMillenial)

const lista = /[.]/ // Esto hace referencia al caracter ., no al metacaracter
```

```javascript
const conMayus = (str) => str.replace(/ [a-z]/g, (char) => char.toUpperCase())
```

* Repeticiones no acotadas y opcionalidad

  * `|`: Permite hacer un OR entre dos elementos
  * `?`: Significa que algo aparece 0 o 1 vez.
  * `*`: Significa que algo se repite 0 o a saber cuantas veces.
  * `+`: Significa que algo aparece 1 o más veces.

```javascript
const fraseMillenial = 'color, casco, coche, planes.';

const pluralRegex = /[a-z]+e?s/
```

**Ejercicio**

5. Crear una función que utilice una expresión regular para identificar si el parámetro `str` que recibe es una albóndiga. Tener en cuenta que (al igual que la RAE) hay que contemplar `almóndiga`.  Debe ser case insensitive.
6. Crear una función que utilice una expresión regular para identificar si el parámetro `str` que recibe es la letra de la intro de la serie Batman de los 60. Dicha letra, de dificultad manificestat, dice lo siguiente: `Na na na na na na na na na na na na na na na na... ¡BATMAN!`. Debe ser case insensitive.

7. Crear una función que utilice una expresión regular para identificar si el parametro `str` que recibe es una dirección MAC o no. Una dirección MAC se compone de 6 pares de caracteres hexadecimales separados por `:`.

```javascript
console.assert( regexp.test('01:32:54:67:89:AB'), true );

console.assert( regexp.test('0132546789AB') , false); // sin separadores

console.assert( regexp.test('01:32:54:67:89'), false ); // 5 números, deben ser 6

console.assert( regexp.test('01:32:54:67:89:ZZ'), false ) // Las ZZ finales no son hexadecimales
```

* Repeticiones acotadas

  * `{num}`: Esto indica que algo se repite exactamente `num` veces.
  * `{min,}`: Esto indica que algo se repite mínimo `min` veces
  * `{min,max}`: Esto indica que algo se repite mínimo `num` veces

```javascript
const saludo = 'Holaaaa, ¿que pasa?';

const cuatroAlfanumericosJuntos = /\w{4}/

cuatroAlfanumericosJuntos.test(saludo)

const alMenos4Juntos = /\w{4,}/

alMenos4Juntos.test(saludo)

const entre3Y4Juntos = /\w{3,4}/

entre3Y4Juntos.test(saludo)
```

**Ejercicio**:
8. Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.

* Grupos de captura:

  * `()`: Crea un grupo de captura. Esto nos permite definir "partes" de la expresión regular con las que queremos quedarnos.

  ```javascript
    const correo = 'fran@dominio.com';

    const matches = correo.match(/^.+@([a-z.]+)/)

    const correoProveedor = 'fran@proveedor1.com, fran@proveedor2.com, fran@proveedor3.com';

    const proveedor1Y3 = correoProveedor.match(/([a-z0-9_-]*@((proveedor1)|(proveedor3)).com)/)

    const html = `<!DOCTYPE html>
      <html>
      <body>

      <h2>HTML Image</h2>
      <img src="https://media.giphy.com/media/qBvHZHgiUmWBi/giphy.gif" alt="Trulli" width="500" height="333">

      </body>
      </html>`
    const cdnUrlRegex = /<img\s?.*src="(https?://.+[.]\w{3,4})"\s?.*>/

    html.matches(cdnUrlRegex)
  ```

  * `(?)`: Crea un grupo de no-captura.
  * `(?:)`: Sirve para agrupar caracteres sin crear un grupo de captura
  * `\n`: Utiliza el valor capturaode índice n.

  ```javascript
    const numerosRepetidos = '1123456'
    const numerosRepetidosNoSeguidos = '12342'

    const numerosRepetidosRegex = /([0-9])\1/

    numerosRepetidosRegex.test(numerosRepetidos) // true
    numerosRepetidosRegex.test(numerosRepetidosNoSeguidos) // false

    const numerosRepetidosNoSeguidosRegex = /([0-9])\d+\1/
  ```

  Los grupos de captura son muy útiles cuando lo combinas con el método `replace`:

  ```javascript
  const email = 'fran@dominio.com';

  const soloNombreRegex = /(\w)+@.+/

  const alias = email.replace(soloNombreRegex, '$1');
  ```

#### Ejercicios

9. Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.

10. Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener:

- Entre 8 y 16 caracteres
- Al menos una letra minúscula
- Al menos una letra mayúscula
- Al menos un número
- Puede contener símbolos no alfanuméricos.

11. Crear una función que lea una frase y devuelva la palabra más larga que contenga, al menos, una mayúscula.

12. [HARDCORE Level] Obtener a partir del html de la página web de [Fictizia](https://www.fictizia.com/profesorado) los nombres y fotos de los profesores. Usar la función proporcionada para getProfesores para obtener el HTML de la web. El resultado debe ser un array de objetos. Cada objeto contendrá las propiedades `nombre` e `imagen`.

Nota: Ejecutar el código en la misma web de fictizia para evitar errores de CORS.


```javascript
async function getProfesores() {
    const response = await fetch('https://www.fictizia.com/profesorado');
    return response.text();
}
const profesores = await getProfesores();

// Vuestro código aquí

// Formato esperado
resultado = [{
  nombre: 'Fran Quesada',
  imagen: 'https://www.fictizia.com/app/images/fran-quesada.jpeg',
}]
```
