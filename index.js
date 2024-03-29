const logger = require('./src/adapters/logger');
const express = require('express');
const app = express();

require('./src/startup/middlewares')(app); //Shall be called first
require('./src/startup/unhandled-rejection-handler')();
require('./src/startup/routes')(app);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => logger.info(`Listening on port ${port}...`));

module.exports = server;