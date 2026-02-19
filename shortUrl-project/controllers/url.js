const {nanoid}  = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl (req , res) {
    const body = req.body;
    if(!body.url) {return res.status(400).json({Error: "url is required"})}
    shortID = nanoid(8);
    await URL.create({
        shortUrlId: shortID,
        redirectUrl : body.url,
        urlVisitHistory: [],

    })

    return res.json({ id: shortID})
}

module.exports = {
    handleGenerateShortUrl,
}
