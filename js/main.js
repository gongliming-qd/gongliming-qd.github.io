
// 加载飞入
(function(){

    // 1.顶部部分
    $('.head_top_in').css({animation:'bounceInLeft 1s'});
       // 1.1 logo点击下坠
    $('.head_top_left').click(function(){
        $('.head_top_left').css({animation:'hinge 1s 1'} );
        setTimeout(function(){
            $('.head_top_left').css({animation:''} );
        },2000)

       
    })

    // 最左边的小姐姐的飞入
    $('.main_left_in_slide').css({animation:'bounceInDown 1s'})
    // 右边的下载等部分
    $('.main_left_in').css({animation:'bounceInUp 1s'});
     $('.download').css({animation:'swing 4s'})
     $('.main_left_newp').css({animation:'swing 2s'})
     $('.main_left_in_somecenter').css({animation:'swing 2s'})
     $('.main_left_in_daoju').css({animation:'swing 2s'})
     $('.main_left_in_zuan').css({animation:'swing 2s'})
    
    // 中间内容部分
    // 顶部导航
    $('.main_right_nav').css({animation:'bounceInRight 1s'});
    $('.super_btn').css({animation:'bounceInRight 0.5s'});
    //中间部分最上面
    $('.main_content_top').css({animation:'bounceInRight 1.5s'});
    $('.main_content_top_scroll').css({animation:'swing 3s'})
    $('.main_content_top_center').css({animation:'bounceInUp 3s'})
    $('.main_content_top_center').css({animation:'swing 1s'})
    $('.main_content_top_right').css({animation:'swing 3s'})

    // 需要滚动以后加载
    $(window).scroll(function(){
        var now_scroll = $(window).scrollTop();
        console.log(now_scroll);
        $('.gonglue_content_main_left').hide()
        $('.gonglue_content_main_center').hide()
        $('.gonglue_content_main_right').hide()
        if(now_scroll>=400){
            $('.gonglue_content_main_left').show()
            $('.gonglue_content_main_center').show()
            $('.gonglue_content_main_right').show()
            $('.main_content_gonglue_title').css({animation:'bounceInLeft 1s'})
            $('.gonglue_content_main_left').css({animation:'bounceInLeft 1s'})
            $('.gonglue_content_main_center').css({animation:'swing 1s'})
            $('.gonglue_content_main_right').css({animation:'lightSpeedIn 1s'})
        }
        $('.main_content_linzhi_title').hide()
        $('.linzhi_content_main_left').hide()
        $('.linzhi_content_main_center').hide()
        $('.linzhi_content_main_right').hide()

        if(now_scroll>=700){
            $('.main_content_linzhi_title').show()
            $('.linzhi_content_main_left').show()
            $('.linzhi_content_main_center').show()
            $('.linzhi_content_main_right').show()
            $('.main_content_linzhi_title').css({animation:'bounceInLeft 1s'})
            $('.linzhi_content_main_left').css({animation:'bounceInLeft 1s'})
            $('.linzhi_content_main_center').css({animation:'swing 1s'})
            $('.linzhi_content_main_right').css({animation:'lightSpeedIn 1s'})
        }

        if(now_scroll>=1050){
            $('.main_content_bangben').show()
            $('.main_content_bangben').css({animation:'jackInTheBox 1s'})
        }

        $('.footer').hide()
        if(now_scroll>=1100){
            $('.footer').show()
            $('.footer').css({animation:'rollIn 1s'})
        }
        
    })

})();

// 左边特效
(function(){


})();

// 导航栏
(function(){
    // 导航栏
    function col_top_nav(){
        this.btn = $('.main_right_nav');
        this.centent = $('.main_right_nav_c');
        this.zhezhao = $('.main_right_nav_zz');
    }
    // 控制导航栏的出现隐藏
    col_top_nav.prototype.content_show = function(){
        this.btn.mouseenter(function(){
            this.centent.stop(true,true).slideDown();
            this.zhezhao.stop(true,true).slideDown();
        }.bind(this))
    }
    // 控制导航栏的消失
    col_top_nav.prototype.content_hide = function(){
        $('.main_right_nav').mouseleave(function(){
            this.centent.stop(true,false).slideUp();
            this.zhezhao.stop(true,false).slideUp();
        }.bind(this))
    }
    // 控制a标签的样式
    col_top_nav.prototype.content_a = function(){
        $('.main_right_nav_c>div>a').mouseenter(function(){
            $(this).css({display:'block',background:'orangered',color:'white',padding:'1px 1px'})
            $(this).siblings().css({display:'',background:'',color:'',padding:''})
            $(this).parent().siblings().children('a').css({display:'',background:'',color:'',padding:''})
        })
        $('.main_right_nav_c>div>a').mouseleave(function(){
            $(this).css({display:'',background:'',color:'',padding:''})
            
        });
    }
   $(function(){
    var col_top_nav1 = new col_top_nav();
    col_top_nav1.content_show();
    col_top_nav1.content_hide();
    col_top_nav1.content_a();
   })
   
})(window);


// 控制轮播图
(function(w){
    $(function(){

        // 控制轮播图
        var father = $('.main_content_top_scroll');
        var mySwiper = new Swiper ('#swiper1', {
            
            loop: true, // 循环模式选项
            
           
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
            autoplay: {
                delay: 2000,
                 stopOnLastSlide: false,
                 disableOnInteraction: false,
                },
            
          })    
          


           // 控制轮播图
           var mySwiper2 = new Swiper ('#swiper2', {
               loop: true, // 循环模式选项
               // 如果需要分页器
               pagination: {
                 el: '.swiper-pagination',
                 type : 'custom',
                 clickable :true,
                 renderCustom: function (swiper,current, total) {
                    $('.my_fenye>div').eq(current-1).addClass('my_fenye_vip').siblings().removeClass('my_fenye_vip');
                    $('.my_fenye>div').click(function(){
                        var index1 = $(this).index();
                        mySwiper2.slideTo(index1+1)
                        
                        
                    })
                  }
               },
               autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                   },
               
             }) 

    })

})(window);


// 灵芝圈社区选项卡
(function(){
    $(function(){
        $('.content_main_left_nav>li').mouseenter(function(){
            var index = $(this).index();
            $(this).css({background:'red'}).siblings().css({background:'pink'})
            $('.content_main_left_c>ul').eq(index).fadeIn().siblings().hide()
        })
    })
})();

// 最顶部部分
(function(){
     //选项卡1控制
     $(function(){
        $('.content_top_1nav>a').mouseenter(function(){
            var index = $(this).index();
            $(this).css({color:'orange'}).siblings().css({color:'black'})
            $('.content_top_1centent>ul').eq(index).fadeIn().siblings().hide()
        })
    })

    //选项卡2控制
    $(function(){

        $('.content_top_2nav>a').mouseenter(function(){
            var index = $(this).index();
            $(this).css({color:'orange'}).siblings().css({color:'black'})
            $('.content_top_2centent>img').eq(index).fadeIn().siblings().hide()
        })
    })
})();


// 版本中心部分
(function(){

    $(function(){
        
        var father = $('.main_content_bangben_content')
        var son = $('.content_bangben_content_in')
        son.html(son.html() + son.html())
        $('.content_bangben_content_in>ul').eq(14).hide();
        $('.content_bangben_content_in>ul').eq(15).hide();
        left_win = son.width() / 2 ;

        var timer = null; 

        var nows = 0;

       function move(){
         timer =  setInterval(function(){
            son.css({left : nows -= 2})
            if(-left_win > nows){
                console.log(111);
                nows = 0;
                son.css({left :0})
            }
        },10)
       }

     
       move()

       father.mouseenter(function(){
           clearInterval(timer);
       })
       father.mouseleave(function(){
        move()
    })



    })
})();
