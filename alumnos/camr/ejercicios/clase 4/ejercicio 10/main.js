"use strict";

const carrito = {
  productos: [
    {
      nombre: "papel higienico",
      unidades: 4,
      precio: 5,
      get precioTotal() {
        return this.unidades * this.precio;
      },
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
      get precioTotal() {
        return this.unidades * this.precio;
      },
    },
  ],

  get precioTotal() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precioTotal;
    }

    return total;
  },
};

console.log(carrito.precioTotal);

console.assert(carrito.productos[0].precioTotal === 20);
console.assert(carrito.productos[1].precioTotal === 3);
