//server.js
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;
  

app.use(cors());
app.use(bodyParser.json());


 //MySQL connection
 const db = mysql.createConnection({
   host: "localhost",
   user: "root", 
   password: "Svish@12345", 
   database: "auth_app",
 });

app.listen(PORT , function(){
     console.log("App is listening on 5000");
     db.connect((err) => {
            if (err) throw err;
             console.log("Connected to MySQL database!");
           });  
   });



//out sider
app.get('/', function(req , res){
   res.send("hey there ");
}); 



// Register endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Username already exists" });
      }
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
});




// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];
   // console.log(user.password);
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
   // else res.send({ message: "Login successful", loggedIn: true });
    res.status(200).json({ message: "Login successful" });
  });
});
/*
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
*/

/*// API to fetch law queries from the JSON file
app.get("/api/law-queries", (req, res) => {
  fs.readFile("./lawQueries.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json(JSON.parse(data));
  });
}); */

// API to fetch law queries from the JSON file
app.get("/api/law-queries/search", (req, res) => {
  const searchTerm = req.query.q;
  if (!searchTerm) {
    return res.status(400).json({ message: "Please provide a search query" });
  }

  fs.readFile("./lawQueries.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }

    const lawQueries = JSON.parse(data);
    const result = lawQueries.find(entry => 
      entry.query.toLowerCase().includes(searchTerm.toLowerCase())
    );

    res.json({ solution: result ? result.solution : "No match found" });
  });
});

// API to fetch new law from the JSON file
app.get("/api/new-laws", (req, res) => {
  fs.readFile("./newlaws.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json(JSON.parse(data));
  });
}); 


// API to fetch scams from the JSON file

app.get("/api/scam-alerts", (req, res) => {
  fs.readFile("./scams.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json(JSON.parse(data));
  });
});
 
// API to fetch gov scheme from the JSON file
app.get("/api/govt-schemes", (req, res) => { 
  fs.readFile("./govscheme.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json(JSON.parse(data));
  });
}); 


app.get("/api/process", (req, res) => { 
  fs.readFile("./process.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file", error: err });
    }
    res.json(JSON.parse(data));
  });
}); 