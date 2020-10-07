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
  isRead() {
    this.libros.forEach((libro) => {
      libro.leido
        ? console.log(`Ya has leído ${libro.nombre} de ${libro.autor}`)
        : console.log(`Aun no has leído ${libro.nombre} de ${libro.autor}`)
    })
  },
  sugerencia() {
    const randomNumber = Math.floor(Math.random() * this.libros.length);
    const randomBook = this.libros.filter(libro => !libro.leido)[randomNumber];
    console.log(`Te sugiero el libro ${randomBook.nombre} de ${randomBook.autor}`)
  }
}