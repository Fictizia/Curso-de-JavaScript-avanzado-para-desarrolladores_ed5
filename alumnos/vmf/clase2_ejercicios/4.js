function maxDiv(divisor, limit) {
	for (var i=limit; i>0; i--) {
		if (i%divisor === 0) {
			return i;
		}
	}
}

maxDiv(4,15);