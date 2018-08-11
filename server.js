//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up express
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//DATA
var reservations = [
    {
        name: "Test guest",
        phoneNumber: "111-111-1111",
        email: "test@gmail.com",
        id: 1
    }
];

var waitList = [
    {
        name: "Test wait",
        phoneNumber: "111-111-1111",
        email: "wait@gmail.com",
        id: 2
    }
];

//Routes
app.get("/", function(request, response){
    response.send("This is the home page");
    //response.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(request, response){
    response.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(request, response){
    response.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(request, response){
    return response.json(reservations);
});


//Start server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});