import { Schema, model } from "mongoose"

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required:  true,
    },
    coverImageURl: {
        type: String,
        required: false,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
} , {timestamps: true});

const blog = model("blog" , blogSchema);

export {
    blog
}

