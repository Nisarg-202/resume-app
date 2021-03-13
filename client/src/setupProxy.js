const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/*',
    createProxyMiddleware({
      target: 'https://polar-atoll-36675.herokuapp.com',
    })
  );
};
