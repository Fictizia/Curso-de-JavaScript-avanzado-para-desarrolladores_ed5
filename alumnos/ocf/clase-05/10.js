// 10. Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una lista de los productos....

const carrito = {
  productos: [{
    nombre: 'papel higiénico',
    unidades: 4,
    precio: 5
  },
  {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
  }],

  precioTotal: 0,

  calcularTotal() {
    let producto = carrito.productos;
    //let precioTotal = 0;

    for (let i = 0; i < producto.length; i++) {
      let item = producto[i];
      this.precioTotal += (item.unidades * item.precio);
    }
    return `${this.precioTotal.toFixed(2)} €`;
  }
}

carrito.calcularTotal(); // '23.00 €'
