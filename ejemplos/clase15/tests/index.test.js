const fizzbuzz = require('../src/index')

describe('fizzbuzz', () => {
    it('should return fizz when it receives 3', () => {
        expect(fizzbuzz(3)).toEqual('fizz');
    })

    it('should returns buzz when it receives 5', () => {
        expect(fizzbuzz(5)).toEqual('buzz');
    })

    it('should returns nada when it receives 15', () => {
        expect(fizzbuzz(4)).toEqual('nada');
    })

    it('should returns fizzbuzz when it is multiplo de 3 y 5', () => {
        expect(fizzbuzz(15)).toEqual('fizzbuzz');
    });
});
