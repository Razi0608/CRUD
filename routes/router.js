const express = require("express");
const router = new express.Router();
const controller = require("../controller/userController")

// routes


router.post("/user/register",controller.userpost);
router.get("/user/getAlluser",controller.getUsers);
router.get("/user/Singleuser/:id",controller.getSingleuser);
router.delete("/user/deleteuser/:id",controller.deleteuser);
router.put("/user/updateuser/:id",controller.updateuser);

module.exports = router;