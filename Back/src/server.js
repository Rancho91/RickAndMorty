const PORT = 3001;

const express = require('express');
const server = express()
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const cors = require('cors')
const morgan = require('morgan')
const { saveApiData} = require("./controllers/saveApiData/saveApiData")
const { sequelize } = require("./DB_connection")

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);
server.use("/favs", favsRouter); 

sequelize.sync( { force:true } ).then(()=>{
  saveApiData()
  console.log('DB connected')
  server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
  });
})


