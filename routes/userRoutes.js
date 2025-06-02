const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/userController");
const checkToken = require("../middlewares/authMiddleware")

router.get("/:id", checkToken, getUserById);

module.exports = router;