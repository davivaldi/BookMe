
//code for handling request,loading server, and handling database operations for valid request
const express = require("express");
const app = express();
const session = require('express-session');
const path = require('path');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true
}))


require("./server/config/mongoose.config");
// app configuration view for front end code and js folder for javascript library
app.use(express.json());
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({extended: true}));

require("./server/routes/routes")(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8000, () => console.log("You are on the BookMe App"));