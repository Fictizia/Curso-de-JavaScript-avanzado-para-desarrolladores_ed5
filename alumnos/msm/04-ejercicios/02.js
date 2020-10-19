'use strict';

// Ejercicio 11
// Nuestra estantería necesita las siguientes funcionalidades:
// Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
// Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
// Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes
// Un método sugerencia que te devuelva de forma aletoria un el nombre de un libro y su autor que no hayas leído.
// Implementar los métodos log y sugerencia del objeto estantería.


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
    for (const libro of estanteria.libros) {
      let { nombre, autor, leido } = libro;
      if (leido) {
        console.log(`Ya he leído ${nombre} de ${autor}`)
      } else {
        console.log(`Aún no he leído ${nombre} de ${autor}`)
      }
    }

 
  },
  sugerencia() {
    const noLeidos = this.libros.filter((libro) => !libro.leido);
    const aleatorio = Math.floor(noLeidos.length * Math.random());
    const libroAleatorio = noLeidos[aleatorio];

    return console.log(`Léete ${libroAleatorio.nombre} de ${libroAleatorio.autor}, que está muy bien`);
  }

}

estanteria.log();
estanteria.sugerencia();
