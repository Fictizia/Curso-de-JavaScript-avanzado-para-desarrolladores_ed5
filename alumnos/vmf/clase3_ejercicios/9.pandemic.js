/* Vamos a emular una "posible" pandemia. El mundo se representará como un
string como el siguiente: 01000000X000X011X0X Donde los valores representan
lo siguiente:

'0': no contagiado
'1': contagiado
'X': océano
Tenemos que calcular el porcentaje de personas contagiadas en el mundo.
Para ello tenemos que tener en cuenta lo siguiente:

El virus no se puede propagar por el océano.
Si una persona se contagia en un continente todas las personas se contagian en ese continente.
Los continentes no están conectados por los extremos

Casos de prueba:
Input: '01000000X000X011X0X' Output: ~73.33333 --  8x0x3x0x = 11 contagiados x 100 / 15 ciudades
Input: '01X000X010X011XX' Output: ~72.72727272727273  
Input: 'XXXXX' Output: 0
Input: '0000000010' Output: 100 
Input: 'X00X000000X10X0100' Output: ~42.857142857142854 */

function pandemic(str) {
   const totalCities = str.split('X').join('').length; 
   const country = str.split('X');

   let infected = 0;
   for (let city of country) {
       if (city.includes('1')) {
            const find = "0" 
            city = city.replace(new RegExp(find,"g") ,"1").length; 
            infected += city;
       }
   }
   if (!str.includes('1') && !str.includes('0') ) {
   	return 0;
   }
   return infected * 100 / totalCities;
}

pandemic("01000000X000X011X0X");
