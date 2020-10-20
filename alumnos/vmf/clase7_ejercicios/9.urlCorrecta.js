/*9. Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.*/

function validaURL(url) {
    const urlRegex = /(^[https])\w+([:][/]{2})([w]{3}[.])/g;
    return urlRegex.test(url);
}

validaURL("https://www.google.com/");

