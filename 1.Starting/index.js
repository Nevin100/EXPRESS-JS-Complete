import express from "express";
//create folder
//npm init -y
//npm install express
// create instance express
// providePort : 8000
//Basic Route
const app = express(); //instance

//Basic Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to home </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>This is the about section!!</h1>");
});
app.get("/no-one", (req, res) => {
  res.send("<h1>This is from the no-one route!!</h1>");
});
app.listen(8000, () => console.log("Server-Ip!!"));
