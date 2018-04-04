var express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3311);
console.log("Server Listening the Port No.3311");