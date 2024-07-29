import express from "express";
import path from "path";

const app = express();

//Server side files in express:-->
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});
app.listen(8000, () => {
  console.log("server - 11 - Up!!");
});
