// Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X Donde los valores representan lo siguiente:
// '0': no contagiado
// '1': contagiado
// 'X': océano
// Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

// El virus no se puede propagar por el océano.
// Si una persona se contagia en un continente todas las personas se contagian en ese continente.
// Los continentes no están conectados por los extremos
// Casos de prueba:

// Input: '01000000X000X011X0X' Output: ~73.33333

// Input: '01X000X010X011XX' Output: ~72.72727272727273

// Input: 'XXXXX' Output: 0

// Input: '0000000010' Output: 100

// Input: 'X00X000000X10X0100' Output: ~42.857142857142854

function contagiadas(world) {
    let groups = world.split('X');
    let contagiados = 0;
    let totalPersonas = 0;
    let porcentaje = 0;

    for(let i = 0; i <= groups.length - 1; i++) {
        for(let j = 0; j <= groups[i].length - 1; j++) {
            if (groups[i][j] === "1") {
                contagiados += groups[i].length;
                break;
            }
        }
        totalPersonas += groups[i].length;
    }
    
    if(totalPersonas > 0) {
        porcentaje = (contagiados * 100) / totalPersonas;
    }

    return porcentaje;
}

console.info(contagiadas("01000000X000X011X0X"));
console.info(contagiadas("01X000X010X011XX"));
console.info(contagiadas("XXXXX"));
console.info(contagiadas("0000000010"));
console.info(contagiadas("X00X000000X10X0100"));