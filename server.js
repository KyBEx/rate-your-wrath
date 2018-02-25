// need mongoose
// need express

const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require("dotenv").config();
const expressJwt = require("express-jwt");
const path = require("path");
require("dotenv").config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wrath-post');
server.use(bodyParser.json())

server.use("/api", expressJwt({secret: process.env.SECRET || 123}));
server.use("/api/post", require("./routes/postHandle"));
server.use("/auth", require("./routes/userAuth"));
server.use("/api/user", require("./routes/userRoutes"));

server.use(express.static(path.join(__dirname, "client", "build")))




server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})
server.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`)
})
