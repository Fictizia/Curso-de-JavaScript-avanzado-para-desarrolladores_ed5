const _miHeroe = {
    nombre: 'Batman',
    apellidos: 'Wayne',
    identidadSecreta: 'Batman',
    habilidades: ['$', 'inteligencia']
}

const _miVillano = {
    nombre: 'Selina',
    apellidos: 'Kyle',
    identidadSecreta: 'Catwoman',
    habilidades: ['agilidad', 'gran atleta']
}


export function alianza() {
    console.log('Seamos amiguis');
}
export const pelea = () => Math.random() > 0.5 ? _miHeroe : _miVillano;
export const heroe = _miHeroe;
export const villano = _miVillano;


export default {
    miHeroe: _miHeroe,
    miVillano: _miVillano
};