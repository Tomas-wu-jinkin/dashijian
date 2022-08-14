$(function () {
  var layer = layui.layer;
  var form = layui.form;

  var res = {
    data: [
      { id: 1, name: "武侠", alias: "武侠" },
      { id: 2, name: "科技", alias: "科技" },
    ],
  };
  var htmlStr = template("tpl-table", res);
  $("tbody").html(htmlStr);

  $("#btnAddCate").on("click", function () {
    layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "添加文章分类",
      content: $("#dialog-add").html(),
    });
  });

  var indexEdit = null;
  $("tbody").on("click", ".btn-edit", function () {
    // 弹出一个修改文章分类信息的层
    indexEdit = layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "修改文章分类",
      content: $("#dialog-edit").html(),
    });
    form.val("form-edit", { id: 1, name: "武侠", alias: "武侠" });
  });
});
