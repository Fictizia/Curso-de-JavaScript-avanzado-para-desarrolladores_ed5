const http = require('../../lib/http');
jest.mock('../../lib/http');
const { getHeroes } = require('../hero-service');

describe('Hero service suite', () => {
    it('can fetch heroes successfully', async() => {
        http.get = jest.fn(async() => [{
            hero: 'Batman',
            biography: {
                'full-name': 'Bruno Díaz'
            }
        }])
        const heroes = await getHeroes('batman');
        expect(http.get).toHaveBeenCalled();
        expect(http.get).toHaveBeenCalledWith(`/search/batman`);
        expect(heroes.length).toEqual(1);
        const [batman] = heroes;
        expect(batman.hero).toEqual('Batman');
        expect(batman.biography['full-name']).toEqual('Bruno Díaz')
    });
})
