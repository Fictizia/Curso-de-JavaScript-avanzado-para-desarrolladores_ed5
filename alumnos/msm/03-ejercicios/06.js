//Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

function ponPrimeraMayuscula(str) {
    let palabras = str
      .split(" ")
      .map((palabra) =>
        palabra.charAt(0).toUpperCase().concat(palabra.substring(1))
      );
  
    return palabras.join(' ');
  }
  
  console.assert(
    ponPrimeraMayuscula(
      "En un lugar de la Mancha de cuyo nombre no quiero acordarme"
    ) === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme"
  );
  