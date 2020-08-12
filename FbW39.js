const express = require("express");
const bodyParser = require("body-parser");
const fbw39 = express();

fbw39.use(bodyParser.json());
fbw39.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

fbw39.get("/", function (req, res) {
    res.sendFile(
        "/home/oem/Documents/FbW39Lessons/FbW39_Lessons/01-HTML/01-BASICS/index.html"
    )
});

fbw39.get("/home", function (req, res) {
    res.sendFile(
        "/home/oem/Documents/FbW39Lessons/FbW39_Lessons/01-HTML/01-BASICS/09_html5_semantics.html"
    )
});

fbw39.get("/about", function (req, res) {
    res.sendFile(
        "/home/oem/Documents/FbW39Lessons/FbW39_Lessons/01-HTML/01-BASICS/index.html"
    )
});

fbw39.get("/entities", function (req, res) {
    res.sendFile(
        "/home/oem/Documents/FbW39Lessons/FbW39_Lessons/01-HTML/01-BASICS/08_entities.html"
    )
});

fbw39.post("/submit", function (req, res) {
    console.log(req.body);
    let response = `<h1>Welcome ${req.body.name}</h1>
    <button><a href="/">Home</a><button>
  `;
    res.send(response);
});

const port = 1990;
fbw39.listen(port);