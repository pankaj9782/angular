const Student = require("../models/students");
const {successResponse,errorResponse} = require("./mesage");
const register = async (req, res) => {

    try {
        console.log(req.body);
        const user_email = req.body.email;
        const user_mobile = req.body.mobile;
        if (await Student.findOne({ email: user_email })) {
            res.send(errorResponse("Email already exist"));
        }
        else if (data = await Student.findOne({ mobile: user_mobile })) {
            res.send(errorResponse("Mobile Number already exist"));
        }
        else {
            try {
                const st1 = new Student({
                    name: req.body.username,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    password: req.body.password
                })
               
                const data = await st1.save();
              
                res.send(successResponse("registration Successfull",data));
            }
        
            catch (error) {
                res.send(errorResponse("Technical error in server"));
            }
        }
            
    } catch (err) {
        res.send(errorResponse("Technical error in registeration page"));
    }
};
// register();
module.exports = register;