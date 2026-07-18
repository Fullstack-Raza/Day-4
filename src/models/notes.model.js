const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title:String,
    discription:String

})

const notemodel = mongoose.model("notes",notesSchema)
module.exports=notemodel