import express from "express";
import route from "./routes/route.js";

const app = express();
app.use("/", route);
app.set("view engine", "ejs");
app.listen(8000, () => {
  console.log("server - 13 - Up!!");
});
