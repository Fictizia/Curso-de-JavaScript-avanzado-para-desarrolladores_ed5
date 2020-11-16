const registerHeroRoutes = require('./hero-routes');

const registerRoutes = (router) => {
    registerHeroRoutes(router);
    return router;
}

module.exports = registerRoutes;
