// Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X 
//Donde los valores representan lo siguiente:
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

const zombiPeopleCalc = str => {
    const continents = str.split('X');  
    let mundialPob  = 0;
    let infectedPob = 0;
    for (const people of continents) {
      mundialPob += people.length;
      if (people.includes(1)) {
        infectedPob += people.length;
      }
    }
    return infectedPob === 0 ? 0 : infectedPob * 100 / mundialPob;
  }
  
 console.log(zombiPeopleCalc('01000000X000X011X0X')); // 73.33333333333333
 console.log(zombiPeopleCalc('01X000X010X011XX'));    // 72.72727272727273
 console.log(zombiPeopleCalc('XXXXX'));               // 0
 console.log(zombiPeopleCalc('0000000010'));          // 100
 console.log(zombiPeopleCalc('X00X000000X10X0100'));  // 42.857142857142854