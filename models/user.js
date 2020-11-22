const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    bio: String,
    photo: {
        type: String,
        default: ''
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
