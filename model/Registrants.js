const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrantSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    home: {
        city: { type: String, required: true },
        state: { type: String, required: true }
    },
    phone: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Registrant', registrantSchema);