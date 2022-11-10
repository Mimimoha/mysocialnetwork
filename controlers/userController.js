const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');


module.exports = { 

    
    postuser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    
    getallusers( req, res) {
        User.find()
        .then(( user) => res.json(user) )
        .catch((err) => res.status(500).json(err));
    },
    getuserbyid(req, res){
        User.findOne({_id: req.params.id })
        .select('__v')
        .populate('Thoughts')
        .populate('friends')
        .then((user) => res.json(user) )
        .catch((err) => res.status(500).json(err));
    },
    deleteuser(req, res) {
        User.findOneAndDelete({ _id: req.params.id})
        .then((user) => res.json(user) )
        .catch((err) => res.status(500).json(err));

    },
    putuser(req, res) {
        User.findOneAndUpdate({_id: req.params.id},{$set:req.body}, {new: true})
        .then((user) => res.json(user) )
        .catch((err) => res.status(500).json(err));
    },
    postfriend(req,res){
        User.findOneAndUpdate({_id: req.params.id },{$push:{friends:req.params.friendId}}, {new: true} )
        .then((user) => res.json(user) )
        .catch((err) => res.status(500).json(err));
    },
    deletefriend(req,res){
        User.findOneAndUpdate({_id: req.params.id },{$pull:{friends:req.params.friendId}}, {new: true} )
        .then((user) => res.json(user) )
        .catch((err) => res.status(500).json(err));
    }
}