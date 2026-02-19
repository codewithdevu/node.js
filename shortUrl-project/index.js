const express = require("express");
const urlRoute = require("./routes/url")
const { connectToMongoDb } = require("./connection")
const URL = require("./models/url")

const app = express();
const PORT = 5001;

//connect to mongo
connectToMongoDb("mongodb://Localhost:27017/short-url")
    .then(() => {
        console.log("mongo connected");

    })

//middleware
app.use(express.json());

//route
app.use("/url", urlRoute)

app.get("/:shortId", async (req, res) => {
    const shortUrlId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortUrlId,
    },
        {
            $push: {
                urlVisitHistory: {
                    timestamp: Date.now()
                },
            }
        },
    );
    res.redirect(entry.redirectUrl)
});

app.listen(PORT, () => console.log(`server started at http://Localhost:${PORT}`));
