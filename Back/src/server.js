const PORT = 3001;
const { saveApiData} = require("./controllers/saveApiData/saveApiData")
const {sequelize} = require("./DB_connection")
const {server} = require('./start')

sequelize.sync( { force:true } ).then(()=>{
  saveApiData()
  console.log('DB connected')
  server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
  });
})


