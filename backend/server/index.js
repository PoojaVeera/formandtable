const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root@123",
  database: "crudappserver",
});
console.log(db, "this is db");
app.post("/formdata", (req, res) => {
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Mobile = req.body.Mobile;
  const Email = req.body.Email;

  db.query(
    "INSERT INTO details (Firstname,Lastname,Mobile,Email) VALUES('abc','jkd',8667,'ajs@mail.com')",
    [Firstname, Lastname, Mobile, Email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.listen(3001, () => {
  console.log("yay! server is running on port 3001");
});
// const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
