const express = require("express");
const app = express();
const router = require("./network/routes");
const server = require("http").Server(app);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { config } = require("./config/index");
const host = config.host;

router(app);

server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`${host}:${config.port}`);
});
