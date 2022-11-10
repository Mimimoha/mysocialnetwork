const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/, "must have a correct email"],
        },
        Thoughts: [{ 
            type: Schema.Types.ObjectId, 
            ref:'thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref:'user'
        }]

    },

);

const User = model('user', userSchema);

module.exports = User