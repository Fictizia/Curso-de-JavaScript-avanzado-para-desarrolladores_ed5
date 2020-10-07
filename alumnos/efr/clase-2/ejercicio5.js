// Cada día una planta crece en metros en base a su velocidadCrecimiento. 
// Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento 
// debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber 
// los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función 
// que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada 
// como números enteros positivos y devuelva el número de días que tardará la planta en 
// medir la alturaDeseada.


// Planteamiento 1 => Cuando hablamos de días, hablamos días y noches completas. 
// Ejemplo: si la altura deseada es 10, durante el día crece hasta 11, 
// pero por la noche decrece a 9, necesitará un día más.

const getDaysToGrow = (increaseSpeed, decreaseSpeed, desiredHeight) => {
    const generalSpeed = increaseSpeed - decreaseSpeed
    const days = Math.ceil(desiredHeight / generalSpeed)
    return days
}

getDaysToGrow(5,1,10)
getDaysToGrow(5,1,12)
getDaysToGrow(6,1,11)


// Planteamiento 2 => en el momento de que por el día llegue a la altura deseada, 
// aunque por la noche decreciera por debajo de esta, se considera que ya ha llegado a la altura óptima.


const getDaysToGrowSecondary = (increaseSpeed, decreaseSpeed, desiredHeight) => {
    let days = 0
    let height = 0
    while(height < desiredHeight) {
        days++
        height = height + increaseSpeed
        if (height < desiredHeight) {
            height = height - decreaseSpeed
        }
    }
    return days
}

getDaysToGrowSecondary(6,1,11)