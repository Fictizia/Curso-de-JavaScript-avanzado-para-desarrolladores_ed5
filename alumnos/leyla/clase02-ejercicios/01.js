function ordenar(lista) {
    let aux = lista;
    let nueva = [];

    while(aux.length > 0) {
        let mayor = aux[0];
        let indice = 0;
        for(let i = 0; i < aux.length; i++) {
            if (aux[i] > mayor) {
                mayor = aux[i];
                indice = i;
            }
        }
        nueva.unshift(mayor);
        aux.splice(indice, 1);
    }
    return nueva;
}

let lista = [20, 30, 5, 12];
console.info(ordenar(lista)); // [5, 12, 20, 30]