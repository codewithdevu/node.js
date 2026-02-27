const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) { return res.status(400).json({ Error: "url is required" }) }
    shortID = nanoid(8);
    await URL.create({
        shortUrlId: shortID,
        redirectUrl: body.url,
        urlVisitHistory: [],
        createdBy: req.user?._id,

    })

    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        return res.json({ shortId: shortID });
    }

    // 👇 warna browser redirect
    return res.redirect(`/?id=${shortID}`);

    // return res.redirect(`/?id=${shortID}`);

    // return res.json({ id: shortID})
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortid;
    const result = await URL.findOne({ shortUrlId: shortId });
    return res.json({
        totalClicks: result.urlVisitHistory.length,
        analytics: result.urlVisitHistory
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleGetAnalytics,
}
