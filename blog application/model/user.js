import {Schema , model} from "mongoose"
const { createHmac , randomBytes} = await import('node:crypto');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: "/image/defaultprofile.png"
    },
    role: {
        type: String,
        enum: ["Admin" , "User"],
        default: "User",
    },
}, {timestamps: true})

userSchema.pre("save" , function (next) {
    const user = this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256" , salt).update(user.password).digest("hex");
    
    this.salt = salt;
    this.password = hashedPassword;

})

const User = model("User" , userSchema)

export default User;

