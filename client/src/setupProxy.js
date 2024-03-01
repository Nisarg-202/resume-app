const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/countries",
    createProxyMiddleware({
      target: process.env.REACT_APP_SERVER_URL,
    })
  );

  app.use(
    "/addResume",
    createProxyMiddleware({
      target: process.env.REACT_APP_SERVER_URL,
    })
  );

  app.use(
    "/getResume",
    createProxyMiddleware({
      target: process.env.REACT_APP_SERVER_URL,
    })
  );
};
