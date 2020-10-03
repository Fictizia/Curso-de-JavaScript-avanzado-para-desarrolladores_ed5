function odiar(dia, num) { // usar ternarios
    let mensaje; 
    dia = dia.toLowerCase();

    switch(dia) {
        case "lunes":
            num === 12 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "martes":
            num > 95 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "miercoles":
            num === 34 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "jueves":
            num === 0 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "viernes":
            num % 2 === 0 ?  mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "sabado":
            num === 56 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        case "domingo":
            num === 666 || num === -666 ? mensaje = "Si odio el número" : mensaje = "No odio el número";
            break;
        default:
            mensaje = "No se reconoce el día. Inténtelo con otro nombre."
    }

    return mensaje;
}

console.info(odiar("Lunes", 2)); // "No odio el número"
console.info(odiar("Lunes", 12)); // "Si odio el número"
console.info(odiar("martes", 95)); // "No odio el número"
console.info(odiar("martes", 99)); // "Si odio el número"
console.info(odiar("miercoles", 34)); // "Si odio el número"
console.info(odiar("miercoles", 38)); // "No odio el número"
console.info(odiar("jueves", 0)); // "Si odio el número"
console.info(odiar("jueves", 8)); // "No odio el número"
console.info(odiar("viernes", 35)); // "No odio el número"
console.info(odiar("viernes", 36)); // "Si odio el número"
console.info(odiar("viernes", 24)); // "Si odio el número"
console.info(odiar("sabado", 56)); // "Si odio el número"
console.info(odiar("sabado", 40)); // "No odio el número"
console.info(odiar("domingo", 666)); // "Si odio el número"
console.info(odiar("domingo", -666)); // "Si odio el número"
console.info(odiar("domingo", 66)); // "No odio el número"