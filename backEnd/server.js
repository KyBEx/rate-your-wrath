// need mongoose
// need express

const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require("dotenv").config();
const expressJwt = require("express-jwt");


mongoose.connect('mongodb://localhost/wrath-post');
server.use(bodyParser.json())

server.use("/api", expressJwt({secret: process.env.SECRET}));
server.use("/api/post", require("./routes/postHandle"));
server.use("/auth", require("./routes/userAuth"));
server.use("/api/user", require("./routes/userRoutes"));





server.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`)
})
