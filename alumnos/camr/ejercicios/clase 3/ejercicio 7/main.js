"use strict";

function ponCamelCase(str) {
  const separado = str.split(" ");
  let resultado = "";
  for (const palabra of separado) {
    resultado += `${palabra[0].toUpperCase()}${palabra.slice(1).toLowerCase()}`;
  }

  resultado = `${resultado[0].toLowerCase()}${resultado.slice(1)}`;

  return resultado;
}
console.assert(ponCamelCase("Hola a todos que tal") === "holaATodosQueTal");
