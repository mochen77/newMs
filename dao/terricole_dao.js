const {Terricole}=require("./model.js");

const TerricoleDao={
    //保存职位信息
    save(terricoleInfo){
        return new Terricole(terricoleInfo).save();
    },
    //总记录条数
    count(){
        return Terricole.find().count();
    },
    //按页查找
    findByPage(page){
        //假定每页显示5条数据
        const pageSize=5;
        //查询
        return Terricole.find().skip((page-1)*pageSize).limit(pageSize);
     },
    update(){},
    find(){},
    delete(terricoleInfo){
        Terricole.remove({id:terricoleInfo})
    }
}

module.exports=TerricoleDao;