const { getHeroes } = require('../service/hero-service');

const heroController = () => ({
    get: async(req, res) => {
        const {
            hero
        } = req.params
        try {
            const {
                data: search
            } = await getHeroes(hero)
            return res.status(200).send(search);
        } catch (ex) {
            return res.status(500).send({
                message: ex.message
            })
        }
    }
})

module.exports = heroController;
