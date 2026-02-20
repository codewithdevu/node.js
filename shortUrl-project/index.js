const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDb } = require("./connection");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 5001;

//connect to mongo
connectToMongoDb("mongodb://Localhost:27017/short-url")
    .then(() => {
        console.log("mongo connected");

    })



//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//route
app.use("/url", urlRoute);

app.use("/" , staticRoute);



app.get("/url/:shortId", async (req, res) => {
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
    res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`server started at http://Localhost:${PORT}`));
