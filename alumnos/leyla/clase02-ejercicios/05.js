function cuantoTarda(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {

    let metros = 0;
    let dias = 0;

    if(velocidadCrecimiento < velocidadDecrecimiento) {
        return "La velocidad de Crecimiento no puede ser menor que la de Decrecimiento. Inténtelo nuevamente"
    }
    
    while(metros <= alturaDeseada) {
        metros += velocidadCrecimiento;
        dias++;
        if (metros >= alturaDeseada) { // parte agregada
            return dias;                // parte agregada
        }
        metros -= velocidadDecrecimiento; // parte agregada
    }

    return `La planta tarda en crecer ${dias} días`;
}

let planta = cuantoTarda(10, 40, 200);
console.info(planta); // La velocidad de Crecimiento no puede ser menor que la de Decrecimiento. Inténtelo nuevamente

let planta2 = cuantoTarda(80, 40, 200);
console.info(planta2) // La planta tarda en crecer 3 días