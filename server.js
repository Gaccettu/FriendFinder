//setting all my packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

//listening on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
