const { Schema, model, Types } = require('mongoose');
const formatedate = require('../utils/date')


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatedate(timestamp)
        },
        reactionBody: {
            type: String,
            required: true,
            maxlenght: 280
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: { getters: true }
    }
)


module.exports = reactionSchema