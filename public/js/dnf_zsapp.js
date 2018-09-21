
   $(window).scroll(function(){
        var scrollTop = $("html,body").scrollTop();
        if(scrollTop<700){
            $(".mt").css("display","none");
        }
        if(scrollTop>700){
            console.log(1);
            $(".c1").css("display","block").addClass("ani");
        }
       if(scrollTop>1550){
           $(".c2").css("display","block").addClass("ani");
       }
       if(scrollTop>2350){
           $(".c3").css("display","block").addClass("ani");
       }
       if(scrollTop>3000){
           $(".c4").css("display","block").addClass("ani");
       }
       if(scrollTop>4000){
           $(".c5").css("display","block").addClass("ani");
       }
       if(scrollTop>4500    ){
           $(".c6").css("display","block").addClass("ani");
       }
    });


