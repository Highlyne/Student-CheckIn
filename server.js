var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App to create server
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Sets up connection to SQL Database
// =============================================================
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "queue_log"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connection is sucessful. Id: " + connection.threadId);
});

// Require routes to get and post information & HTML pages to display

app.use('public',express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    connection.query("SELECT * FROM students;", function(err, data) {
        if (err) throw err;
        console.log("test- This should be data: ", data);
        console.log(JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            var results = data[i];
            console.log(results.name);
        }
    })
    res.render("index", {students: results});
});
 
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
