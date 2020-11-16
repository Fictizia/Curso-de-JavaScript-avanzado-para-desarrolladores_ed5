const createHeroController = require('../controller/hero-controller');

const heroController = createHeroController();

const registerHeroRoutes = (router) => {
    router.get('search/:hero', heroController.get)
    return router;
}

module.exports = registerHeroRoutes;
