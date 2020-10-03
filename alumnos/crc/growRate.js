/**
 * 5. Cada día una planta crece en metros en base a su
 * velocidadCrecimiento. Cada noche, dicha planta decrece en
 * metros en base a su velocidadDecrecimiento debido a la falta de sol.
 * Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una
 * planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
 * velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número
 * de días que tardará la planta en medir la alturaDeseada.
 */

const growRate = (
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) => {
  if (alturaDeseada <= 0) return 'Es posible que hayas plantado patatas??';
  if (velocidadCrecimiento < velocidadDecrecimiento) {
    return 'La velocidad de crecimiento no puede ser menor a la de decrecimiento';
  }
  return alturaDeseada / (velocidadCrecimiento - velocidadDecrecimiento)
}