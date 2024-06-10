const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrantSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    age: { type: String },
    city: { type: String },
    state: { type: String },
    phone: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('Registrant', registrantSchema);