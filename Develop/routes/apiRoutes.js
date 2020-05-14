var noteArray = require("../db/db.json");
var fs = require("fs");
var path = require("path");

module.exports = function(app) {

  
app.get("/api/notes", function(req, res) {
    res.json(noteArray);
  });

app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  noteArray.push(newNote)
  
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
  