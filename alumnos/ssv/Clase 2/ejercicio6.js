const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const numbersHater = (weekDay, number) => {
  let answer;
  const userWeekDay = removeAccents(weekDay).toLowerCase();
  const conditions = [
    { day: "lunes", hate: number === 12 },
    { day: "martes", hate: number > 95 },
    { day: "miercoles", hate: number === 34 },
    { day: "jueves", hate: number === 0 },
    { day: "viernes", hate: number % 2 === 0 },
    { day: "sabado", hate: number === 56 },
    { day: "domingo", hate: number === 666 || number === -666 },
  ];
  for (const index in conditions) {
    if (conditions[index].day === userWeekDay) {
      answer = conditions[index].hate
        ? `Sí, el ${weekDay} odias el número ${number}`
        : `No, el ${weekDay} el número ${number} te parece bien`;
    }
  }
  return answer !== undefined
    ? answer
    : `El ${weekDay} no es un día de la semana válido`;
};

console.log(numbersHater("lunes", 15)); //don't hate
console.log(numbersHater("domingo", -666)); //hate
console.log(numbersHater("sábado", 17)); //don't hate
console.log(numbersHater("juernes", 17)); //undefined
