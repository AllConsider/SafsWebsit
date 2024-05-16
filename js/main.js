$(document).ready(function(){   
    // 侧边栏滑动模块
    (function(){
        var sidebar=$('.sidebar');
        var mask=$('.mask');
        var sidebar_trigger=$('.sidebar_trigger');
        var showSidebar=function(){
            mask.fadeIn();
            sidebar.animate({'right':0});
        }
        var hideSidebar=function(){
            mask.fadeOut();
            sidebar.css('right',-sidebar.width());
        }
        sidebar_trigger.bind('click',showSidebar);
        mask.bind('click',hideSidebar);
    })();
    //返回顶部模块
    (function(){
        var isPC=function(){
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            if(window.screen.width>=768){
                 flag = true;           
            }
            return flag;
            
            };
        if(isPC()){
            //如果是PC端，就出现back2top
            var backtotop=$('.back-to-top');
            var mainbox=$('.mainbox');
            var innerbox=$('.innerbox');
            // var feature=$('.feature-content');
            // feature.hover(function(){
            //     console.log(feature)
            // },function(){
            //     console.log(2)
            // });
            backtotop.bind('click', function(){
                $('html,body').animate({scrollTop:0},800)
            });
            
            $(window).on('scroll',function(){
                console.log($(window).scrollTop())
                if($(window).scrollTop()>400){
                    backtotop.fadeIn();
                    mainbox.addClass('animate')
                }else{
                    backtotop.fadeOut();
                    mainbox.removeClass('animate');
                }
                if($(window).scrollTop()>1000){
                    innerbox.addClass('animate')
                }else{
                    innerbox.removeClass('animate');
                }
            });
        }else{
            //如果是移动端，就不需要出现back2top
        }       
    })();
    // 招聘信息-下拉手风琴效果
    (function(){
        //全部下拉内容隐藏
        $(".bellows__content-wrapper").hide();
        // 默认第一列展开
        $("#bellows_1").show();
        $(".bellows__header").click(function(){    
            $(this).next().slideDown();
            $(this).parent(".bellows__item").addClass("bellows--is-open");
            $(".bellows__header").not(this).next().slideUp();
            $(".bellows__header").not(this).parent(".bellows__item").removeClass("bellows--is-open");
        });      
    })();
});

$(function(){
    showMap(116.46,27.28); //初始坐标
})

//传入坐标，然后跳转到该位置
function showMap(x, y) { 
    var map = new BMap.Map("mymap");
    map.centerAndZoom(new BMap.Point(x, y), 1); //坐标，放大倍数
    //显示左上角的辅助栏
     map.addControl(new BMap.NavigationControl());
    //创建小红点
    var marker = new BMap.Marker(new BMap.Point(x, y));
    map.addOverlay(marker);
    //穿件创建小红点上的提示框
    var infoWindow = new BMap.InfoWindow("<p>名字:风玡</p><p>phone:12345678911</p>");
    marker.addEventListener("click", function(){
        this.openInfoWindow(infoWindow);
    })

}
