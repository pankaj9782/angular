const express = require('express');
const router = new express.Router();
const Student = require("../models/students");

// import controller path
const register = require("../controller/register");
const login = require("../controller/login");

const {send_otp,forgetPass} = require("../controller/forgetPass");
const error_404 = require('../controller/404');

router.get("/register",async(req,res)=>{
    const std = await Student.find();
    res.send(std);
});
router.post("/register",register);
router.post("/userLogin",login);
router.post("/otp",send_otp);
router.post("/forgetPass",forgetPass);
router.post("/*",error_404);



module.exports= router;


