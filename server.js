const express = require('express')

const server = express()

const bodyParser = require("body-parser")


server.use(
    express.static(
        "/home/oem/Documents/fbw39/JavaScript"
    ));



const port = 2020;
server.listen(port)