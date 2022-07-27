const express = require("express");
const app = express();
const cors = require('cors')
const router = require("./network/routes");
const server = require("http").Server(app);

const { config } = require("./config/index");
const host = config.host;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const corsOptions = require('./middlewares/cors');
app.use(cors(corsOptions))

const Sql = require("./libs/SQL");
Sql.authConnection();

const setupModels = require('./db/models')
setupModels();

router(app);

server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`${host}:${config.port}`);
});
