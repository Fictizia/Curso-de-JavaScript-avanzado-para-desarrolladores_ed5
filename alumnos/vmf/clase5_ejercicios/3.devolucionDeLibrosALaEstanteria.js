/* Parece que los libros no han sido del agrado de nuestro vecino y ha decido
devolvérnoslos antes de tiempo. Modificar esta variable interna para que cuando
pase a valer false los libros leidos vuelvan a la estanteria. No hace falta mantener el orden. */

let estanteria = {
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
  librosPrestados: [],
  set prestamo(flag) {
    if (flag) {
      this.libros.forEach((libro, i) => {
        if(libro.leido) {
          let box = this.libros.splice(i, 1);
          this.librosPrestados = this.librosPrestados.concat(box);
        }
      })
      console.log(this.librosPrestados);
    } else if (this.librosPrestados.length !== 0) {
      this.libros = this.libros.concat(this.librosPrestados);
      this.librosPrestados = [];
      console.log("de vuelta!: ", this.libros);
    }
  }
}

estanteria.prestamo = true;
estanteria.prestamo = false;
