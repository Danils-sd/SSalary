const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router();

//Авторизация
router.post("/auth/singIn", authController.authtorisation);

router.post("/auth/regist", authController.registration)
//

module.exports = router;