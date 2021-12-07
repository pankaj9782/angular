const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt =require('bcryptjs')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
        // trim:true,

        
        // match:/^[a-zA-Z ]+$/
    },

    email:{
        type:String,
        required:true,
        // lowercase:true,
        // unique:true,
        // trim:true,
        // match: /^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/,
        // validate(val){
        //      if(!validator.isEmail(val)){
        //          return new Error("Please enter valid email...!!!");
        //      }
        // }
    },
    mobile:{
        type: Number,
        required:true,
        // trim:true,
        // unique:true,
        
       },
    password:{
        type: String,
        required:true,
        // trim:true,
        // match:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    }

    

});

studentSchema.pre("save", async function(next){
    // const passwordHash = await bcrypt.hash(password, 10);
    if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
      
    }
    next();
});




const Student=  new mongoose.model('Student',studentSchema);
module.exports=Student;
