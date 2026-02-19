const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortUrlId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    urlVisitHistory: [{timestamp: {type: Number}}]
}, {timestamps: true}) 

const URL = mongoose.model("url" , urlSchema); 

module.exports = URL;