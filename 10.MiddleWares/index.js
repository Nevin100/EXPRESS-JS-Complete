import express from "express";
import userCredentials from "./middleware/logs.js";
const app = express();

/*Middle wares : - > js function consists 3 paameters - req,res,next and used between the http request instruction.
used for authenticate a particular valid user and then proceeds the request to generate a response!*/
app.use(userCredentials);

app.get("/", (req, res) => {
  res.send("<h1>Hello mate... Thank you!!</h1>");
});

app.listen(8000, () => {
  console.log("server - 10 - Up!!");
});
