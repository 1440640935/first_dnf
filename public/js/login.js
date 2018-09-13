$(function(){
  $(".btn").click(function(){
    var uname=$(".uname").val();
    var upwd=$(".upwd").val();
    $.ajax({
      url:"http://localhost:3000/users/signin",
      type:"post",
      data:{uname,upwd},
      dataType:"json",
      success:function(data){
        if(data.ok==0){
         $(".errInfo").html(data.msg);
         $(".upwd").val("");
        }
        else{

          var timer = null;
          clearInterval("timer");
          timer = setTimeout(function(){

          },1000);
          alert("登录成功,自动跳转至主页面!");
          if(location.search.indexOf("back=")!=-1){
            var back=location.search.slice(6);
            location.href=back;
          }else{
            location.href="http://localhost:3000/html/index-pk.html"
          }
        }
      }
    })
  })
});

//扫码登录和账号密码登录的切换
$("#switcher_plogin").on("click",function(e){
  e.preventDefault();
  $(".web_qr_login").css("display","block")
                      .parent().children("div:first-child")
                      .css("display","none");
  $("#switcher_plogin").parent().css("display","none")
                        .parent().children("div:last-child")
                        .css("display","block");

});
$("#switcher_qlogin").on("click",function(e){
  e.preventDefault();
  $(".web_qr_login").css("display","none")
      .parent().children("div:first-child")
      .css("display","block");
  $("#switcher_plogin").parent().css("display","block")
      .parent().children("div:last-child")
      .css("display","none");
});

//清空input框
$("#uin_del").on("click",function(e){
  e.preventDefault();
  $(".uname").val("");
});

$(".uname,.upwd").on("focus",function(e){
  e.preventDefault();
  $(".errInfo").html("");
});


$(".login-wrapper").hover(function(){
    $(".bg").css("transform","matrix(1,0,0,1,0,0)");
}, function(){
    $(".bg").css("transform","matrix(1.03,0,0,1.03,0,0)");
});







