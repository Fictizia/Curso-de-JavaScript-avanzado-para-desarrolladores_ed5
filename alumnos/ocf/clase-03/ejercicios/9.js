// 9. Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X... Tenemos que calcular el porcentaje de personas contagiadas en el mundo...

const infectedPeople = str => {
  
  const continents   = str.split('X');  
  let totalPeople    = 0;
  let infectedPeople = 0;
  
  for (const person of continents) {
  
    totalPeople += person.length;
    
    if (person.includes(1)) {
      infectedPeople += person.length;
    }
  }
  return infectedPeople === 0 ? 0 : infectedPeople * 100 / totalPeople;
}

infectedPeople('01000000X000X011X0X'); // 73.33333333333333
infectedPeople('01X000X010X011XX');    // 72.72727272727273
infectedPeople('XXXXX');               // 0
infectedPeople('0000000010');          // 100
infectedPeople('X00X000000X10X0100');  // 42.857142857142854
