var express = require('express');
var router = express.Router();
var UserService=require("../services/login");


/* 用户注册 */
// http://localhost:3000/users/refister
router.post("/register", UserService.register);

/* 用户注册登录 */
// http://localhost:3000/users/login
router.post("/login", UserService.login);

module.exports = router;
