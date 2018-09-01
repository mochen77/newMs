/**
 * 管理页面创建构造函数
 */
function Pm(){
    this.load();
    this.addListener();
};

/**
 * 原型继承
 */
$.extend(Pm.prototype,{
    load(){
        if(sessionStorage.loginUser){
            let user=JSON.parse(sessionStorage.loginUser);
            // console.log(user);
            $(".login-success").find("a:first").text(`欢迎大佬:${user.username}`);
        }else{
            window.location.href="/index.html"
        }
    },
    addListener(){
        $(".login-out a").on("click",this.loginOut);
    },
    loginOut(){
        // console.log("1");
        sessionStorage.removeItem("loginUser");
        this.load;
    }
});

//创建对象实例
new Pm();