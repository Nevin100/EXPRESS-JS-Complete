import express from "express";
const app = express();

//queryString ???:->sends query after '?/ from client to server..
app.get("/product", (req, res) => {
  res.send(`Response OK ${req.query.category}`);
});

app.listen(8000, () => {
  console.log("server - 8 - Up!!");
});
