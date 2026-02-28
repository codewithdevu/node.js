import {Router} from "express";
import multer from "multer";
import path from "path"
import {Blog} from "../model/blog.js"

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads") );
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}` ;
    cb(null , filename);
  },
});

const upload = multer({ storage: storage });

router.get("/add-new" , (req , res) => {
    return res.render("addblog" , {
        user: req.user,
    })
})

router.post("/" , upload.single("coverImageURL") , async (req , res) => {
  const {title , body} = req.body;
  const blog = await Blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });

    return res.redirect(`/blog/${blog._id}`);
});

export default router ;