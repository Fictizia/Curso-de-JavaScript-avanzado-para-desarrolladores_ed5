/*
Mi planteamiento:

dia 1 : (10 - 5)      5
dia 2 :  5 + (10-5)   10
dia 3 : 10 + (10-5)   15
etc...

*/

function growthOfPlant(vC, vD, desiredHeight) {
	if (vC === vD) {
		return "Así la planta nunca va a crecer";
	}
	const growth = vC - vD;
	days = 0;
	for (var i=growth; i<desiredHeight;) {
		i += growth;
		days++;
		console.log(`Día ${days} - ${i} metros`);
	}
	console.log(`Total ${days} días`);
	return days;
}

growthOfPlant(10,5,30); 


