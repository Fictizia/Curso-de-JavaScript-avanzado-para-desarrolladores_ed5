//Cada día una planta crece en metros en base a su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.

function growthResult() {
  var plantSize = 0;
  var velocidadCrecimiento = 0++;
  var alturaDeseada = 10;
  var velocidadDecrecimiento = 5;

  for (let i = 0; i < 10; i += 1) {
    if (plantSize < alturaDeseada) {
      return false;
    }
    if (plantSize > velocidadDecrecimiento) {
      return false;
    }
    if (plantSize === alturaDeseada) {
      return true;
    }
  }
}
growthResult();

//intento plantear un poco lo que pienso pero no consigo aplicar la variable de de la velocidadCrecimiento.