const express = require("express");
const cors = require('cors');

// Own
const corsOptions = require("./lib/constants/corsConstants");
const logController = require("./controllers/logController");

const app = express();
const port = 3005;

app.use(cors(corsOptions)); 

app.get("/api/logs", logController.getLogs);

app.listen(process.env.PORT || port, () =>
  console.log(`app listening on port ${port}!`)
);

module.exports = app;
