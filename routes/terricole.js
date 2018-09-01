const express = require('express');
const router = express.Router();
const path = require("path");
const TerricoleService=require('../services/terricole_service.js');

//引入 multer 中间件:文件上传
const multer=require("multer");
//配置磁盘保存
const storage=multer.diskStorage({
    //储存目标
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/img/upload"));
    },
    //文件名
    filename: function (req, file, cb) {
        // 文件后缀
        const ext = file.originalname.slice(file.originalname.lastIndexOf("."));
      cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
// multer对象实例 
const upload = multer({ storage })

/* 添加陆地动物信息 */
//http://localhost:3000/terricole/add
router.post("/add", upload.single("photos"), TerricoleService.add);

/* 按页查询 */ 
// http://localhost:3000/terricole/list?page=2
router.get("/list",TerricoleService.listByPage);

/* 删除陆地动物信息 */
//http://localhost:3000/terricole/delete
router.post("/delete",TerricoleService.terricoledelete);

module.exports = router;