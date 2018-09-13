$(function(){
  $.ajax({
    url:"http://localhost:3000/html/index-pk.html",
    type:"get"
  })
  .then(res=>{
    function isLogin(){
      $.ajax({
        url:"http://localhost:3000/users/islogin",
        type:"get",
        dataType:"json",
        success:function(data){
          if(data.ok==0){
            $("#dologin").show().parent().siblings(":not(:nth-child(3))").hide();
            $(".bd_where").show().siblings().hide();
          }else{
            $("#dologin").hide().parent().siblings(":not(:last)").show();
            $("#login_qq_span").html(data.uname);
           $(".bd_where").hide().siblings().show();
            $("#spanNotBind_480976").children("a:nth-child(3)").html(data.user_name);
            $(".bd_change").on("click","a",function(){

            })
          }
        }
      })
    }
    isLogin();
    $("#dologout").click(function(e){
      e.preventDefault();
      $.ajax({
        url:"http://localhost:3000/users/signout",
        type:"get",
        success:isLogin
      })
    })
    $("#dologin,.bd_where").click(function(e){
      e.preventDefault();
      location.href=
        "http://localhost:3000/html/login.html?back="+location.href;
    })
   })
  })
//每个页面body结尾:
  //script src="js/ajax.js"
  //script src="js/header.js"
