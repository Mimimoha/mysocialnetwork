const { Schema, model } = require('mongoose');
const formatedate = require('../utils/date');
const reactionSchema = require("./Reaction")
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatedate(timestamp)
        },
        username:{
            type: String,
            required: true,
        },
        reaction: [reactionSchema]

    }, { 
        toJSON: { getters: true }
    }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts