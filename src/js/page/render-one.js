var $=require("../lib/jquery-2.1.1.min.js");
var swiper=require("../lib/swiper.min.js");


$(function () {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10
        // slideToClickedSlide:true
    });
    


    $(".nav-extend").attr("data-types","false");
    $(".nav-extend").click(function () {
        var datatypes=$(this).attr("data-types");
        // console.log(datatypes);

            if(datatypes=="false"){
                $(".ga-nav > .nav-zhe").css("display","block");
                $(".nav-extend").attr("data-types","true").children("div").addClass("nav-toggle2").removeClass("nav-toggle1");
            }else {
                $(".nav-zhe").css("display","none");
                $(".nav-extend").attr("data-types","false").children("div").addClass("nav-toggle1").removeClass("nav-toggle2");
            }
    });


    $(".ga-nav .swiper-slide").click(function () {
        $(this).addClass("options").siblings().removeClass("options");
        var _this=$(this).index();
        console.log(_this);
        var ju= -(_this-1.5)*25+'%';
        $(".swiper-wrapper").css("transform","translateX("+ju+")")
    });

    $(".nav-zhe>ul>li").click(function () {
        var _this=$(this).index();
        $(".nav-extend").attr("data-types","false").children("div").addClass("nav-toggle1").removeClass("nav-toggle2");
        // console.log(_this);
        $(".nav-zhe").css("display","none");
        $(".ga-nav .swiper-slide").eq(_this).addClass("options").siblings().removeClass("options");
        var ju= -(_this-1.5)*25+'%';
        $(".swiper-wrapper").css("transform","translateX("+ju+")")
    });



    // $(window).scroll(function () {
    //     // console.log($(".ga-nav").offset().top-$(window).scrollTop());
    //     var wTop=$(".ga-nav").offset().top-$(window).scrollTop();
    //     var ListH=$(".ga-list").height();
    //     // console.log( $(".ga-list").height());
    //     // console.log($(".ga-nav").position());
    //      if(wTop<=-ListH){
    //          $(".ga-nav").addClass("ga-nav2");
    //      }else {
    //          $(".ga-nav").removeClass("ga-nav2")
    //      }
    // })




});