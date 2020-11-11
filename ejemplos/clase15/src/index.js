const fizzbuzz = (num) => {
    const esMultiploDe3 = num % 3 === 0;
    const esMultiploDe5 = num % 5 === 0;
    if (esMultiploDe3 && esMultiploDe5) {
        return 'fizzbuzz';
    }
    if (esMultiploDe3) {
        return 'fizz';
    }
    if (esMultiploDe5) {
        return 'buzz';
    }
    return 'nada';
};

module.exports = fizzbuzz;
