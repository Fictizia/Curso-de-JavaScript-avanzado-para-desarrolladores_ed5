'use strict';

// Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X Donde los valores representan lo siguiente:
// '0': no contagiado
// '1': contagiado
// 'X': océano
// Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

//El virus no se puede propagar por el océano.
//Si una persona se contagia en un continente todas las personas se contagian en ese continente.
// Los continentes no están conectados por los extremos

function getPercentage(str) {
    let continents = str.split('X').filter(continent => continent.length);

    let population = 0;
    let countPopulation = continents.map((continent) => population += continent.length);

    let infectedPeople = 0;

    if(population === 0) {
        return 0;
    }

    for(const continent of continents) {
        if(continent.includes('1')) {
          infectedPeople += continent.length
        }
    }
    return (infectedPeople * 100) / population;

}

console.log(getPercentage('X00X000000X10X0100'));
console.log(getPercentage('01X000X010X011XX'));
console.log(getPercentage('XXXXX'));
console.log(getPercentage('0000000010'));
console.log(getPercentage('X00X000000X10X0100'));
console.log(getPercentage('00000'));
