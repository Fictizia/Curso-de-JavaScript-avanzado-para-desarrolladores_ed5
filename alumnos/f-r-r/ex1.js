// 1- Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados.
function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length ; i++) {
      for(let j = 0 ; j < nuevoArray.length - i - 1; j++){
      if (nuevoArray[j] > nuevoArray[j + 1]) {
        let temporal = nuevoArray[j];
        nuevoArray[j] = nuevoArray[j+1];
        nuevoArray[j + 1] = temporal;
      }
      }
    }
    return nuevoArray;
  }

  const x = [7,5,2,8,10,12];
  console.log(ordenar(x));
