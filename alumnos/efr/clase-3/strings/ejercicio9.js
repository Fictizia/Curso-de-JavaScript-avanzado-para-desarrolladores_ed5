// Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 
// 01000000X000X011X0X Donde los valores representan lo siguiente:
// '0': no contagiado
// '1': contagiado
// 'X': océano
// Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que 
// tener en cuenta lo siguiente:

// El virus no se puede propagar por el océano.
// Si una persona se contagia en un continente todas las personas se contagian en ese continente.
// Los continentes no están conectados por los extremos

// Casos de prueba:
// Input: '01000000X000X011X0X' Output: ~73.33333
// Input: '01X000X010X011XX' Output: ~72.72727272727273
// Input: 'XXXXX' Output: 0
// Input: '0000000010' Output: 100

const getInfectedPercentage = (string) => {
    const continentsArray = string.split('X').filter(continent => continent )
    
    if (!continentsArray.length) return 0

    let totalPopulation = 0
    let totalInfected = 0

    for (let cont of continentsArray){
        if(cont.includes('1')){
            totalInfected += cont.length 
        }
        totalPopulation += cont.length 
    }

    return totalInfected*100 / totalPopulation
}

console.log(getInfectedPercentage('01000000X000X011X0X') )
console.log(getInfectedPercentage('01X000X010X011XX') )
console.log(getInfectedPercentage('XXXXX') )
console.log(getInfectedPercentage('0000000010') )
