const express = require("express");
const userController = require("./usersController");
const authController = require("../../middleware/authController");

const router = express.Router();
/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get employee by ID.
 *     description: Get employee by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post("/signUp", authController.signUp);

router.get("/:id", userController.getUser);

/**
 * @swagger
 * /api/v1/users/signUp:
 *   post:
 *     summary: Create a new user.
 *     description: Create a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               userName:
 *                 type: string
 *                 description: User's chosen username
 *               passwordConfirm:
 *                 type: string
 *                 description: User's password confirm
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post("/logIn", authController.logIn);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
