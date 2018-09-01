/**
 * 陆地动物的构造函数
 */
function Terricole(){
    this.addListener();
    // this.createDom();
};

Terricole.template=`<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
<h1 class="page-header">风采</h1>

<div class="row placeholders">
  <div class="col-xs-6 col-sm-3 placeholder">
    <img src="/img/animal1.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
    <h4>gouge</h4>
    <span class="text-muted">Something else</span>
  </div>
  <div class="col-xs-6 col-sm-3 placeholder">
    <img src="/img/animal2.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
    <h4>Label</h4>
    <span class="text-muted">Something else</span>
  </div>
  <div class="col-xs-6 col-sm-3 placeholder">
    <img src="/img/animal3.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
    <h4>Label</h4>
    <span class="text-muted">Something else</span>
  </div>
  <div class="col-xs-6 col-sm-3 placeholder">
    <img src="/img/animal4.jpg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail" style="width:200px;height:200px;">
    <h4>Label</h4>
    <span class="text-muted">Something else</span>
  </div>
</div>

<h2 class="sub-header">动物信息
    <button  data-toggle="modal" data-target="#addPosModal" class="btn btn-primary btn-add-pos navbar-right" style="margin-right:55px;">新添动物信息</button>
</h2>
<div class="table-responsive">
  <table class="table table-striped terricoles-list-table">
    <thead>
      <tr>
        <th>序号</th>
        <th>照片</th>
        <th>名称</th>
        <th>入园时间</th>
        <th>吃什么</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="/img/zoo.jpg"></td>
        <td>袋鼠</td>
        <td>20180808</td>
        <td>草</td>
        <td><a href="#">修改</a>&nbsp;<a href="#">删除</a></td>
      </tr>
    </tbody>
  </table>

  <div class="pagination"></div>
</div>
</div>

<!-- 新添动物信息模态框 -->
      <div class="modal fade" id="addPosModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">添加动物信息</h4>
            </div>
            <div class="modal-body">
              <form class="add-position-form">
                <div class="form-group">
                  <label for="addLogo">上传照片</label>
                  <input type="file" class="form-control" name="photos" id="addPhotos">
                </div>
                <div class="form-group">
                  <label for="addPositionName">名称</label>
                  <input type="text" class="form-control" name="name" id="addName" placeholder="名称">
                </div>
                <div class="form-group">
                  <label for="addSalary">入园时间</label>
                  <input type="text" class="form-control" name="times" id="addTimes" placeholder="入园时间">
                </div>
                <div class="form-group">
                  <label for="addCity">吃什么</label>
                  <input type="text" class="form-control" name="eat" id="addEat" placeholder="吃什么">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary btns-add-pos">添加</button>
            </div>
          </div>
        </div>
      </div>
`;
/**
 * 原型继承
 */
$.extend(Terricole.prototype,{
    addListener(){
        $(".terricole a").on("click",this.createDom);
        
    },
    createDom(){
      $(".addDom").html(Terricole.template);
      $(".animal-pavilion").children().removeClass("active");
      $(".terricole").addClass("active");
      new AddTerricole();
    }
});

new Terricole();