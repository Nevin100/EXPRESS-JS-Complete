import express from "express";

const app = express();

// Post and App-Route
// Simple-damn code::::::------->>>>>

app.get("/student", (req, res) => {
  res.send("All-Students");
});

app.post("/student", (req, res) => {
  res.send("Add new student");
});

app.put("/student", (req, res) => {
  res.send("Update student");
});

app.delete("/student", (req, res) => {
  res.send("Delete student");
});

//Refactor:
//app.route()
app
  .route("/student")
  .get((req, res) => res.send("All students"))
  .post((req, res) => res.send("Add Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

app.listen(8000, () => {
  console.log("server-4-Up!!");
});
