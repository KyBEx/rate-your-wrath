const express = require('express');
const storeRouter = express.Router();
const Post = require('../models/post');


storeRouter.route('/')
    .get((req, res) => {
        Post.find((err, items) => {
            if (err) return res.status(500).send(err);
            res.send(items)
        })
    })
    .post((req,res) => {
        let newItem = new Post(req.body);
        newItem.date = new Date(newItem.date);
        newItem.save((err, item) => {
            if(err) return res.status(500).send(err);
            res.status(201).send(item)
        })
    })

storeRouter.route("/:id")
    .get((req, res) => {
        Post.findById(req.params.id, (err, item) => {
            if (err) return res.status(500).send(err);
            res.send(item);
        })
    })
    .delete((req,res) => {
        Post.findByIdAndRemove(req.params.id, (err,item) => {
            if (err) return res.status(500).send(err);
            res.send({msg: "Removed item", item})
        })
    })

    .put((req,res) => {
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
            let update = Object.assign(item, req.body);
            update.save((err, item) => {
                if(err) return res.status(500).send(err);
                res.send(item);
            })
        })
    })


module.exports = storeRouter;
