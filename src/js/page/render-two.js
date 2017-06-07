//var Swiper=require('../lib/swiper.min.js');
//var $=require('../lib/jquery-2.1.1.min.js');
$(function() {
	var tm = {
		tm1: function() {
			this.tm2();
			this.tm3();
			this.tm4();
			this.tm5();
		},
		tm2: function() {
//			var swiperH = new Swiper('.tmc_jr1 .swiper-container', {
//				pagination: '.tmc_jr1 .swiper-pagination',
//				paginationClickable: true,
//				spaceBetween: 5,
//				autoplayDisableOnInteraction: false,
//				autoplay: 1000
//			});
//			
			
			var mySwiper = new Swiper('.tmc_jr1 .swiper-container', {
			    slidesPerView: 1,
			    spaceBetween: 20,
			    autoplay: 1000,
			    pagination: '.swiper-pagination',
			    observer:true,//修改swiper自己或子元素时，自动初始化swiper 
			    observeParents:true,//修改swiper的父元素时，自动初始化swiper 
			    autoplayDisableOnInteraction: false,
			    onSlideChangeEnd: function(swiper){ 
			        swiper.update(); //swiper更新
			    } 
			});
		},
		tm3: function() {
			var swiper = new Swiper('.tmc_jr2 .swiper-container', {
				pagination: '.tmc_jr2 .swiper-pagination',
				slidesPerView: 3.5,
				paginationClickable: true,
				// spaceBetween:10
			});
		},
		tm4: function() {
			 function times(){
				   	var endtime=new Date('2017/06/07 24:00:00');
				   	var strtime=new Date();
				   	var t=endtime.getTime()-strtime.getTime();				   
					var h=0;
					var m=0;
					var s=0;
					if(t>=0){
						h=Math.floor(t/1000/60/60%24);
						m=Math.floor(t/1000/60%60);
						s=Math.floor(t/1000%60);
						ss=Math.floor(t%100);							
					}
					$('.tmsp2').html(zero(h));
					$('.tmsp3').html(zero(m));
					$('.tmsp4').html(zero(s));
					$('.tmsp5').html(zero(ss));
			  }
			function zero(n){
					return n=n<10?'0'+n:n;
			}
				 setInterval(times,70);


		},
		tm5: function() {
			$(".tm_nav ul>li").click(function() {
				$(this).addClass('tmn_a').siblings().removeClass('tmn_a');
				//console.log($(this).parent().index());
//				var index = $(this).parent().index();
				$(".tm_conten .tmc_jr").eq($(this).index()).show().siblings(".tm_conten .tmc_jr").hide();
			})
		}
	}
	tm.tm1();
})