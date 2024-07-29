import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});

router.post("/create", (req, res) => {
  res.send("Sign-In New Student");
});

router.put("/update", (req, res) => {
  res.send("Update Student Id");
});

router.delete("/delete", (req, res) => {
  res.send("Remove student from the db");
});

export default router;

//1.Create routes folder and put your routes in a seperate file!!
//2.Create instance of express.Router()
//3.Instead of app.method change that to "router.method"
//4.Export Router
//5.Import Router
//6.Use the (app.use) built-in middleware & provide your routes.
