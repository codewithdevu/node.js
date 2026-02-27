import {Router} from "express";
import User from "../model/user.js";

const router = Router();

router.get("/signin" , (req , res) =>{
    res.render("signin");
});

router.get("/signup" , (req , res) =>{
    res.render("signup");
});

router.post("/signup" , async (req , res) => {
    console.log(req.body);
    const { fullName , email , password } =  req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    res.redirect("/")
});

export default router ;