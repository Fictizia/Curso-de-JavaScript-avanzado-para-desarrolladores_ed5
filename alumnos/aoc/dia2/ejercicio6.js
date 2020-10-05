const hatedDayReminder = (day, number) => {
  let message;
  let notHatedMsg = "Ese número hoy no lo odio.";
  let selectedDay = day.toLowerCase();

switch(selectedDay) {
  case "lunes":
    message = number === 12 ? `Es Lunes y odio el número ${number}` : notHatedMsg;
    break;
  case "martes":
    message = number > 95 ? `Es Martes y oido el número ${number}` : notHatedMsg;
    break;
  case "miercoles":
    message = number === 34 ? `Es Miercoles y oido el número ${number}` : notHatedMsg;
    break;
  case "jueves":
    message = number === 0 ? `Es Jueves y oido el número ${number}` : notHatedMsg;
    break;
  case "viernes":
    message = number % 2 === 0 ? `Es Viernes y oido el número ${number} por ser par` : notHatedMsg;
    break;
  case "sabado":
    message = number === 56 ? `Es Sabado y oido el número ${number}` : notHatedMsg;
    break;
  default:
    message = number === 666 | -666 ? `Es Domingo y oido el número ${number}` : notHatedMsg;
  }
  return message;
}

console.log(hatedDayReminder("domingo",666));
