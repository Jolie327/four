     var swiper=require("../lib/swiper.min.js")
      $(function(){
        var sunings={
        	consoller:function(){
        		this.headbg();
        		this.swips();
        		this.dtime();
        	},
        	headbg:function(){
        		$(window).scroll(function() {
		            if($(window).scrollTop() >= 50) {
		                $("#shoubg").addClass("seach-bg");
		            }else{
		                var $cur = $("#shoubg");
		                $cur.removeClass("seach-bg");
		//              current = $(this);
		            }
		        })
        	},
        	swips:function(){
        		 var swiper = new Swiper('.pict .swiper-container', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 1,
			        paginationClickable: true,
			        spaceBetween: 0,
			        loop: true,
			        autoplay:1000
			    });
			    
			     var swipers = new Swiper(' .qiang .bottom .swiper-container', {
			        slidesPerView: 3.1,
			        paginationClickable: true,
			        spaceBetween: 5
			    });
        	},
        	dtime:function(){
        		function times(){
				   	var endtime=new Date('2017/06/06 24:00:00');
				   	var strtime=new Date();
				   	var t=endtime.getTime()-strtime.getTime();
				   	var d=0;
					var h=0;
					var m=0;
					var s=0;
					if(t>=0){
						d=Math.floor(t/1000/60/60/24);
						h=Math.floor(t/1000/60/60%24);
						m=Math.floor(t/1000/60%60);
						s=Math.floor(t/1000%60);
						
					}
					$('#sp2').html(zero(h));
					$('#sp3').html(zero(m));
					$('#sp4').html(zero(s));
			   }
			   
			function zero(n){
					return n=n<10?'0'+n:n;
			}
				 setInterval(times,1000);
        	}
        }
        
        sunings.consoller();
    });
     
    
     
    
    
    
    
   