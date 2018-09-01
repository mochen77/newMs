const PositionDao = require("../dao/models.js");

const PostionSerivice = {
    add(req,res,next){
       //重请求主体重解构数据 
        const{name,times,eat} = req.body;
       //将上传的文件名保存
       let photos = "";
        if(req.file)
            photos = req.file.filename;
        //保存到数据库
        PositionDao
            .save({photos,name,times,eat})
            .then(data =>{
                res.json({res_code:1,res_error:"",res_body:data})
            })
            .catch(err=>{
                res.json({res_code:-1,res_error:err,res_body:{}})
            });
    },
    //分页查询职位
    listByPage(req,res,next){
        //获取当前查询的页码
        let {page} = req.query;
        page = page||1;
        const info =  PositionDao.findByPage(page);
        //调用数据库查询方法
        // PositionDao
        //     .count()
        //     .then((data) =>{
        //         PositionDao
        //             .findByPage(page)
        //             .then(pageData =>{
        //         //总页数
        //         const totalPages = Math.ceil(data/5);
        //         res.json({res_code:1,res_error:"",res_body:{data:pageData,count:data,totalPages}});
        //          }).catch(err=>{
        //         res.json({res_code:-1,res_error:err,res_body:{}})
        //      });
       
        //     }).catch(err =>{
        //         res.json({res_code:-1,res_error:err,res_body:{}})
        //     });
        info
            // .findByPage(page)
            .then(data =>{
                console.log(data);
                res.json({res_code:1,res_error:"",res_body:data})
            })
            .catch(err =>{
                res.json({res_code:-1,res_error:err,res_body:{}})
            });        
    }

}
module.exports = PostionSerivice;