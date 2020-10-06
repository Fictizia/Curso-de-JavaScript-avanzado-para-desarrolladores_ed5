// 6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

const ponPrimeraMayuscula = str => {
  
  const palabras = str.split(' ');
  let resultado  = '';
  
  for (const palabra of palabras) {
    resultado += ' ' + palabra[0].toUpperCase() + palabra.slice(1);
  }
  
  return resultado.trim();
}

ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme");
// 'En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme'