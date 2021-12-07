const express = require('express');
const router = new express.Router();
const Student = require("../models/students");
const {successResponse, errorResponse } = require("./mesage");
const bcrypt = require('bcryptjs');


const login = async (req, res) => {
    console.log(req.body);
    try {
        const email1 = req.body.email;
        const pass1 = req.body.password;
        try {
            const data = await Student.findOne({ email: email1 });
            const isMatch = await bcrypt.compare(pass1, data.password);
            if (isMatch) {
                res.send(successResponse("login Successfully...!!!",data));;
            }
            else {
                res.send(errorResponse("Email and Pasword Invalid...!!!"));

            }
        }
        catch (err) {
            res.send(errorResponse("Email and Pasword Invalid...!!!"));
        }
    } catch (error) {
        res.send(errorResponse("server side error...!!!"));
    }


};

module.exports = login;