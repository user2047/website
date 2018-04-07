const express = require("express");
const path = require("path");
const fs = require("fs");
const es6Renderer = require("express-es6-template-engine");
let html;
// fs.readFile(__dirname + "/web/html/index2.html","utf-8",function callback(err, data){
//     if (err) throw err;
//     html = data;
// });

// Init App
const app = express();
app.engine("html", es6Renderer);
app.set("views", __dirname + "/web/html");
app.set("view engine", "html");


const formatter = function(tbformed) {
  for (i=0; i < tbformed.length; i++) {
    console.log("\t" + tbformed[i]);
  }
}

const logger = function(req, res, next) {
  console.log("\n[client-request]:\n");
  formatter([req.method,req.path,req.hostname,req.ip,]);
  console.log("\n[server-response]:\n");
  next();
}


// Public Access
app.use(express.static('web'));
app.use(logger);
// Home Route

app.get("/", function(req, res) {
  res.render("index", {locals: {title: "Home", main: "This is the home page"}})
});

app.get("/about", function(req, res) {
  res.render("index", {locals: {title: "About",main: "This is the about page"}})
});

app.get("/services", function(req, res) {
  res.render("index", {locals: {title: "Services",main: "This is the services page"}})
});

app.get("/contact", function(req, res) {
  res.render("index", {locals: {title: "Contact",main: "This is the contact page"}})
});

app.get("/resume", function(req, res) {
  res.render("index", {locals: {title: "Resume",main: "This is the resume page"}})
});

app.get("/donate", function(req, res) {
  res.render("index", {locals: {title: "Donate",main: "This is the donate page"}})
});

// Start Server
app.listen(8080, function() {
  console.log("server started on port 8080");
});
