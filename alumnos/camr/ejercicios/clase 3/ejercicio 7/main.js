"use strict";

function ponCamelCase(str) {
  const separado = str.split(" ");
  let resultado = " ";
  for (const palabra of separado) {
    resultado = `${palabra[0].trim}${palabra[0].toLowerCase()}${palabra
      .slice(2)
      .toUpperCase()}`;
  }
  return resultado;
}
