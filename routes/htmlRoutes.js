const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/client/home.html"));
      });
      
      app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/tables.html"));
      });
      
      app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/reserve.html"));
      });
};