import express from "express";
const app = express();

//Route Params:
app.get("/student/delete/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(8000, () => console.log("Server-6-Up!!"));
