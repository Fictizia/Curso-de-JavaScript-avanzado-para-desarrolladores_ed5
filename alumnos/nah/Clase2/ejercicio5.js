/*
5- Cada día una planta crece en metros en base a su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada. 
*/

let velocidadCrecimiento = 6;
let velocidadDecrecimiento = 4;
let alturaDeseada = 10;

const checkData = () => {
  if (vUp <= vDown) {
    throw new Error(
      "The plant will never grow up until " +
        desirableHeight +
        ". So change the configuration"
    );
  }
}
const manyDaysToGrowUp = (vUp, vDown, desirableHeight) => {

  checkData(vUp, vDown, desirableHeight);
  
  let nDays = 1;

  while (desirableHeight > 0) {
    desirableHeight = desirableHeight - vUp;
    if (desirableHeight <= 0) {
      return nDays;
    } else {
      desirableHeight = desirableHeight + vDown;
      nDays++;
    }
  }
  return nDays;
};

manyDaysToGrowUp(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada);
