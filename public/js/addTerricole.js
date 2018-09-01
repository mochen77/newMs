function AddTerricole(){
    this.addListener();
    this.load();
};


AddTerricole.listInfoTemplate=`
            <% for(var i=0;i<terricoles.length;i++){ %>
                <tr>
                    <td><%= i+1 %></td>
                    <td><img src="../img/upload/<%= terricoles[i].photos %>" style="width:45px;"></td>
                    <td><%= terricoles[i].name %></td>
                    <td><%= terricoles[i].times %></td>
                    <td><%= terricoles[i].eat %></td>
                    <td><a href="#">修改</a>&nbsp;<a href="#">删除</a></td>
                </tr>
            <% } %>`;

AddTerricole.paginationTemplate=`
            <% for(var i=1;i<=totalPages;i++) {%>
                <li class="<%= currentPage==i?'active':'' %>"><a href="#"><%= i %></a></li>
            <% } %>
                `;


$.extend(AddTerricole.prototype,{
    addListener(){
        //添加职位
        $(".btns-add-pos").on("click",this.addTerricoleHandler);
        //翻页
        $(".pagination").on("click","li",this.loadByPage)
    },
    addTerricoleHandler(){
        console.log(1);
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
    },


    //页面加载
    load(){
        // 加载第一页数据
		this.loadByPage(1);
    },
    loadByPage(event){
        let page;
        if(typeof event==="number")//直接传递页码
            page=event;
        else//获取当前加载的页码
            page=$(event.target).text();

        //读取page页数
        $.getJSON("/terricole/list?page="+page,data=>{
            //显示数据
            //带渲染的数据
            const terricoles=data.res_body.data;
            console.log(terricoles);
            //EJS渲染模板
            const html=ejs.render(AddTerricole.listInfoTemplate,{terricoles});
            //显示
            $(".terricoles-list-table tbody").html(html);

            //显示页码数据
            const pagination=ejs.render(AddTerricole.paginationTemplate,{totalPages:data.res_body.totalPages,currentPage:page})
            $(".pagination").html(pagination);
        })

    }
});