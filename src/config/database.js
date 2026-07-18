const mongoose = require("mongoose")

function conncetToDB(){
    mongoose.connect("mongodb+srv://muhammadrazatasneemi_db_user:5gLthqEGfJBQYt9s@cluster0.otxpkpz.mongodb.net/day-8")
.then(()=>{
    console.log("DB connecte");
    
})
}
module.exports= conncetToDB