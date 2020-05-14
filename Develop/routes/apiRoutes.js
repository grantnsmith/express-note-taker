var noteArray = require("../db/db.json");
var fs = require("fs");
var path = require("path");

module.exports = function(app) {

// Get route
app.get("/api/notes", function(req, res) {
    res.json(noteArray);
  });

// Post route
app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  noteArray.push(newNote)

  // Add ID property to each new note
  uniqueID(noteArray);

  // Write new JSON file with update array
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteArray), (err) => {
    if (err) {
      console.log("file not updated");
    } else {
      console.log("file updated");
    }
  })
  res.json(newNote);
  
  });

};

// Add ID to new note
var uniqueID = function(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
  }
}


  