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
module.exports = app;
