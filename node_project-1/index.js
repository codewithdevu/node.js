const express = require("express")
const {logReqRes} = require("./middlewares")
const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/user")

const app = express();
const PORT = 5000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/dev")

//middleware - plugins
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//routes
app.use("/api/users" , userRouter);


app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);

})