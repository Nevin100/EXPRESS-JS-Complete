import express from "express";
const app = express();

/*HTTP Method
1. GET :retrieve method
2. Post : create/insert method
3. Put : Completely Update data
4. Patch : Partially Update data
5. Delete : Delete Data
6. All : Any HTTP Request method*/

//Advance Route
//String Pattern

app.get("/ab?cd", (req, res) => {
  res.send("if the user enters (acd) or (abcd) , this will run");
});

//Regex =>
app.get(/x/, (req, res) => {
  res.send("ifthename has (x) then it will work!!! ");
});

app.listen(8000, () => {
  console.log("server - 2 - Up!!");
});
