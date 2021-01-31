/** 11.- En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:
nombre: nombre del libro
autor: nombre de quien lo ha escrito
leido: un boleano que nos indica si hemos leído o no el libro
Nuestra estantería necesita las siguientes funcionalidades:

Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes
Un método sugerencia que te devuelva de forma aletoria un el nombre de un libro y su autor que no hayas leído.
Implementar los métodos log y sugerencia del objeto estantería. */

const estanteria = {
  libros: [
    {
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
    this.libros.map(libro => {
      const {leido, nombre, autor} = libro;
      leido ? `Ya has leído ${nombre} de ${autor}` : `Aún no has leído ${nombre} de ${autor}`
  });
}, 
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => {
      return !libro.leido
    })
    const getRandomArbitrary = (min, max) => {
      return Math.random() * (max - min) + min;
    }
    const libroSugerido = librosNoLeidos[getRandomArbitrary(1, librosNoLeidos.length)];
    const {nombre, autor} = libroSugerido;
    return (`¿Por qué no te lees ${nombre} de ${autor}`)
  }
}