// need mongoose
// need express

const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wrath-post');
server.use(bodyParser.json())


server.use("/post", require("./routes/postHandle"));





server.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`)
})
