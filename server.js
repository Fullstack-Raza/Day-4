require("dotenv").config()
const app = require("./src/app.js")
const conncetToDB = require("./src/config/database.js")
conncetToDB()
app.listen(3000,()=>{
    console.log("your server is running in 3000 port");  
})