function hateTheNumber(day, number) {
	switch (day)  { 
	case "lunes":
	    return number !== 12 ? "no odias" : "odias mucho, contrólate";
    break;
  	case "martes":
  		return number < 95 ? "no odias" : "odias mucho, contrólate";
    break;
  	case "miercoles":
    	return number !== 34 ? "no odias" : "odias mucho, contrólate";
    break;
    case "jueves":
		return number !== 0 ? "no aborreces" : "Aborreces mucho, contrólate";
	break;
    case "viernes":
		return number % 2 !== 0 ? "no odias" : "odias mucho, contrólate";
	break;
    case "sabado":
		return number !== 56 ? "no odias" : "odias mucho, contrólate";
	break;
    case "domingo":
		return number !== 666 && number !== -666 ? "no odias" : "odias mucho, contrólate";
	break;
  	default:
	   return "¡parece ser que hoy no sabemos que odias!" 
	}
}

hateTheNumber("domingo", 666);