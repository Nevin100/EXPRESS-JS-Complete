import express from "express";

const app = express();
//callback

//single -callbackfunction
app.get("/single-cb", (req, res) => {
  res.send("Single callback!!");
});

//double-callback
app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("First");
    next();
  },
  (req, res) => {
    res.send("Double-Callback");
  }
);

//array callback

const cb1 = (req, res, next) => {
  console.log("first CallBack");
  next();
};

const cb2 = (req, res, next) => {
  console.log("second CallBack");
  next();
};
const cb3 = (req, res, next) => {
  console.log("third CallBack");
  res.send("Array of callbacks...");
};

app.get("/array-cb", [cb1, cb2, cb3]);
app.listen(8000, () => {
  console.log("server-3-Up!!");
});
