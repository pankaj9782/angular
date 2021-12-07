const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/userDB",{ useNewUrlParser:true})
.then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log(err);
});