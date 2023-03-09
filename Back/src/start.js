const express = require('express');
const server = express()
const cors = require('cors')
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");

server.use(cors());
server.use(express.json());

server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

module.exports={server}