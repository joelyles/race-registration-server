const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { value: String, required: true },
    password: { value: String, required: true }
});

module.exports = mongoose.model('User', userSchema);