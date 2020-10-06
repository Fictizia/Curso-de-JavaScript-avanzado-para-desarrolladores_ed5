/**
 * 5. Cada día una planta crece en metros en base a su
 * velocidadCrecimiento. Cada noche, dicha planta decrece en
 * metros en base a su velocidadDecrecimiento debido a la falta de sol.
 * Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una
 * planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
 * velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número
 * de días que tardará la planta en medir la alturaDeseada.
 */

const daysToSeconds = (days) => days * 24 * 60 * 60;

const getDaysHoursMinutes = (days, seconds) => ({
  days: Math.floor(days),
  hours: new Date(seconds * 1000).getHours(),
  minutes: new Date(seconds * 1000).getMinutes(),
})

const growRate = (
  growthSpeed,
  decreaseSpeed,
  desiredHeight
) => {
  if (desiredHeight <= 0) return 'Es posible que hayas plantado patatas??';
  if (growthSpeed < decreaseSpeed) {
    return 'La velocidad de crecimiento no puede ser menor a la de decrecimiento';
  }
  const days = desiredHeight / (growthSpeed - decreaseSpeed);
  return getDaysHoursMinutes(days, daysToSeconds(days))
}
