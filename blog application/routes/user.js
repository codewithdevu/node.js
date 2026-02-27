import {Router} from "express";
import User from "../model/user.js";

const router = Router();

router.get("/signin" , (req , res) =>{
    res.render("signin");
});

router.get("/signup" , (req , res) =>{
    res.render("signup");
});

router.post("/signin" , async (req , res) => {
    const { email , password } =  req.body;

    const user = await User.matchPassword(email , password);

    console.log("User" , user);
    return res.redirect("/")

})

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