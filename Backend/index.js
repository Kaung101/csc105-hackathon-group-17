const cors = require('cors');
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connection = mysql.createConnection({
	host: "db.cshack.site",
	port: "3306",
	user: "group17",
	password: "256253256",
	database: "group17"
});

connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 5000;

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173","http://localhost:5175"], credentials: true }));

// Register endpoints
app.get("/login", require("./HelperLogin"));
app.post("/register", require("./createHelper"));
app.post("/createHome", require("./createHome"));
app.get("/get", require("./get"));
//app.get("/todo/all", require("./endpoint_get_all_todos"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});