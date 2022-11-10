const { ObjectId } = require('mongoose').Types;
const { Thoughts } = require('../models');


module.exports = {


    postallthought(req, res) {
        Thoughts.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getallthought(req, res) {
        Thoughts.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getthoughtbyid(req, res) {
        Thoughts.findOne({ _id: req.params.id })
            .populate('reaction')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deletethought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.id })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    putthought(req, res) {
        Thoughts.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    postreaction(req, res) {
        Thoughts.findOneAndUpdate({ _id: req.params.id }, { $push: { reaction: req.body } }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deletereaction(req, res) {
        Thoughts.findOneAndUpdate({_id: req.params.id},{$pull:{reaction:{ reactionId: req.params.reactionId}}},{new: true})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
}