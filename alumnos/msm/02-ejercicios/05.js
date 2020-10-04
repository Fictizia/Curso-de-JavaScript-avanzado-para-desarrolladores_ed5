//Cada día una planta crece en metros en base a su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.

function getDays(growth, decreasement, finalHeight) {
  let height = 0;
  let days = 0;
  let nights = 0;

  if (growth <= decreasement || finalHeight === 0) {
    return "Your plant won't grow, darling.";
  }

  do {
    height += growth;
    days++;
    if (height < finalHeight) {
      height -= decreasement;
      nights++;
    }
  } while (height < finalHeight);

  return `Plant will take ${days} days and ${nights} nights to reach ${finalHeight} meters`;
}

console.log(getDays(2, 1, 5));
console.log(getDays(1, 0.5, 3));
console.log(getDays(5, 6, 5));
