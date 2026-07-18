const express = require("express");
const notemodel = require("./models/notes.model");
const app = express();
app.use(express.json());

app.post("/note", async (req, res) => {
  const { title, discription } = req.body;
  const note = await notemodel.create({
    title,
    discription,
  });
  res.status(201).json({
    message: "Note Created",
    note,
  });
});
app.get("/note", async(req,res)=>{
   const notes= await notemodel.find()
   res.status(200).json({
    messag:"data fetched",
    notes
   })
})
module.exports = app;
