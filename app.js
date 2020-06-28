const express = require("express");
const path = require("path");
const fs = require("fs");
const es6Renderer = require("express-es6-template-engine");
let html;

// Init App
const app = express();
app.engine("html", es6Renderer);
app.set("views", __dirname + "/resources/html");
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
app.use(express.static('resources'));
app.use(logger);
// Home Route

app.get("/", function(req, res) {
  res.render("index", {locals: {title: "Home", main: "This is the home page",content:"This is the main content"}})
});

app.get("/about", function(req, res) {
  res.render("index", {locals: {title: "About",main: "About",content:"I am a computer science student who has a passion for linux, web development, and cryptography. I am excited about the opportunity that blockchain and cryptocurrencies can bring to our society, regardless of their usage as a payment network"}})
});

app.get("/services", function(req, res) {
  res.render("index", {locals: {title: "Services",main: "This is the services page",content:"This is the main content"}})
});

app.get("/contact", function(req, res) {
  res.render("index", {locals: {title: "Contact",main: "This is the contact page",content:"This is the main content"}})
});

app.get("/resume", function(req, res) {
  res.render("index", {locals: {title: "Resume",main: "This is the resume page",content:"This is the main content"}})
});

app.get("/donate", function(req, res) {
  res.render("index", {locals: {title: "Donate",main: "This is the donate page",content:"This is the main content"}})
});

// Start Server
app.listen(3000, function() {
  console.log("server started on port 3000");
});
