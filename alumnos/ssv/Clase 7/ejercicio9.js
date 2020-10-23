// 9. Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.

function urlValidador(str) {
const regexp = /https?:\/\/www.[A-z0-9-.]{1,}[.][A-z]{2,4}/i;
return regexp.test(str)
}
