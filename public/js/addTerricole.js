function AddTerricole(){
    this.addListener();
};

$.extend(AddTerricole.prototype,{
    addListener(){
        //添加职位
        $(".btns-add-pos").on("click",this.addTerricoleHandler);
    },
    addTerricoleHandler(){
        //创建FormData对象：包装待上传表单的数据
        const formData=new FormData($(".add-position-form").get(0));
        //使用$.ajax()方法
        $.ajax({
            type:"post",
            url:"/terricole/add",
            data:formData,
            processData:false,
            contentType:false,
            success:function(data){
                console.log(data);
            },
            dataType:"json"
        });
    }
});

new AddTerricole();