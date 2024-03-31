const {Schema, model} = require('mongoose');

const User = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    registeredDate: {type: Date, default: Date.now, required: true},
});

module.exports = model('User', User);
