// En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:
// nombre: Nombre del libro
// autor: Nombre de quien lo ha escrito
// leido: Un boleano que nos indica si hemos leído o no el libro
// Nuestra estantería necesita las siguientes funcionalidades:

// Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
// Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
// Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes
// Un método sugerencia que te devuelva de forma aletoria un el nombre de un libro y su autor que no hayas leído.
// Implementar los métodos log y sugerencia del objeto estantería.

// Datos de prueba:

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
        for(let i = 0; i < this.libros.length; i++) {
            console.info(`${this.libros[i].nombre} - ${this.libros[i].autor}`);
            console.info( this.libros[i].leido ? `Aún no has leído ${this.libros[i].nombre}` :  `Ya has leído ${this.libros[i].nombre}`);
        }
    },
    sugerencia() {
        const aux = [];
        for(let i = 0; i < this.libros.length; i++) {
            if(!this.libros[i].leido) {
                aux.push(this.libros[i]);
            }
        }
        let random = Math.floor(aux.length * Math.random());
        console.info(`Te sugiero leer ${aux[random].nombre}`);
    }
}

estanteria.log()
estanteria.sugerencia()