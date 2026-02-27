const User = require("../models/user")


async function handlerGetAllUser(req, res) {
    const alldbuser = await User.find({})
    return res.json(alldbuser);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user);
}

async function hanldeUpdateUserById(req, res) {
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true });

    return res.json({ status: "updated", data: updateUser });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)

    return res.json({ status: "deleted" })
}

async function handleCreateNewUserById(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ msg: "all fields aare not filled" })
    }
    console.log(body);

    const result = await User.create({
        firstname: body.first_name,
        lastname: body.last_name,
        email: body.email,
        gender: body.gender,
        jobtitle: body.jobtitle
    })

    console.log("Result", result);


    return res.status(201).json({ msg: "success" , id: result._id });
}


module.exports = {
    handlerGetAllUser,
    handleGetUserById,
    hanldeUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUserById
}