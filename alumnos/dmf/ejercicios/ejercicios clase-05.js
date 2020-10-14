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
    prestamo: false,
    librosPrestados: [],

    prestarLibros(prestar) {
        this.prestamo = prestar;

        if (this.prestamo) {
            this.librosPrestados = this.libros.filter(libro => this.prestamo && libro.leido);
            this.libros = this.libros.filter(libro => !libro.leido);
        } else {
            this.libros = this.libros.concat(this.librosPrestados);
            this.librosPrestados = [];
        }
        return this.librosPrestados
    },

    ordenarPorTitulo() {
        this.libros = this.libros.sort((a, b) => a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()))
    }
}



