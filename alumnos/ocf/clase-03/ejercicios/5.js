// 5. Crea una función que reciba una frase como string y devuelva la palabra más larga:

const palabraMasLarga = str => {
  
  let palabras = str.split(' '); console.log(palabras);
  let laPalabraMasLarga = '';
  
  for(let palabra of palabras) {
    if (palabra.length > laPalabraMasLarga.length) {
      laPalabraMasLarga = palabra;
    }
  }
  
  return laPalabraMasLarga;
}

palabraMasLarga("Erase una vez que se era"); // 'Erase'