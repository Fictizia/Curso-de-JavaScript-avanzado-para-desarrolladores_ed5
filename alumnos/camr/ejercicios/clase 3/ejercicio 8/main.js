"use strict";

function addOrdinalSuffix(number) {
  let tens = number % 10;
  let cents = number % 100;

  if (tens === 1 && cents !== 11) {
    return number + "st";
  }
  if (tens === 2 && cents !== 12) {
    return number + "nd";
  }
  if (tens === 3 && cents !== 13) {
    return number + "rd";
  }
  return number + "th";
}

console.assert(addOrdinalSuffix(301) === "301st");
console.assert(addOrdinalSuffix(302) === "302nd");
console.assert(addOrdinalSuffix(303) === "303rd");
console.assert(addOrdinalSuffix(300) === "300th");
console.assert(addOrdinalSuffix(311) === "311th");
console.assert(addOrdinalSuffix(312) === "312th");
console.assert(addOrdinalSuffix(313) === "313th");
