// Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. Modificar esta variable 
// interna para que cuando pase a valer false los libros leidos vuelvan a la estanteria. No hace falta mantener el orden.

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
    set prestamo (bool){
        if(bool){
            this.libros.forEach((libro, index)=>{
                if(libro.leido){
                    this.librosPrestados.push(libro)
                    this.libros.splice(index, 1)
                }
            })
        } else {
            this.libros = [...this.libros, ...this.librosPrestados]
            this.librosPrestados = []
        }
    },
    librosPrestados: []
}


estanteria.prestamo = false
console.log(estanteria.librosPrestados)
console.log(estanteria.libros)
