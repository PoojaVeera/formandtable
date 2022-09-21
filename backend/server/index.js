const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.listen(3001, () => {
  console.log("yay! server is running on port 3001");
});
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root@123",
  database: "details",
});

app.post("/formdata", (req, res) => {
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Mobile = req.body.mobile;
  const Email = req.body.Email;

  db.query(
    "INSERT INTO details (Firstname,Lastname,Mobile,Email) VALUES(?,?,?,?)",
    [Firstname, Lastname, Mobile, Email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
