"use strict";

function ponCamelCase(str) {
  const separado = str.split(" ");
  let resultado = " ";
  for (const palabra of separado) {
    resultado = `${palabra[0].toUpperCase()}${palabra.slice(1).toLowerCase()}`;
  }
  return resultado;
}
