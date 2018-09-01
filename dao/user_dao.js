const {User}=require("./model.js");

const Userdao={
    save(userinfo){
        const user=new User(userinfo);
        return user.save();//返回的是Promise的对象
    },
    find(userinfo){
        return User.find(userinfo);
    },
    updata(){},
    delete(){}
};

module.exports=Userdao;