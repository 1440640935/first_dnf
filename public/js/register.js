//左边的图片轮播
(function(){
    var i = 2;
    var timer = null;
    timer = setInterval(()=>{
        $(".side").css("backgroundImage",`url('../img/register-page/01-${i}.jpg')`);
        i++;
        if(i>3){
            i=1;
        }
    },3000)
})();

$(".item").on("mouseenter",function(){
    var $i = $(this);
    $i.css({opacity:1});
    $i.on("mouseleave",function(){
        var $i = $(this);
        $i.css({opacity:.6});
    });
});

$(".language-entry").hover(
    function(){
        $("#item-page").css("display","none").siblings().css("display","inline-block");
        $(".language-entry>ul").css("display","block");
    },
    function(){
        $("#item-page").css("display","inline-block").siblings().css("display","none");
        $(".language-entry>ul").css("display","none");
    }
);


//if(true){
//    $("#get_acc").css({border:"1px #3083ff solid",color:"#fff",backgroundImage:"linear-gradient(0deg,#398bff,#3083ff)"})
//}else{
//    $("#get_acc").css({border:"0",color:"#fff",backgroundImage:"linear-gradient(0deg,#ccc,#ccc)"});
//}



//用户名输入的实时判断
$(function(){
    $(".uname").on("input",function() {
        var $uname = $(".uname");
        var uname = $uname.val();
        if(uname==""){
            $("#uname-error").siblings().css("display","block");
        }else{
            $("#uname-error").siblings().css("display","none");
            $(".uname-error-tips-wrap").addClass("slideup");
        }
        $.ajax({
            url: "http://localhost:3000/register/uname",
            type: "post",
            data: {uname},
            dataType: "json",
            success: function (data) {
                if(data.code==401){   //401 判断是否用户名是否为空
                    $("#uname-error").css("display","none").parent().removeClass("slideup");
                    $(".input-ok").css("display","none");
                }else if(data.code==400){  //400 判断用户名是否存在
                    $("#uname-error") .css("display","block")
                                        .parent().removeClass("slideup");
                    $(".input-ok").css("display","none");
                }else if(data.code==101){
                    $("#uname-error") .css("display","none")
                        .parent().addClass("slideup");
                    $(".input-ok").css("display","block");
                    $(".uname-error-tips-wrap").addClass("slideup");
                }
            }
        })
    })
});

// 密码输入栏的操作
$("#upwd").on("focus",function(){
    $(".password-tips-group").removeClass("slideup");
});
$("#upwd").on("input",function(){
    var $upwd = $("#upwd");
    var upwd = $upwd.val();
    if(upwd==""){
        $(".eye").hide();
    }else{
        $(".eye").show().on("mousedown",function(){
            $(".upwd").attr("type","text");
            $(".eye").removeClass("close").on("mouseup",function(){
                $(".eye").addClass("close");
                $(".upwd").attr("type","password");
            });
        });

    }
    var reg1 = /\s/;
    var reg2 = /^\w{8,16}$/;
    var reg3 = /\w/g;
    if(reg1.test(upwd)==false&&reg2.test(upwd)==true){
        //当密码为无空格且密码格式正确时隐藏条件栏
        var timer = setTimeout(function(){
            clearTimeout(timer);
            $(".password-tips-group").addClass("slideup");
        },500);
    }
    if(reg1.test(upwd)){
        //判断是否含有空格
        $(".password-tips-group").removeClass("slideup");
        $(".tips1").removeClass("ok");
    }else{
        $(".tips1").addClass("ok").removeClass("error");
    }
    if(reg2.test(upwd)==false){
        //判断是否为6-18位
        $(".password-tips-group").removeClass("slideup");
        $(".tips2").removeClass("ok");
    }else{
        $(".tips2").addClass("ok").removeClass("error");
    }
});


//这是手机地区号 选项的代码
$(document).on("click",function(e){
    e.preventDefault();
    var $i= $(e.target);
    if($i.hasClass("nation")){
        $(".country").css("display","block");
        $("#phone-pic").css("display","none").siblings().css("display","inline-block");
    }else{
        $(".country").css("display","none");
        $("#phone-pic").css("display","inline-block").siblings().css("display","none");
    }
});


$(".country").on("click","a",function(e){
    e.preventDefault();
    var $i =  $(this);
    var $arr = $i.html().split("+");
    $(".nation").val("+"+$arr[1]);
});

$("#phone").on("input",function(){
    var $phone = $("#phone");
    var phone = $phone.val();
    var reg = /^\d{11}$/;
    if(reg.test(phone)==false){
        $(".phone-error-tips-wrap").removeClass("slideup");
    }else{
        $(".phone-error-tips-wrap").addClass("slideup");
    }
});


// 获取焦点的输入框的默认文字会隐藏 反之就出现
$(".input-area").on("focus","input",function(){
    var $i = $(this);
    $i.parent().parent().children("label").css("display","none");
    $(".input-area").on("blur","input",function(){
        var $i = $(this);
        if($i.val()==""){
            $i.parent().parent().children("label").css("display","inline-block");
        }
    });
});



//是否开通qq空间选项
$(".qzone-img").on("click",function(){
    var $i = $(this);
    var $qzone = $("#qzone");
    if(!$qzone.attr("checked")){
        $qzone.attr("checked",true);
        $i.css("display","none").siblings().css("display","inline-block");
    }else{
        $qzone.removeAttr("checked");
        $i.css("display","none").siblings().css("display","inline-block");
    }
});
$(".agree-img").on("click",function(){
    var $i = $(this);
    var $agree = $("#agree");
    if(!$agree.attr("checked")){
        $agree.attr("checked",true);
        $i.css("display","none").siblings().css("display","inline-block");
        $("#get_acc").css({border:"1px #3083ff solid",color:"#fff",backgroundImage:"linear-gradient(0deg,#398bff,#3083ff)"})
            .attr("disabled",false);
    }else{
        $agree.removeAttr("checked");
        $i.css("display","none").siblings().css("display","inline-block");
        $("#get_acc").css({border:"0",color:"#fff",backgroundImage:"linear-gradient(0deg,#ccc,#ccc)"}).attr("disabled",true);
    }
});

$("#agree-page").on("click",function(){
        $("#agree-page").css("display","none").prev().css("display","inline-block");
        $(".agreement-list").css("visibility","visible").on("mouseleave",function(){
            $(".agreement-list").css("visibility","hidden");
            $("#agree-page").css("display","inline-block").prev().css("display","none");
        });
});

//点击注册按钮 进行注册
$(function(){
    $(".submit").on("click",function(e){
        e.preventDefault();
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        var phone = $(".phone").val();
        var email = null;
        if($("#qzone").is(":checked")){
            email = uname+"@qq.com";
        }else{
            email = "NULL";
        }
        $.ajax({
            url: "http://localhost:3000/register/user_register",
            type: "post",
            data: {uname,upwd,phone,email},
            dataType: "json",
            success: function (data) {
                if(data.code==100) {
                    var timer = null;
                    clearInterval("timer");
                    timer = setTimeout(function(){

                    },1000);
                    if(confirm("注册成功,点击跳转至登录页面!")){
                        location.href="http://localhost:3000/html/login.html";
                    }else{
                        location.reload();
                    }
                }else if(data.code==400){
                    $("#uname-error").css("display","none").parent().removeClass("slideup");
                    $(".input-ok").css("display","none");
                }else if(data.code==401){
                    $(".password-tips-group").removeClass("slideup");
                    $(".tips1").addClass("error");
                    $(".tips2").addClass("error");
                }else if(data.code==402){
                    $(".phone-error-tips-wrap").removeClass("slideup");
                }else{
                    alert("注册出错,请排查问题后重试");
                }
            }
        })
    })
});



