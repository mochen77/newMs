const TerricoleDao=require("../dao/terricole_dao.js");

const TerricoleService={
    //添加职位
    add(req,res,next){
        //从请求主体中解构文本数据
        const {name,salary,city}=req.body;
        console.log(name);
        //将上传文件的logo文件名保存
        let logo="";
        if(req.file)
            logo=req.file.filename;
        //保存到数据库
        TerricoleDao
            .save({name,logo,salary,city})
            .then(data=>{
                res.json({res_code:1,res_error:"",res_body:data});
            })
            .catch(err=>{
                res.json({res_code:-1,res_error:err,res_body:{}})
            });
    }/* ,
    //分页查询职位
    listByPage(req,res,next){
        //获取待查询的页码
        let {page}=req.query;
        page=page||1;
        //调用数据库查询方法
        TerricoleDao
            .count()
            .then((data)=>{
                TerricoleDao
                    .findByPage(page)
                    .then(pageData=>{
                        //总页数
                        const totalPages=Math.ceil(data/5);
                        res.json({res_code:1,res_error:"",res_body:{data:pageData,count:data,totalPages}})
                    })
                    .catch(err=>{
                        res.json({res_code:-1,res_error:err,res_body:{}});
                    });
            })
            .catch(err=>{
                res.json({res_code:-1,res_error:err,res_body:{}});
            });
    } */
}

module.exports=TerricoleService;