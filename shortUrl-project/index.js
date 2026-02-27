const express = require("express");
const { connectToMongoDb } = require("./connection");
const URL = require("./models/url");
const path = require("path");
const cookieParser = require("cookie-parser")
const {checkForAuthorization , restrictTo} = require("./middleware/auth")

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user")

const app = express();
const PORT = 5001;

//connect to mongo
connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => {
        console.log("mongo connected");

    })



//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(checkForAuthorization)

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//route
// remove because of discord bot restrictTo(["Normal" , "Admin"])
app.use("/url", urlRoute);
app.use("/user" , userRoute);
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
