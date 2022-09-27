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

app.post("/create", (req, res) => {
  console.log("this is test");
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Mobile = req.body.Mobile;
  const Email = req.body.Email;
  res.send("this is send");

  db.query(
    "INSERT INTO details (Firstname,Lastname,Mobile,Email) VALUES(?,?,?,?)",
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

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM details", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//

//   const Id = req.body.Id;
//   const Firstname = req.body.Firstname;
//   db.query(
//     "UPDATE employees SET Firstname=? WHERE id=?",
//     [Firstname, Id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
app.listen(3001, () => {
  console.log("yay! server is running on port 3001");
});
// const PORT = process.env.PORT || 3001;
