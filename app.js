const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

server.get("/", function (req, res) {
  res.sendFile(
    "/home/oem/Documents/FbW39_Lessons/01-HTML/01-BASICS/contact.html"
  );
});

server.post("/submit", function (req, res) {
  console.log(req.body);
  let response = `<h1>Hi there</h1>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Age: ${req.body.age}</p>
      <p>Message: ${req.body.message}</p>
  `;
  console.log("Working");
  res.send(response);
});

const port = 3637;
server.listen(port);
