"use strict";

function calculateInfectionPercentage(world) {
  const continents = world.split("X");
  let infectedPeople = 0;
  let totalPeople = 0;
  for (let continent of continents) {
    if (continent.includes("1")) {
      infectedPeople += continent.length;
    }
    totalPeople += continent.length;
  }
  if (totalPeople === 0) {
    return "0.00";
  }
  return ((infectedPeople / totalPeople) * 100).toFixed(2);
}

console.log(calculateInfectionPercentage("01X000X010X011XX"));

console.assert(calculateInfectionPercentage("0") === "0.00");
console.assert(calculateInfectionPercentage("1") === "100.00");
console.assert(calculateInfectionPercentage("10") === "100.00");
console.assert(calculateInfectionPercentage("0X1") === "50.00");
console.assert(calculateInfectionPercentage("0X11") === "66.67");
console.assert(calculateInfectionPercentage("0X10") === "66.67");
console.assert(calculateInfectionPercentage("X") === "0.00");
console.assert(calculateInfectionPercentage("XX") === "0.00");
console.assert(calculateInfectionPercentage("XX1") === "100.00");
console.assert(calculateInfectionPercentage("01000000X000X011X0X") === "73.33");
console.assert(calculateInfectionPercentage("01X000X010X011XX") === "72.73");
console.assert(calculateInfectionPercentage("X00X000000X10X0100") === "42.86");
