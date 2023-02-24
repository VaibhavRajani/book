var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("landing");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("SERVER CONNECTED!");
});