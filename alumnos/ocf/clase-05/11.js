// 11. En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades... 

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
  
  infoLibro() {
    let libros = [];

    for (const libro of this.libros) {
      let {nombre, autor, leido} = libro;
      libros.push(libro);
      let frase = ` has leido ${nombre} de ${autor}`;
      console.log(leido ? `Ya ${frase}` : `Aún no ${frase}`);
    }
  },
  
  sugerencia() {
    let noLeidos = [];
    
    for (const libro of estanteria.libros) {
      const { nombre, autor, leido} = libro;
      !leido ? noLeidos.push(libro) : false;
    }
    
    const numAleatorio = Math.floor(Math.random() * noLeidos.length);
    
    return `LIBRO RECOMENDADO
    Título: ${noLeidos[numAleatorio].nombre}
    Autor: ${noLeidos[numAleatorio].autor}`;
  }
}

estanteria.infoLibro();
// 'Aún no  has leido El caballero oscuro de Frank Miller'
// 'Aún no  has leido El mundo amarillo de Albert Espinosa'
// 'Ya  has leido Harry Potter y el caliz de fuego de J.K. Rowling'
// 'Aún no  has leido El ingenioso hidalgo Don Quijote de la Mancha de Miguel de Cervantes'
// 'Ya  has leido Berserk de Kentaro Miura'
// 'Aún no  has leido Iliada de Homero'

estanteria.sugerencia();
//'LIBRO RECOMENDADO
//    Título: El caballero oscuro
//    Autor: Frank Miller'