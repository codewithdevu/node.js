const express = require("express");
const { model } = require("mongoose");
const {handlerGetAllUser , handleGetUserById, hanldeUpdateUserById , handleDeleteUserById , handleCreateNewUserById} = require("../controllers/user")
const router = express.Router();


// REST API
router.route("/").get(handlerGetAllUser).post(handleCreateNewUserById)

router.route("/:id")
    .get(handleGetUserById)
    .patch(hanldeUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router ;