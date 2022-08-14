$(function () {
  var layer = layui.layer;
  var form = layui.form;

  initCate();
  // 初始化富文本编辑器
  initEditor();
  // 定义加载文章分类的方法
  function initCate() {
    var res = {
      data: [
        { id: 1, name: "武侠" },
        { id: 2, name: "玄幻" },
      ],
    };
    // 调用模板引擎，渲染分类的下拉菜单
    var htmlStr = template("tpl-cate", res);
    $("[name=cate_id]").html(htmlStr);
    // 一定要记得调用 form.render() 方法
    form.render();
  }

  // 1. 初始化图片裁剪器
  var $image = $("#image");

  // 2. 裁剪选项
  var options = {
    aspectRatio: 400 / 280,
    preview: ".img-preview",
  };

  // 3. 初始化裁剪区域
  $image.cropper(options);

  $("#btnChooseImage").on("click", function () {
    $("#coverFile").click();
  });
  $("#coverFile").on("change", function (e) {
    var file = e.target.files[0];
    var newImgURL = URL.createObjectURL(file);
    $image
      .cropper("destroy") // 销毁旧的裁剪区域
      .attr("src", newImgURL) // 重新设置图片路径
      .cropper(options);

    var art_state = "已发布";
    $("#btnSave2").on("click", function () {
      art_state = "草稿";
    });

    $("#form-pub").on("submit", function (e) {
      // 1. 阻止表单的默认提交行为
      e.preventDefault();
      // 2. 基于 form 表单，快速创建一个 FormData 对象
      var fd = new FormData($(this)[0]);
      // 3. 将文章的发布状态，存到 fd 中
      fd.append("state", art_state);
      $image
        .cropper("getCroppedCanvas", {
          // 创建一个 Canvas 画布
          width: 400,
          height: 280,
        })
        .toBlob(function (blob) {
          // 将 Canvas 画布上的内容，转化为文件对象
          // 得到文件对象后，进行后续的操作
          // 5. 将文件对象，存储到 fd 中
          fd.append("cover_img", blob);
          // 6. 发起 ajax 数据请求
        });
    });
  });
});
