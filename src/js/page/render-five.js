$(function () {
    var btn1 = $(".fence-main-left-menu li");
    var div1 = $(".fence-main-right-div");
    btn1.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        div1.eq($(this).index()).show().siblings().hide();
    })
});