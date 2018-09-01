
const mongoose=require("mongoose");
//连接数据库
mongoose.connect('mongodb://localhost/ZOO');

//用户模型
const User=mongoose.model("user",{
    username:String,
    password:String,
    email:String
});

//职位模型
const Terricole=mongoose.model("terricole",{
    photos:String,
    name:String,
    times:Number,
    eat:String
});

module.exports={User,Terricole};
