const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { value: String },
    password: { value: String }
});

module.exports = mongoose.model('User', userSchema);