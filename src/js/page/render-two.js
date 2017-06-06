var Swiper=require('../lib/swiper.min.js');
var $=require('../lib/jquery-2.1.1.min.js');
$(function() {
	var tm = {
		tm1: function() {
			this.tm2();
			this.tm3();
			this.tm4();
			this.tm5();
		},
		tm2: function() {
			var swiperH = new Swiper('.tmc_jr1 .swiper-container', {
				pagination: '.tmc_jr1 .swiper-pagination',
				paginationClickable: true,
				spaceBetween: 5,
				autoplay: 1000
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
			var cha = null;
			var timer = null;

			function getCha() {
				var date = new Date();
				var weilai = new Date('2017-6-5 22:00:00');
				cha = weilai.getTime() - date.getTime(); //毫秒

				//    时
				var hour = Math.floor(cha / (1000 * 60 * 60));
				var hours = hour * 60 * 60 * 1000;
				var cha1 = cha - hours;
				//分
				var min = Math.floor(cha1 / (1000 * 60));
				var mins = min * 60 * 1000;
				var cha2 = cha1 - mins;
				//秒
				var se = Math.floor(cha2 / 1000);
				//毫秒、
				var hm = Math.floor(cha % 10);

				return zero(hour) + ':' + zero(min) + ':' + zero(se) + ':' + hm;
			}

			function zero(n) {
				return n = n < 10 ? '0' + n : n;
			}
			var odiv = document.getElementById('odiv');
			odiv.innerHTML = '距离目标: ' + getCha();
			if(cha <= 0) {
				clearInterval(timer);
				odiv.innerHTML = '时间到了';
			}
			timer = window.setInterval(function() {
				odiv.innerHTML = '距离目标: ' + getCha();
				if(cha <= 0) {
					clearInterval(timer);
					odiv.innerHTML = '时间到了';
				}
			}, 100);
		},
		tm5: function() {
			$(".tm_nav ul>li>a").click(function() {
				$(this).addClass('tmn_a').parent().siblings().children('a').removeClass('tmn_a');
				//console.log($(this).parent().index());
				index = $(this).parent().index();
				$(".tm_conten>div").eq(index).show().siblings().hide();
			})
		}
	}
	tm.tm1();
})