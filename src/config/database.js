const mongoose = require("mongoose")

function conncetToDB(){
    mongoose.connect(process.env.Mongo_URI)
.then(()=>{
    console.log("DB connecte");
    
})
}
module.exports= conncetToDB