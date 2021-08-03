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
  res.render("index", {locals: {title: "Home", main: "Home Page",content:"This is the homepage"}})
});

app.get("/about", function(req, res) {
  res.render("index", {locals: {title: "About",main: "About",content:"I am a computer science student who has a passion for linux, web development, and cryptography. I am excited about the opportunity that blockchain and cryptocurrencies can bring to our society, regardless of their usage as a payment network"}})
});

// app.get("/services", function(req, res) {
//   res.render("index", {locals: {title: "Services",main: "This is the services page",content:"This is the main content"}})
// });

app.get("/contact", function(req, res) {
	res.render("index", {locals: {title: "Contact",main: "Contact Me",content:"<h2>Phone: 860-368-8845</h2><h2>Email: cameron.senna@gmail.com</h2>"}})
});

app.get("/resume", function(req, res) {
	res.render("index", {locals: {title: "Resume",main: "Resume",content:"<a href='/download'>Download Resume</a>"}})
});

// app.get("/donate", function(req, res) {
//   res.render("index", {locals: {title: "Donate",main: "This is the donate page",content:"This is the main content"}})
// });


app.get("/roadmap", function(req, res) {
  res.render("index", {locals: {title: "Roadmap",main: "<ul><li>Switch from server Side Rendering to Client Side Rendering via ReactJS to reduce load times</li></ul>",content:"This is the main content"}})
});

app.get("/engine", function (req, res) {
	res.render("engine", {locals: {title: "engine"}})
});





app.get("/download", function(req, res) {
	res.download("resources/content/resume.pdf");
});

// Start Server
var port = 3000
app.listen(port, function() {
  console.log("server started on port $(port)");
});
