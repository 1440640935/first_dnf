$(".addBtn,.createMyteam,.teamMemberHead").on("click",function(){
    if($(".bd_change").is(":hidden")){
        var timer = setTimeout(function(){
            clearTimeout(timer);
            location.href= "http://localhost:3000/html/login.html?back="+location.href;
        },200);
        $("#mlSecond").show();
    }
});


//这一大块从 这 到 158 行 写了更改绑定的事件  代码有待简化啊！！！！！！ 好烦啊
var city = [
    ['上海一区', '上海二区', '上海三区','上海4/5区'],
    ['广东一区', '广东二区', '广东三区','广东四区','广东五区','广东六区'],
    ['北京一区', '北京二区', '北京三区'],
    ['四川一区', '四川二区', '四川三区'],
    ['江西一区', '江西二区', '江西三区'],
    ['湖北一区', '湖北二区', '湖北三区']
];
var user = [];

//点击切换大区与角色 朦胧层浮现  大区选项浮现
$(".bd_change").on("click",function(){
    var a = setTimeout(function(){
        $("#changeUser").show();
    },500);
    $("#mlIndex").show();
});

//大区选项的点击改变事件
$("#select-province").on("change",function(){
    var sltProvince = document.getElementById("select-province");
    var sltCity = document.getElementById("select-city");
    var provinceCity = city[sltProvince.selectedIndex-1];
    //清空城市下拉框,仅保留提示选项
    sltCity.length=1;
    //将城市数组中的值填充到城市下拉框中
    if(provinceCity!=undefined){
        for(var i=0;i<provinceCity.length;i++){
            sltCity[i+1]=new Option(provinceCity[i],provinceCity[i]);
        }
        $(".mainChange").hide();
    }else{
        $(".mainChange").hide();
    }

});
//服务器选项的点击改变事件
$("#select-city").on("change",function(){
    var uname = $("#login_qq_span").html();
    var sltCity = document.getElementById("select-city");
    var sltUser = document.getElementById("select-user");
    //清空大区下拉框,仅保留提示选项
    sltUser.length=1;
    $.ajax({
        url:"http://localhost:3000/indexdpl/usercheck",
        type:"post",
        data:{uname},
        dataType:"json",
        success:function(data){
            var timer = null;
            if(data.code==100){
                user[0] = data.msg[0].user_name;
                var provinceUser = user[sltCity.selectedIndex-1];
                //console.log(sltCity.selectedIndex);
                // console.log(provinceUser);   //拿到 omg 等等


                //将角色数组中的值填充到城市下拉框中
                if(provinceUser!=undefined){
                    sltUser[1] = new Option(provinceUser, provinceUser);
                    timer = setTimeout(function(){
                        $(".mainfirst").hide();
                        $(".mainerr").hide();
                        $(".seconderr").hide();
                        $(".thirderr").hide();
                        $(".maintrue,#select-user").show();
                    },300);
                    $(".mainChange").show();
                }else if(sltCity.selectedIndex!=0){
                    timer = setTimeout(function(){
                        $(".mainfirst").hide();
                        $(".mainerr").show();
                    },300);
                    $(".maintrue,#select-user").hide();
                    $(".seconderr").hide();
                    $(".thirderr").hide();
                    $(".mainChange").show();
                    $(".mainfirst").show();
                }else{
                    $(".mainerr").hide();
                    $(".maintrue,#select-user").hide();
                }
            }else{
                //有些人所有大区都没有角色 所以要有这一步的判断
                timer = setTimeout(function(){
                    $(".mainfirst").hide();
                    $(".mainerr").show();
                    $(".maintrue,#select-user").hide();
                },300);
                $(".thirderr").hide();
                $(".mainfirst").show();
                $(".mainChange").hide();
            }
        }
    });
});
var html1 =`
        <option value="0">请选择大区</option>
        <option value="上海">上海</option>
        <option value="广东">广东</option>
        <option value="北京">北京</option>
        <option value="四川">四川</option>
        <option value="江西">江西</option>
        <option value="湖北">湖北</option>
   `;
var html2 = `
    <option value="-1">请选择服务器</option>
`;
var html3 = `
<option value="-1">请选择角色</option>
`;
//点击x或取消 重置选择框并隐藏
$(".changeTop>a,#nochange").on("click",function(e){
    e.preventDefault();
    $("#select-province").html(html1);
    $("#select-city").html(html2);
    $("#select-user").html(html3);
    $(".mainChange").hide();
    $("#changeUser").hide();
    $("#mlIndex").hide();
});

//点击确定提交大区 和 角色名
$("#changesure").on("click",function(e){
    e.preventDefault();
    //获取三个select 栏各下表的
    var index = $("#select-city").get(0).selectedIndex;
    var index1 = $("#select-user").get(0).selectedIndex;
    var index2 = $("#select-province").get(0).selectedIndex;

    if($("#select-province").children().eq(index2).val()==0){
        $(".mainChange").show();
        $(".seconderr").show().siblings().hide();
    }
    else if($("#select-city").children().eq(index).val()==-1){
        $(".mainChange").show();
        $(".seconderr").show().siblings().hide();
    }
    else if($("#select-user").children().eq(index1).val()==-1){
        $(".mainChange").show();
        $(".thirderr").show().siblings().hide();
    }else{
        console.log($("bindModle").children().eq(2));
        $(".bindModle").children().eq(1).html($("#select-city").children().eq(index).val());
        $(".bindModle").children().eq(2).html($("#select-user").children().eq(index1).val());
        $("#select-province").html(html1);
        $("#select-city").html(html2);
        $("#select-user").html(html3);
        $(".mainChange").hide();
        $("#changeUser").hide();
        $("#mlIndex").hide();
    }
});



//点击创建队伍 出现组建队伍板块
$(".joinTeamBtn").prev().on("click",function(e){
    $(".layer").hide();
    e.preventDefault();
    var timer = setTimeout(function(){
        clearTimeout(timer);
        $("#layer2").show();
    },500);
    $("#mlSecond").show();
});

$(".layerClose").on("click","a",function(e){
    e.preventDefault();
    $("#sTeamName,#sTeamDesc,#sAssistantID").val("");
    $("#mlSecond").hide();
    $(".layer").hide();
    $("#layer2").hide();
    $("#iArea").children().eq(0).attr("selected",true).removeAttr("selected");
    $("#iPos").children().eq(0).attr("selected",true).removeAttr("selected");
});
//检测用户名是否重复
$(".checkName").on("click",function(e){
    e.preventDefault();
    var tname = $("#sTeamName").val();
    var reg= /^[A-Za-z0-9\u4e00-\u9fa5]{2,8}$/;
    if(reg.test(tname)){
        $.ajax({
            url:"http://localhost:3000/indexdpl/tnamecheck",
            type:"post",
            data:{tname},
            dataType:"json",
            success:function(data){
                if(data.code==400){
                    alert("队伍名称已被使用");
                }else if(data.code==100) {
                    alert("队伍名称可用");
                }
            }
        })
    }else{
        alert("对不起,队伍名称必须是2-10位字符");
    }
});
//确认创建队伍
$(".createTeamBtn").on("click",function(e) {
    e.preventDefault();
    var user_name = $("#user_name").html();
    var tname = $("#sTeamName").val();
    var iArea = $("#iArea").val();
    var iPos = $("#iPos").val();
    var tInfo = $("#sTeamDesc").val();
    var reg = /^[A-Za-z0-9\u4e00-\u9fa5!,，。.]{2,50}$/;
    var uname = $("#login_qq_span").html();
    var mainC="";
    var secondC="";
    var helpC="";
    var naiC="";
    if(iPos==1){
        mainC = user_name;
    }
    if(iPos==2){
        secondC = user_name;
    }
    if(iPos==3){
        helpC = user_name;
    }
    if(iPos==4){
        naiC = user_name;
    }
    if(iArea==1){
        iArea = "华北";
    }else if(iArea==2){
        iArea = "华东";
    }else if(iArea==3){
        iArea = "华南";
    }else if(iArea==4){
        iArea = "华西";
    }
    if(!reg.test(tInfo)){
        alert("队伍介绍必须是2-50位字符");
    }else{
        $.ajax({
            url: "http://localhost:3000/indexdpl/teamRegister",
            type: "post",
            data: {uname,tname,iArea,iPos,tInfo,user_name,mainC,secondC,helpC,naiC},
            dataType: "json",
            success: function (data) {
                if(data.code==100){
                    alert("创建队伍成功");
                    $("#sTeamName,#sTeamDesc,#sAssistantID").val("");
                    $("#iArea").children().eq(0).attr("selected",true).removeAttr("selected");
                    $("#iPos").children().eq(0).attr("selected",true).removeAttr("selected");
                    $("#mlSecond").hide();
                    $("#layer2").hide();
                    // 利用sql语句 将两个表中 队伍id 绑定相同 以下部分不用了
                    //$(".layerClose").on("click","a",function(e){
                    //    e.preventDefault();
                    //    $.ajax({
                    //        url: "http://localhost:3000/indexdpl/teamId",
                    //        type: "post",
                    //        data: {tname,uname},
                    //        dataType: "json",
                    //        success: function (data) {
                    //            if(data.code==100){
                    //                alert("改数据成功");
                    //            }
                    //        }
                    //    })
                    //})
                }
            }
        });
    }
});




//加入队伍按键跳转（大按钮）
$(".createMyteam").siblings().on("click",function(e){
    e.preventDefault();
    var $join =  $(".joinTeamStep>.joinTeamBtn");
    var $teamList = $(".teamList");
    var $timer =null;
    var $target = $teamList.prop("offsetTop");
    var $leader = $join.prop("offsetTop");
    clearInterval($timer);
    $timer = setInterval(function () {
        var $step = ($target-$leader)/10;
        $step = $step>0?Math.ceil($step):Math.floor($step);
        $leader = $leader + $step;
        window.scrollTo(0,$leader);
        if(Math.abs($target-$leader)<=Math.abs($step)){
            window.scrollTo(0,$target);
            clearInterval($timer);
        }
    },15);
    //  window.scrollTo(0,$teamList.prop("offsetTop"));
});

// dplGiftTab切换
$("ul.dplGiftTabT").on("click","a",function(e){
    e.preventDefault();
    var $tar= $(this);
    $tar.parent().addClass("cur")
        .siblings().removeClass("cur");
    var id = $tar.attr("href");
    $(`${id}`).css("display","block").siblings().css("display","none");

});


//楼层跳跃
var $divLift=$(".navbtns");
$(window).scroll(function(){
    var $fs = $(".partTo");
    var $f1 = $fs.first();
    var scrollTop = $("html,body").scrollTop();
    var offsetTop = $f1.offset().top;
    if(innerHeight/1.3+scrollTop>offsetTop){
        $divLift.removeClass("d-none");
    }else{
        $divLift.addClass("d-none");
        $(".navbtn").css({"opacity":"0.5","background":"#0aa1ed"})
    }
});
$divLift.on("click","li",function(){
    var i = $(this).index();
    var offsetTop = $(`.partTo:eq(${i})`).offset().top;
    $("html,body").animate({
        scrollTop:offsetTop+"px"
    },200);
});


//(function(){
//    $.ajax({
//        url:"http://localhost:3000/indexdpl/teams",
//        type:"post",
//        data:{},
//        dataType:"json"
//    }).then(result=>{
//        if(result.code==100){
//            for(var i = 0;i<result.teams.length;i++){
//                var {tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC} = result.teams[i];
//                console.log(tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC);
//                $(".teamName").eq(i-1).html(tname);
//                if(mainC==""){
//                    mainC = "空缺";
//                }
//                if(secondC==""){
//                    secondC="空缺";
//                }
//                if(helpC==""){
//                    helpC="空缺";
//                }
//                if(naiC==""){
//                    naiC ="空缺";
//                }
//               $(".mainC").eq(i-1).html(mainC);
//                $(".secondC").eq(i-1).html(secondC);
//                $(".helpC").eq(i-1).html(helpC);
//                $(".naiC").eq(i-1).html(naiC);
//               var html =`
//                    <span>队伍简介：</span>${result.teams[i].tInfo}
//                `;
//                $(".teamIntro").eq(i-1).html(html);
//                var html1 =`
//                     <em>队伍编号：</em>
//                            <span>${tid}</span>
//                `;
//                $(".teamNumber").eq(i-1).html(html1);
//                $(".teamArea").eq(i-1).html(iArea);
//            }
//        }
//    });

    //$.ajax({
    //    url:"http://localhost:3000/indexdpl/users",
    //    type:"post",
    //    data:{},
    //    dataType:"json"
    //}).then(result=>{
    //    if(result.code==100){
    //        for(var i=0;i<=result.users.length-1;i++){
    //            var {iPos,tname,teamid,uimage,user_name} = result.users[i];
    //           // console.log(iPos,tname,teamid,uimage,user_name);
    //            for(var j=0;j<=result.users.length-1;j++){
    //                if($(".teamName").eq(j).html()==tname){
    //                    if(iPos=="1"){
    //                        $(".mainCimg").eq(j).html(`<img src="${uimage}"/>`)
    //                    }else if(iPos=="2"){
    //                        $(".secondCimg").eq(j).html( `<img src="${uimage}"/>`)
    //                    }else if(iPos=="3"){
    //                        $(".helpCimg").eq(j).html( `<img src="${uimage}"/>`)
    //                    }else if(iPos=="4"){
    //                        $(".naiCimg").eq(j).html ( `<img src="${uimage}"/>`)
    //                    }
    //                }
    //            }
    //
    //        }
    //    }
    //})

function teamSeach(pno=0){
    $.ajax({
        url:"http://localhost:3000/indexdpl/teams",
        type:"post",
        data:{pno},
        dataType:"json"
    }).then(result=>{
        if(result.code==100){
            var html ="";
            for(var i = 0;i<result.teams.length;i++){
                //console.log(result.teams.length);
                var {tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC} = result.teams[i];
                //console.log(tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC);
                $(".teamName").eq(i-1).html(tname);
                if(mainC==""){
                    mainC = "空缺";
                }
                if(secondC==""){
                    secondC="空缺";
                }
                if(helpC==""){
                    helpC="空缺";
                }
                if(naiC==""){
                    naiC ="空缺";
                }
                 html += `<div class="sprite team">
                 <h4 class="teamName">${tname}</h4>
                        <ul class="teamInfo">
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy mainCimg" >
                                    <!--<img src="../img/second-page/1.jpg" alt=""/>-->
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">主C</div>
                                <div class="teamMenberId mainC">${mainC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy secondCimg">
                                    <span class=""  onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">副C</div>
                                <div class="teamMenberId secondC">${secondC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy helpCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">辅助</div>
                                <div class="teamMenberId helpC">${helpC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy naiCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">奶</div>
                                <div class="teamMenberId naiC">${naiC}</div>
                            </li>
                        </ul>
                        <div class="teamIntro">
                            <span>队伍简介：</span>${tInfo}
                        </div>
                        <div class="teamNumber">
                            <em>队伍编号：</em>
                            <span>${tid}</span>
                        </div>
                        <div class="teamArea">${iArea}</div>
                     </div>   `;

                //$(".mainC").eq(i-1).html(mainC);
                //$(".secondC").eq(i-1).html(secondC);
                //$(".helpC").eq(i-1).html(helpC);
                //$(".naiC").eq(i-1).html(naiC);
                //var html =`
                //    <span>队伍简介：</span>${result.teams[i].tInfo}
                //`;
                //$(".teamIntro").eq(i-1).html(html);
                //var html1 =`
                //     <em>队伍编号：</em>
                //            <span>${tid}</span>
                //`;
                //$(".teamNumber").eq(i-1).html(html1);
                //$(".teamArea").eq(i-1).html(iArea);
            }
            $(".teams").html(html);
            $.ajax({
                url:"http://localhost:3000/indexdpl/users",
                type:"post",
                data:{},
                dataType:"json"
            }).then(result=>{
                if(result.code==100){
                    for(var i=0;i<=result.users.length-1;i++){
                        var {iPos,tname,teamid,uimage,user_name} = result.users[i];
                       // console.log(iPos,tname,teamid,uimage,user_name);
                        for(var j=0;j<=result.users.length-1;j++){
                            if($(".teamName").eq(j).html()==tname){
                                if(iPos=="1"){
                                    $(".mainCimg").eq(j).html(`<img src="${uimage}"/>`)
                                }else if(iPos=="2"){
                                    $(".secondCimg").eq(j).html( `<img src="${uimage}"/>`)
                                }else if(iPos=="3"){
                                    $(".helpCimg").eq(j).html( `<img src="${uimage}"/>`)
                                }else if(iPos=="4"){
                                    $(".naiCimg").eq(j).html( `<img src="${uimage}"/>`)
                                }
                            }
                        }
                    }

                }

            })
        }

    });
}
//默认先执行一次
teamSeach();


//点击 我的队伍 发送数据请求判断是否此账号有队伍
//没有弹出提示窗 我要组建队伍或者我要加入队伍
$(".btnMyTeam").on("click",function(e){
    e.preventDefault();
    var uname = $("#login_qq_span").html();
    $.ajax({
        url: "http://localhost:3000/indexdpl/hasTeam",
        type: "post",
        data: {uname},
        dataType: "json",
        success: function (data) {
            if(data.code==100){
                alert("已有团队");

            }else{
                $("#layer1").show();
                $("#mlSecond").show();
                $(".btnType4").on("click",function(e){
                    e.preventDefault();
                    $("#layer1").hide();
                    $("#mlSecond").hide();
                    var $join =  $(".btnType4");
                    var $teamList = $(".teamList");
                    var $timer =null;
                    var $target = $teamList.offset().top;
                    var $leader = $join.offset().top;
                    clearInterval($timer);
                    $timer = setInterval(function () {
                        var $step = ($target-$leader)/10;
                        $step = $step>0?Math.ceil($step):Math.floor($step);
                        $leader = $leader + $step;
                        window.scrollTo(0,$leader);
                        if(Math.abs($target-$leader)<=Math.abs($step)){
                            window.scrollTo(0,$target);
                            clearInterval($timer);
                        }
                    },15);
                })
            }
        }
    })
});





function vipSearch(){
    $.ajax({
        url: "http://localhost:3000/indexdpl/isVip",
        type: "post",
        data: {},
        dataType: "json",
        success: function (data) {
            if(data.code==100){
                //console.log(data.teams);
                var html ="";
                //通过队伍个数进行遍历
                for(var i = 0;i<data.teams.length;i++) {
                    //console.log(result.teams.length);
                    var {tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC} = data.teams[i];
                    //console.log(tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC);
                    $(".teamName").eq(i - 1).html(tname);
                    if (mainC == "") {
                        mainC = "空缺";
                    }
                    if (secondC == "") {
                        secondC = "空缺";
                    }
                    if (helpC == "") {
                        helpC = "空缺";
                    }
                    if (naiC == "") {
                        naiC = "空缺";
                    }
                    html += `<div class="sprite team">
                 <h4 class="teamName">${tname}</h4>
                        <ul class="teamInfo">
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy mainCimg" >
                                    <!--<img src="../img/second-page/1.jpg" alt=""/>-->
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">主C</div>
                                <div class="teamMenberId mainC">${mainC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy secondCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">副C</div>
                                <div class="teamMenberId secondC">${secondC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy helpCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">辅助</div>
                                <div class="teamMenberId helpC">${helpC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy naiCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">奶</div>
                                <div class="teamMenberId naiC">${naiC}</div>
                            </li>
                        </ul>
                        <div class="teamIntro">
                            <span>队伍简介：</span>${tInfo}
                        </div>
                        <div class="teamNumber">
                            <em>队伍编号：</em>
                            <span>${tid}</span>
                        </div>
                        <div class="teamArea">${iArea}</div>
                       <div class="sprite bindTeam">
                            <a href="#">挂靠队伍</a>
                       </div>
                     </div>   `;
                }
                $(".teams").html(html);
                for(var i=0;i<=data.users.length-1;i++){
                    var {iPos,tname,teamid,uimage,user_name} = data.users[i];
                    // console.log(iPos,tname,teamid,uimage,user_name);
                    for(var j=0;j<=data.users.length-1;j++){
                        if($(".teamName").eq(j).html()==tname){
                            if(iPos=="1"){
                                $(".mainCimg").eq(j).html(`<img src="${uimage}"/>`)
                            }else if(iPos=="2"){
                                $(".secondCimg").eq(j).html( `<img src="${uimage}"/>`)
                            }else if(iPos=="3"){
                                $(".helpCimg").eq(j).html( `<img src="${uimage}"/>`)
                            }else if(iPos=="4"){
                                $(".naiCimg").eq(j).html ( `<img src="${uimage}"/>`)
                            }
                        }
                    }
                }


            }else{
                alert("没有团队");
                //没有团队弹出
            }
        }
    })
}


// Teams 板块中的点击 +号触发事件
function teamMemberHeadClick(){

}


function searchBtn(i){
    var isVip;
    if(i==1||i==3){
        isVip = 1;
    }else{
        isVip = undefined;
    }
    var timer = null;
    timer = setTimeout(function(){
        clearTimeout(timer);
        $("#mlIndex").hide();
    },200);
    $("#mlIndex").show();
    var iArea = $("#searchArea").val();
    if(iArea==1){
        iArea = "华北";
    }else if(iArea==2){
        iArea = "华东";
    }else if(iArea==3){
        iArea = "华南";
    }else if(iArea==4){
        iArea = "华西";
    }
    var iPos = $("#searchPos").val();
    console.log(iArea,iPos,isVip);
    $.ajax({
        url: "http://localhost:3000/indexdpl/searchBtn",
        type: "post",
        data: {iArea,iPos,isVip},
        dataType: "json",
        success: function (data) {
            if(data.code==100){
                //console.log(data.teams);
                var html ="";
                //通过队伍个数进行遍历
                for(var i = 0;i<data.teams.length;i++){
                    //console.log(result.teams.length);
                    var {tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC} = data.teams[i];
                    //console.log(tid,tname,tInfo,iArea,mainC,secondC,helpC,naiC);
                    $(".teamName").eq(i-1).html(tname);
                    if (mainC == "") {
                        mainC = "空缺";
                    }
                    if (secondC == "") {
                        secondC = "空缺";
                    }
                    if (helpC == "") {
                        helpC = "空缺";
                    }
                    if (naiC == "") {
                        naiC = "空缺";
                    }
                    html += `<div class="sprite team">
                 <h4 class="teamName">${tname}</h4>
                        <ul class="teamInfo">
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy mainCimg" >
                                    <!--<img src="../img/second-page/1.jpg" alt=""/>-->
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">主C</div>
                                <div class="teamMenberId mainC">${mainC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy secondCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">副C</div>
                                <div class="teamMenberId secondC">${secondC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy helpCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">辅助</div>
                                <div class="teamMenberId helpC">${helpC}</div>
                            </li>
                            <li>
                                <div class="teamMemberHead teamMemberHeadVacancy naiCimg" >
                                    <span class="" onclick="teamMemberHeadClick()">+</span>
                                </div>
                                <div class="teamMemberRole">奶</div>
                                <div class="teamMenberId naiC">${naiC}</div>
                            </li>
                        </ul>
                        <div class="teamIntro">
                            <span>队伍简介：</span>${tInfo}
                        </div>
                        <div class="teamNumber">
                            <em>队伍编号：</em>
                            <span>${tid}</span>
                        </div>
                        <div class="teamArea">${iArea}</div>
                       <div class="sprite bindTeam " style="display: none">
                            <a href="#">挂靠队伍</a>
                       </div>
                     </div>   `;
                }
                $(".teams").html(html);
                if(isVip==1){
                    $(".bindTeam").show();
                }
                for(var i=0;i<=data.users.length-1;i++){
                    var {iPos,tname,teamid,uimage,user_name} = data.users[i];
                    // console.log(iPos,tname,teamid,uimage,user_name);
                    for(var j=0;j<=data.users.length-1;j++){
                        if($(".teamName").eq(j).html()==tname){
                            if(iPos=="1"){
                                $(".mainCimg").eq(j).html(`<img src="${uimage}"/>`)
                            }else if(iPos=="2"){
                                $(".secondCimg").eq(j).html( `<img src="${uimage}"/>`)
                            }else if(iPos=="3"){
                                $(".helpCimg").eq(j).html( `<img src="${uimage}"/>`)
                            }else if(iPos=="4"){
                                $(".naiCimg").eq(j).html ( `<img src="${uimage}"/>`)
                            }
                        }
                    }
                }
            }else{
                alert("没有团队");
                //没有团队弹出
            }
        }
    })
}
//dplteamList 切换
$("#teamTab").on("click","a",function(e){
    e.preventDefault();
    $("#searchPos").children().eq(0).attr("selected",true).removeAttr("selected");
    var $tar= $(this);
    var i =$("ul.tab>li>a").index(this);
    $tar.parent().addClass("cur")
        .siblings().removeClass("cur");
    var id = $tar.attr("href");
    if(i==1||i==3){
        vipSearch();
        $(".bindTeam").show();
        $(".search").children("li:nth-child(2)").css("display","none");
        $("#tabPage1").css("display","none")
            .parent()
            .children("div:last-child").css("display","block");
        $(".addBtn").eq(0).unbind("click").on("click",function(e){
            e.preventDefault();
            searchBtn(i);
        });

    }else if(i==0){
        teamSeach();
        $(".bindTeam").hide();
        $(".search").children("li:nth-child(2)").css("display","block");
        $("#tabPage1").css("display","block")
            .parent()
            .children("div:last-child").css("display","none");
        $(".addBtn").eq(0).unbind("click").on("click",function(e){
            e.preventDefault();
            searchBtn(i);
        });
    }else if(i==2){
        teamSeach();
        $(".bindTeam").hide();
        $(".search").children("li:nth-child(2)").css("display","block");
        $("#tabPage1").css("display","none")
            .parent()
            .children("div:last-child").css("display","block");
        $(".addBtn").eq(0).unbind("click").on("click",function(e){
            e.preventDefault();
            searchBtn(i);
        });
    }
});
(function(){
    $(".addBtn").eq(0).unbind("click").on("click",function(e){
        e.preventDefault();
        searchBtn();
    });
})();










