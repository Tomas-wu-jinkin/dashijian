$(function () {
  // 定义美化时间的过滤器
  template.defaults.imports.dataFormat = function (date) {
    const dt = new Date(date);

    var y = dt.getFullYear();
    var m = padZero(dt.getMonth() + 1);
    var d = padZero(dt.getDate());

    var hh = padZero(dt.getHours());
    var mm = padZero(dt.getMinutes());
    var ss = padZero(dt.getSeconds());

    return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
  };

  // 定义补零的函数
  function padZero(n) {
    return n > 9 ? n : "0" + n;
  }
  var q = {
    pagenum: 1, // 页码值，默认请求第一页的数据
    pagesize: 2, // 每页显示几条数据，默认每页显示2条
    cate_id: "", // 文章分类的 Id
    state: "", // 文章的发布状态
  };

  initTable();
  initCate();
});

// 获取文章列表数据的方法
function initTable() {
  // 使用模板引擎渲染页面的数据
  var res = {
    data: [
      {
        id: 1,
        title: "射雕英雄传",
        cate_name: "武侠",
        pub_date: "2022-08-14",
        state: "可用",
      },
    ],
  };
  var htmlStr = template("tpl-table", res);
  $("tbody").html(htmlStr);
}
// 初始化文章分类的方法
function initCate() {
  var res = {
    data: [
      { id: 1, name: "武侠" },
      { id: 2, name: "玄幻" },
    ],
  };
  // 调用模板引擎渲染分类的可选项
  var htmlStr = template("tpl-cate", res);
  $("[name=cate_id]").html(htmlStr);
  // 通过 layui 重新渲染表单区域的UI结构
  form.render();
}
