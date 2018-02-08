const express = require('express');
const storeRouter = express.Router();
const Post = require('../models/post');

// think i need to move the traditional post to the id section
storeRouter.route('/')
    .post((req, res) => {
        Post.find({'user.type': 'req.body._id'}, (err, items) => {
            if (err) return res.status(500).send(err);
            res.send(items)
        })
    })


storeRouter.route('/add')
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
            console.log(req.body)
            let update = Object.assign(item, req.body);
            update.save((err, item) => {
                if(err) return res.status(500).send(err);
                res.send(item);
            })
        })
    })


module.exports = storeRouter;
