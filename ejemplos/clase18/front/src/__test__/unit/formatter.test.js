const formatter = require('../../formatter.js');

describe('hero formatter test', () => {
    it('should return a valid hero object', () => {
        const mockedIndex = 3;
        const mockedHero = {
            name: 'batman',
            biography: {
                'full-name': 'Bruno Díaz'
            },
            image: {
                url: 'wadus.inc'
            }
        };
        const result = formatter(mockedIndex, mockedHero);
        expect(result.id).toEqual(`cardItem${mockedIndex}`);
        expect(result.heroe).toEqual('batman');
        expect(result.nombre).toEqual('Bruno Díaz');
        expect(result.imagen).toEqual('wadus.inc');
    })
})
