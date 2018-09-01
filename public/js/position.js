function Position(){
    this.addListener();
    // this.load();
};
let temp = `
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
  <h1 class="page-header">海洋生物</h1>

  <div class="row placeholders">
    <div class="col-xs-6 col-sm-3 placeholder">
      <img src="/img/11.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
      <h4>水母</h4>
      <span class="text-muted">Something else</span>
    </div>
    <div class="col-xs-6 col-sm-3 placeholder">
      <img src="/img/12.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
      <h4>蓝鲸</h4>
      <span class="text-muted">Something else</span>
    </div>
    <div class="col-xs-6 col-sm-3 placeholder">
      <img src="/img/13.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
      <h4>鱼</h4>
      <span class="text-muted">Something else</span>
    </div>
    <div class="col-xs-6 col-sm-3 placeholder">
      <img src="/img/14.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
      <h4>海豚</h4>
      <span class="text-muted">Something else</span>
    </div>
  </div>
  <h2 class="sub-header">动物信息
      <button  data-toggle="modal" data-target="#addPost" class="btn btn-primary btn-add-pos navbar-right" style="margin-right:55px;">新添动物信息</button>
  </h2>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>照片</th>
          <th>名称</th>
          <th>入园时间</th>
          <th>吃什么</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr>
          <td><img src="/img/11.jpg"></td>
          <td>袋鼠</td>
          <td>20180808</td>
          <td>草</td>
          <td><a href="#">修改</a>&nbsp;<a href="#">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>

`;
$(".container-fluid").html();


Position.listInfoTeplate = `
<% for(var i = 0; i< positions.length;i++) {%>
    <tr>
        <td><img src="../img/<%= positions[i].photos%>" alt="" style="width:60px"> 图片</td>
        <td><%= positions[i].name %></td>
        <td><%= positions[i].times %></td>
        <td><%= positions[i].eat %></td>
        <td><a href="">修改</a>&nbsp;<a href="">删除</a></td>
      </tr>
    <%} %>
`;
Position.paginationTemplate = `
<% for (var i = 1; i <= totalPages; i++)  {%>
    <li class="<%= currentPage == i ? 'active' : '' %>"><a href="#"><%= i %></a></li>
<% } %>
` 

$.extend(Position.prototype,{
    addListener(){
        $(".btns-add-pos").on("click",this.addListPost);
        $(".sea").on("click",this.load)
    },
    load(){
        $.getJSON("/positions/list",data=>{
            const positions = data.res_body;
            console.log(positions);
            const html = ejs.render(Position.listInfoTeplate,{positions});
            console.log(html);
            $(".content,.addDom").html(temp);
            $(".tbody").html(html);

        });
    },

    
    loadByPage(event){
        let page;
		if (typeof event === "number") // 直接传递页码
			page = event;
		else { // 获取待加载页码			
			console.log(event.target)
			page = $(event.target).text();
        }
        
        $.getJSON("/positions/list?page="+page,data=>{
            //待渲染的职位数据
            const positions = data.res_body.data;
            //EJS渲染模板
            const html = ejs.render(Position.listInfoTemplate,{positions});
            //显示
            $(".list-table").html(html);
            //显示页码数据
            const pagination = ejs.render(Position.paginationTemplate, {totalPages: data.res_body.totalPages, currentPage : page})
            $(".pagination").html(pagination);
        })
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