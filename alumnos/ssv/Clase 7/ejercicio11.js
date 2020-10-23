// 11. Crear una función que lea una frase y devuelva la palabra más larga que contenga, al menos, una mayúscula.

function palabraMasLargaConMayuscula(str) {
    const regexp = /\w*[A-Z]\w*/;
    const arr = str.split(' ').sort((a, b) => b.length-a.length);
    return regexp.exec(arr)
   
}

palabraMasLargaConMayuscula('Pedro Pablo Pérez Pereira, pobre pintor portugués, pinta preciosos paisajes por poca plata, para poder pasar por París.');

palabraMasLargaConMayuscula('Pablo Pliego y Plácido Plazola, ambos plataneros, plantan plataneras en el platanal.')