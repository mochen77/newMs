const express = require('express');
const router = express.Router();
const path = require("path");
const PostionSerivice = require("../services/position_services.js");

//引入multer中间件
const multer = require("multer");

module.exports = router;
//配置磁盘保存
const storage = multer.diskStorage({
    //储存磁盘保存
    destination: function (req, file, cb) {
    //储存目标
        cb(null, path.join(__dirname,'../public/img/'))
    },
    //文件名
    filename: function (req, file, cb) {
      //文件后缀
      const ext = file.originalname.slice(file.originalname.lastIndexOf("."));
        cb(null, file.fieldname + '-' + Date.now()+ext);
    }
  });
    //multer 对象实例
    const upload = multer({storage})
    //添加职位
    //http://localhost:3000/postions/add
    router.post("/add",upload.single("photos"),PostionSerivice.add);
    
//  按业查询  
//  http://localhost:3000/positions/list?page=1  PositionService
    router.get("/list",PostionSerivice.listByPage);
  
   module.exports = router; 