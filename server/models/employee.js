const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, 'is invalid'],
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'is invalid'],
    },
    dob: {
        type: Date,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Employee', employeeSchema);
