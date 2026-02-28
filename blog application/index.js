import express from "express";
import path from "path";
import userRoute from "./routes/user.js";
import blogRoute from "./routes/blog.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import { checkAuthenticationCookie } from "./middleware/authentication.js";

const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost:27017/blogify").then((e) => console.log("mongodb connected"));


app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkAuthenticationCookie("token"))

app.get("/" , (req , res) => {
    return res.render("homepage" , {
        user: req.user
    })
})

app.use("/user" , userRoute);
app.use("/blog" , blogRoute);

app.listen(PORT , () => console.log(`Server started at http://localhost:${PORT}`));