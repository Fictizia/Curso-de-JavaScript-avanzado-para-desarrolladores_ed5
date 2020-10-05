const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// const numbersHater = (weekDay, number) => {
//   let answer;
//   const userWeekDay = removeAccents(weekDay).toLowerCase();
//   const conditions = [
//     { day: "lunes", hate: number === 12 },
//     { day: "martes", hate: number > 95 },
//     { day: "miercoles", hate: number === 34 },
//     { day: "jueves", hate: number === 0 },
//     { day: "viernes", hate: number % 2 === 0 },
//     { day: "sabado", hate: number === 56 },
//     { day: "domingo", hate: number === 666 || number === -666 },
//   ];
//   for (const index in conditions) {
//     if (conditions[index].day === userWeekDay) {
//       answer = conditions[index].hate
//         ? `Sí, el ${weekDay} odias el número ${number}`
//         : `No, el ${weekDay} el número ${number} te parece bien`;
//     }
//   }
//   return answer !== undefined
//     ? answer
//     : `El ${weekDay} no es un día de la semana válido`;
// };

//Versión con Switch
const numbersHater = (weekDay, number) => {
  let answer;
  const userWeekDay = removeAccents(weekDay).toLowerCase();

  const DoHate = `Sí, el ${userWeekDay} odias el número ${number}`;
  const DontHate = `No, el ${userWeekDay} el número ${number} te parece bien`;

  switch (userWeekDay) {
    case "lunes":
      answer = number === 12 ? DoHate : DontHate;
      break;
    case "martes":
      answer = number > 95 ? DoHate : DontHate;
      break;
    case "miercoles":
      answer = number === 34 ? DoHate : DontHate;
      break;
    case "jueves":
      answer = number === 0 ? DoHate : DontHate;
      break;
    case "viernes":
      answer = number % 2 === 0 ? DoHate : DontHate;
      break;
    case "sabado":
      answer = number === 56 ? DoHate : DontHate;
      break;
    case "domingo":
      answer = number === 666 || number === -666 ? DoHate : DontHate;
      break;
    default:
      answer = `El ${userWeekDay} no es un día de la semana válido`;
  }
  return answer;
};

console.log(numbersHater("lunes", 15)); //don't hate
console.log(numbersHater("domingo", -666)); //hate
console.log(numbersHater("sábado", 17)); //don't hate
console.log(numbersHater("juernes", 17)); //undefined
