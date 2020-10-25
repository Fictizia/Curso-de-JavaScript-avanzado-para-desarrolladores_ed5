// Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen libros para 
// pasar el rato y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído. 
// Crear una propiedad interna prestamo que sea booleana que al cambiar a true almacene en otra propiedad 
// interna librosPrestados los libros que hemos leído y los quite del total de libros. Ambas propiedades 
// pertenecen al objeto estanteria.

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
        }
    },
    librosPrestados: []
}


estanteria.prestamo = true
console.log(estanteria.librosPrestados)
console.log(estanteria.libros)