const express = require("express");
const userController = require("./usersController");
const authController = require("../../middleware/authController");

const router = express.Router();
router.get("/:id", userController.getUser);

router.post("/signUp", authController.signUp);
router.post("/logIn", authController.logIn);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
