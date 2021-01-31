"use strict";

function palabraMasLarga(str) {
  const separado = str.split(" ");
  let palabraMasLarga = "";
  for (const palabra of separado) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  return palabraMasLarga;
}
