$("document").on("click","li,a",function(e){
    e.preventDefault();
});
$(".main-menu-list").on("mouseenter","a",function(){
    var $i = $(this);
    $i.css("color","#ec4828");
}).on("mouseout","a",function(){
    var $i = $(this);
    $i.css("color","#fff");
}).on("click","a",function(e){
    e.preventDefault();
});

$(".news-list>li:not('.news-hot'),.news-more").on("mouseenter","a",function(){
    var $i = $(this);
    $i.css("color","#ec4828");
}).on("mouseout","a",function(){
    var $i = $(this);
    $i.css("color","#b8afa2");
}).on("click","a",function(e){
    e.preventDefault();
});


$(".modle-enter").mouseover(function(){
    var $i = $(this);
    $i.css("box-shadow","0.1px 0.1px 0.1px 0.1px gray")
}).on("mouseout",function(){
    $(".modle-enter").css("box-shadow","")
});

$(".menu-quick>ul>li,.menu-sns>ul>li,.guide-panel>ul>li").mouseover(function(){
    var $i = $(this).children();
    var $c = $i.children();
    var x = 1*$c.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$c.css("backgroundPosition").split(" ")[1].split("px")[0];
    $c.css({"background-position":`${x}px ${y-32}px`});
    $i.css({"color":"red"});
}).on("mouseout",function(){
    var $i = $(this).children();
    var $c = $i.children();
    var x = 1*$c.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$c.css("backgroundPosition").split(" ")[1].split("px")[0];
    $c.css({"background-position":`${x}px ${y+32}px`});
    $i.css({"color":"#333"});
});
$(".raiders-links>li").mouseover(function(){
    var $i = $(this).children();
    var $c = $i.children();
    var x = 1*$c.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$c.css("backgroundPosition").split(" ")[1].split("px")[0];
    $c.css({"background-position":`${x}px ${y-22}px`});
    $i.css({"color":"red"});
}).on("mouseout",function(){
    var $i = $(this).children();
    var $c = $i.children();
    var x = 1*$c.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$c.css("backgroundPosition").split(" ")[1].split("px")[0];
    $c.css({"background-position":`${x}px ${y+22}px`});
    $i.css({"color":"#333"});
});

$(".top").on("mouseover","a",function(){
    var $i = $(this);
    var x = 1*$i.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$i.css("backgroundPosition").split(" ")[1].split("px")[0];
    $i.css({"background-position":`${x-41}px ${y}px`});
    $i.css({"color":"red"});
}).on("mouseout","a",function(){
    var $i = $(this);
    var x = 1*$i.css("backgroundPosition").split(" ")[0].split("px")[0];
    var y = 1*$i.css("backgroundPosition").split(" ")[1].split("px")[0];
    $i.css({"background-position":`${x+41}px ${y}px`});
    $i.css({"color":"#333"});
}).on("click","a",function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop:42+"px"
    },"slow");
});



$(".modle-tit-more>a,.bbs_more,.raiders-other>a").mouseover(function(){
    var $i = $(this);
    $i.css("color","red");
}).on("mouseout",function(){
    var $i = $(this);
    $i.css("color","#333");
});
$(".bk-sub-nav p>a").on("mouseenter",function(){
    var $i = $(this);
    $i.css("color","red");
}).on("mouseout",function(){
    var $i = $(this);
    $i.css("color","#333");
});






$(".news-hd").on("mouseenter","li",function(){
    var $i = $(this);
    var index= $i.index();
    $i.addClass("cur").siblings().removeClass("cur");
    $(".news-bd").children().eq(index).addClass("dis").siblings().removeClass("dis");
});



$(".menu-guide").on("mouseenter",function(){
    $(".menu-guide-tit").on("mouseover","li",function(e){
        var $i = $(this);
        $i.children().css("color","#ec4828");
        $i.siblings().children().css("color","#fff");
        var index= $i.index();
        $i.addClass("cur").siblings().removeClass("cur");
        $(".menu-guide-list").children().eq(index).addClass("dis").siblings().removeClass("dis");

    });
}).on("mouseleave",function(){
    $(".menu-guide-tit-li").removeClass("cur").children().css("color","#fff");
    $(".menu-guide-list").children().removeClass("dis");
});




$(".novel-hd>ul>li").on("mouseenter",function(){
    var $i = $(this);
    var index= $i.index();
    $i.addClass("cur").siblings().removeClass("cur");
    $(".novel-bd").children().eq(index).addClass("dis").siblings().removeClass("dis");
});
$(".novel-list>ul>li").on("mouseenter","a",function(){
    var $i = $(this);
    $i.css("color","#ec4828");
}).on("mouseout","a",function(){
    var $i = $(this);
    $i.css("color","#333");
});


$(".job-list").on("click",function(){
    var $i = $(this);
    var index = $i.index();
    $i.addClass("cur").siblings().removeClass("cur");
});

$(".raiders-news").on("mouseenter","a",function(e){
    e.preventDefault();
    var $i = $(this);
    $i.css("color","#ec4828");
}).on("mouseout","a",function(){
    var $i = $(this);
    $i.css("color","#333");
});


(function(){
    var timer = null;
    var x = 0;
    var i = 1;
    timer = setInterval(function(){
        clearInterval(timer);
        x++;
        i++;
        $(".adPic").css("margin-top",`${x*-270}px`);
        $(`.ad-btn${i}`).children().addClass("on").parent().siblings().children().removeClass("on");
        if(x==6){
            x = -1;
        }
        if(i==7){
            i=0;
        }
    },4000);
    $(".promo").on("mouseover",function(){
        timer = null;
        clearInterval(timer);
    }).on("mouseleave",function(){
        clearInterval(timer);
        timer = setInterval(function(){
            x++;
            i++;
            $(".adPic").css("margin-top",`${x*-270}px`);
            $(`.ad-btn${i}`).children().addClass("on").parent().siblings().children().removeClass("on");
            if(x==6){
                x = -1;
            }
            if(i==7){
                i=0;
            }
        },4000);
    });
    $(".ad-icon").on("mouseenter","li",function(){
        var $i = $(this);
        var index = $i.index();
        i=index;
        x = index-1;
        $i.children().addClass("on").parent().siblings().children().removeClass("on");
        $(".adPic").css("margin-top",`${index*-270}px`);
    })
})();

function activitySearch(i){
    if(i==undefined){
        i = 0;
    }
    var nPage;
    nPage = i;
    $.ajax({
        url:"http://localhost:3000/indexmain/activitySearch",
        type:"post",
        data:{nPage},
        dataType:"json",
        success:function(data){
            var html = "";
            var time = new Date();
            time = Date.parse(time)/1000;
            for(var i=0;i<data.result.length;i++){
                var {nid,ntime,nImage} = data.result[i];
                ntime = Date.parse(ntime)/1000;
                ntime = Math.floor((ntime-time)/(3600*24));
                if(ntime<=0){
                    html += `<li>
                            <a href="" target="_blank" onclick="">
                            <img src="${nImage}" alt="">
                            </a><p class="gg-time">已结束</p>
                        </li>`
                }else{
                    html += `<li>
                                <a href="" target="_blank" onclick="">
                                <img src="${nImage}" alt="">
                                </a><p class="gg-time"><b>${ntime}</b>天后结束</p>
                            </li>`
                }
            }
            $("#act_list").html(html).children().eq(3).addClass("act-o");
        }
    })
}
activitySearch();
$("#act_nav").on("click","li",function(e){
    e.preventDefault();
    var $i = $(this);
    var index = $i.index();
    $i.addClass("cur").siblings().removeClass("cur");
    activitySearch(index);
});


$("#comm_footer_switch").on("click","a",function(e){
    e.preventDefault();
    var $i = $(this).parent();
    if($i.hasClass("comm_footer_switch_open")){
        $("#comm_footer_wrap").css("height","90px");
        $i.removeClass("comm_footer_switch_open").addClass("comm_footer_switch_close");
    }else{
        $("#comm_footer_wrap").css("height","0px");
        $i.removeClass("comm_footer_switch_close").addClass("comm_footer_switch_open");
    }
});

$("#chapter_btn").on("click",function(e){
    e.preventDefault();
    var $i = $(this);
    if($i.hasClass("open")){
        $("#chapter").animate({
            marginLeft:-1044+"px"
        },"slow");
        $i.removeClass("open");
    }else{
        //$("#chapter").css("margin-left","0px");
        //$i.addClass("open")
        $("#chapter").animate({
            marginLeft:0+"px"
        },"slow");
        $i.addClass("open");
    }
});
