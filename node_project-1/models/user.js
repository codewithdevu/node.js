const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobtitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},
{timestamps: true});


const User = mongoose.model("User" , userschema);

module.exports = User ;