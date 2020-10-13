"use strict";

const estanteria = {
  libros: [
    {
      nombre: "El caballero oscuro",
      autor: "Frank Miller",
      leido: false,
    },
    {
      nombre: "El mundo amarillo",
      autor: "Albert Espinosa",
      leido: false,
    },
    {
      nombre: "Harry Potter y el caliz de fuego",
      autor: "J.K. Rowling",
      leido: true,
    },
    {
      nombre: "El ingenioso hidalgo Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      leido: false,
    },
    {
      nombre: "Berserk",
      autor: "Kentaro Miura",
      leido: true,
    },
    {
      nombre: "Iliada",
      autor: "Homero",
      leido: false,
    },
  ],
};

const ordenarPorNombre = (a, b) => {
  if (a.length > b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  }
  return 0;
};

const estanteriaOrdenadaPorNombre = estanteria.sort(ordenarPorNombre);
console.log(estanteriaOrdenadaPorNombre);
