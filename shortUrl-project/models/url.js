const mongoose = require("mongoose");

const urlSchema = new mongoose.schema({
    shortUrlId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrlId: {
        type: String,
        required: true,
    },
    urlVisitHistory: [{timestamp: {type: Number}}]
}, {timestamps: true}) 

const URL = mongoose.model("url" , urlSchema); 

module.exports = URL;