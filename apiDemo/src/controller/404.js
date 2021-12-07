const express = require('express');
const router = new express.Router();
const Student = require("../models/students");
const {successResponse, errorResponse } = require("./mesage");

const error_404=async (req,res)=>{
    res.send(errorResponse("Page not found"));
}

module.exports=error_404;