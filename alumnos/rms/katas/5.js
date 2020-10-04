function crecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let dias = 0;
  const metrosPorDia = velocidadCrecimiento - velocidadDecrecimiento;
  dias = alturaDeseada / metrosPorDia;
  return dias;
};
crecimiento(5, 1, 20);
