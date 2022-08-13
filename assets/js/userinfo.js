$(function () {
  var form = layui.form;

  form.verify({
    nickname: function (value) {
      if (value.length > 6) {
        return "昵称长度必须在 1 ~ 6 个字符之间！";
      }
    },
  });
  form.val("formUserInfo", {
    username: "Tomas",
    nickname: "Tomas JK",
    email: "360214338@qq.com",
  });
});
