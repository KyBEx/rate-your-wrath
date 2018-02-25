const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

authRoutes.post("/signup", (req, res) => {
    console.log(typeof req.body.username.toLowerCase());
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);
        console.log(user)
        if (user) return res.status(400).send({err: "That username already exists"});
        const newUser = new User (req.body);
        console.log(newUser)
        newUser.save(err => {

            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }

            return res.status(201).send({msg: "Your account has been created. Please log in to continue", newUser})
        })
    })
})

authRoutes.post("/login", (req, res) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            console.log(req.body)
            return res.status(403).send({err: "Username or password is incorrect"})
        } else if (user) {
            user.checkPassword(req.body.password, (err, match) => {
                if (err) res.stauts(403).send(err);
                if (!match) res.status(403).send({err: "Username or password is incorrect"})
                const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
                return res.send({token, user: user.withoutPassword()})
            })
        }
    })
})


module.exports = authRoutes;
