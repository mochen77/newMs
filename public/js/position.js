function Position(){
    this.addListener()
};

$.extend(Position.prototype,{
    addListener(){
        $(".btns-add-pos").on("click",this.addListPost);
    },
    addListPost(){
        const formData = new FormData($(".add-position-form").get(0));
        console.log(formData);
           //使用
           $.ajax({
            type:"post",
            url:"/positions/add",
            data:formData,
            processData:false,//静止将data转换为查询字符串
            contentType:false,//不设置contentType
            success:function(data){
                console.log(data);
            },
            dataType:"json"
        })
    },
    
});
new Position();