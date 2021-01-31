// En la clase 4, creamos un objeto estantería que contenía libros que contenía un array de libros.
// De cada libro teníamos su nombre, el nombre del autor y si lo habíamos leído o no.
// Además, la estantería nos permitía listar por consola todos los libros que contenía y nos hacía sugerencias.
// Implementar esta estantería de nuevo utilizando clases.

class Estanteria {
    constructor(libros) {
        this.libros = libros;
    }
    log() {
        let resultado = ''
        for (const libro of this.libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado} ${prefijo} leído ${libro.nombre} de ${libro.autor} \n`
        }
        console.log(resultado);
    }
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido)
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
        const elementoRandom = librosNoLeidos[indiceRandom]
        console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
    }
}

let libros = [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false
    },
    {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true
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
    }
];

const miEstanteria = new Estanteria(libros);
miEstanteria.log();
miEstanteria.sugerencia();