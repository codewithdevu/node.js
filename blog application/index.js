import express from "express";
import path from "path";
import userRoute from "./routes/user.js";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost:27017/blogify").then((e) => console.log("mongodb connected"));


app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended: false}));

app.get("/" , (req , res) => {
    return res.render("homepage")
})

app.use("/user" , userRoute);

app.listen(PORT , () => console.log(`Server started at http://localhost:${PORT}`));