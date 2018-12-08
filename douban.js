$(function (){ 
  var text1="<ul id='sss' style='width: 220px;top: 40px;'>"
       +"<a style='margin-left:-20px;'><img style='margin-top:70px;width:100px; height:100px; margin-left:40px;' src='file://D:/安装目录/VScode/douban/img/doubanlogo.png'/></a>"
       +"<h3 style='margin-left:45px;'>豆瓣</h3>"
       +"<a></a><img style='width:150px; height:150px; margin-left:-5px; margin-top:20px; margin-bottom:20px' src='file://D:/安装目录/VScode/douban/img/pin.png'/></a>"
       +"<div style='margin-top=20px;'><h6 style='display:inline; margin-left:25px;'>iphone&nbsp;-</h6> <h6 style='display:inline;'>&nbsp;android</h6></div>"


       var text2="<ul id='sss' style='width: 220px;top: 40px;'>"
       +"<span style='margin-left:-40px; font-size:16px;'>毒液：致命守护者</span><br/>"
       +"<span style='margin-left:-40px; font-size:16px;'>Venom&nbsp;<span style='font-size:12px;color:gray;'>2018</span></span><br/>"
       +"<button type='button' class='btn btn-default btn-lg' style='margin-left:-40px;'><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star eee' aria-hidden='true'></span><span style='color:orange'>&nbsp;&nbsp;8.0&nbsp;&nbsp;</span></span><span style='color:black'>(219793人评价)</span></button><br/>"
       +"<span style='margin-left:-40px; font-size:12px;'>  107分钟（中国大陆）&nbsp;&nbsp;美国</span><br/>"
       +"<span style='margin-left:-40px; font-size:12px;'>导演&nbsp;&nbsp;鲁本·弗雷斯彻</span><br/>"
       +"<div style='width:150px;'><span style='margin-left:-40px; font-size:12px;'>主演&nbsp;&nbsp;汤姆·哈迪 / 米歇尔·威廉姆斯 / 里兹·阿迈德</span></div>"
$("#eeee").popover({  
  trigger:'click',//manual 触发方式
  placement : 'bottom',  
/*   title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> Muah ha ha</div>', */
  html: 'true', 
  content : text1,  //这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
  animation: false
}).on("mouseenter", function () {
  var _this = this;
  $(this).popover("show");
  $(this).siblings(".popover").on("mouseleave", function () {
    $(_this).popover('hide');
  });
}).on("mouseleave", function () {
  var _this = this;
  setTimeout(function () {
    if (!$(".popover:hover").length) {
      $(_this).popover("hide")
    }
  }, 100);
});


$("#wwww").popover({  
  trigger:'click',//manual 触发方式
  placement : 'right',  
/*   title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> Muah ha ha</div>', */
  html: 'true', 
  content : text2,  //这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
  animation: false
}).on("mouseenter", function () {
  var _this = this;
  $(this).popover("show");
  $(this).siblings(".popover").on("mouseleave", function () {
    $(_this).popover('hide');
  });
}).on("mouseleave", function () {
  var _this = this;
  setTimeout(function () {
    if (!$(".popover:hover").length) {
      $(_this).popover("hide")
    }
  }, 100);
});
});






/* $(function () {
  var colleaguestring="<img src='/img/doubanlogo.png'>"+
  "<h6 >评论</h6>"+
  "<a >《金刚》</a>";
    $('[data-toggle="popover"]').each(function () {
      var element = $(this);
      var id = element.attr('id');
      var txt = element.html();
      element.popover({
        trigger: 'manual',
        html: true,
        content:colleaguestring,
      }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
          $(_this).popover('hide');
        });
      }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide")
          }
        }, 100);
      });
    });
  }); */
 /*  function ContentMethod(txt) {
    return '<a>dfsdfsfsf</a>' + '';
    
  } */




 
$(function(){
    //获取点击事件的对象
    $(".container-2-h2-nav li").click(function(){
        //获取要显示或隐藏的对象
        var divShow = $(".container-2-carousel-1 .tttt");
        //判断当前对象是否被选中，如果没选中的话进入if循环
        if (!$(this).hasClass('selected')) {
            //获取当前对象的索引
            var index = $(this).index();
            //当前对象添加选中样式并且其同胞移除选中样式；
            $(this).addClass('selected').siblings('li').removeClass('selected');
            //索引对应的div块显示
            $(divShow[index]).show();
            //索引对应的div块的同胞隐藏
            $(divShow[index]).siblings('.tttt').hide();
        }
    });
});