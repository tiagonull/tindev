const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
    },
    user: {
        type: String,
    },
    bio: String,
    avatar: {
        type: String,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);
