/**
 * 首页构造函数
 */
function Index(){
    this.addListener();
};


/**
 * 原型继承
 */
$.extend(Index.prototype,{
    //点击注册按钮的的时候
    addListener(){
        $(".btn-register").on("click",this.registerHandler);
        $(".btn-login").on("click",this.loginHandler);
        //点击登录、注册链接
        $(".link-login").on("click",this.genCaptchaHandler);
        //失去焦点验证
        $("#retisterCode").on("blur",this.verifyHandler);

    },
    //注册按钮处理
    registerHandler(){
        var data=$(".register-form").serialize();
        // console.log(data);
        $.post("/users/register",data,(resData)=>{
            // console.log(resData);
        }/* ,"json" */).done(()=>{
            $("#registerModal").modal("hide");
        });
    },
    loginHandler(){
        //获取表单数据
        var data=$(".login-form").serialize();
        console.log(data);
        //ajax提交登录处理
        $.post("/users/login",data,(resData)=>{
            console.log(resData);
            if(resData.res_code===1){//登录成功
            //将登录成功的用户信息保存起来，保存到sessionStorage中
            sessionStorage.loginUser=JSON.stringify(resData.res_body);
            window.location.href="/html/PM.html";
            }else{
            $(".login-err").removeClass("hide");
            }
        })
    },
    //生成验证码
    genCaptchaHandler(){
        $.get("/captcha/gencode",(data)=>{
            $(".code-img").html(data);
        },"text");
    },
    //校验验证码
    verifyHandler(){
        //输入的验证码
        var code=$("#retisterCode").val();
        $.getJSON("/captcha/verify",{code},(data)=>{
            if(data.res_code===1){
                $(".code-info").text("正确")
            }else{
                $(".code-info").text("错误")
            }
        })
    }
});

//创建首页对象实例
new Index();