$(function () {
    $(".management-right .line-btn").on('mouseover',function () {
        $(".management-right li .right-list").show();
    });
    $(".management-right .line-btn").on('mouseout', function () {
        $(".management-right li .right-list").hide();
    });

    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    });

    // 点击搜索输入
    $(".so").on('click','.under-search',function () {
        $('.search-module').show();
    });
    $(".search-module .right-btn").on('click','.cancel',function () {
        $('.search-module').hide();
    });

    $('.right-list p').on("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    //切换菜单栏
    $('.management-right .line-btn .right-list').on("click",".list-text",function(){

        var listTitle = $(this).attr("data-title");
        console.log(listTitle);
        // console.log(listTitle);
        // if(listTitle=="delete"){
        //     $('.all-main').children('.delete').show();
        //     $("#modalbg").show();
        // }else if(listTitle=="review"){
        //     $('.all-main').children('.review').show();
        //     $("#modalbg").show();
        // }else {
        //     $('.all-main').children("."+listTitle).show().siblings().hide();
        // }
        $('.list').find('.'+listTitle).show().siblings().not('.article,.so').hide();
        $("#modulebg").show();
        //  if(listTitle=="edit"){
        //     $('.list').find('.edit .edit-box').show();
        //     $("#modulebg").show();
        // } else if(listTitle=="add"){
        //
        //  } else {
        //     return
        // }
    });
    //编辑框
    $('.edit-box').on("click",".close",function(){
        $('.edit-box').hide();
        $("#modulebg").hide()
    });

    // 文件切换
    (function($){
        $.fn.myTab = function(options){//将对象作为参数传进去
            var defult = {parent:"",index:null},
                setting =$.extend(defult,options);//extend方法合并两个对象，如果两个对象有相同属性，则后面的那个对象的属性覆盖前面那个对象的属性。
            $(this).find(".file-pic").on("click",function(){
                var $this=$(this),
                    $index =$this.index();
                $this.addClass("current").siblings().removeClass("current");
                $(setting.parent).children(".file-list").eq($index).show().siblings().hide();//切换标签对应的内容


            });
            //判断进入页面显示那个标签样式和内容
            if(setting.index==null){
                $(this).find('li').eq(0).click();
            }else{
                $(this).find('li').eq(options.index).click();
            }
        }
    })(jQuery);

    $(".file-name").myTab({parent:".file-order",index:0});

    // 点击汇总
    $(".hui-btn").on('click','.and-btn',function(){
        $(".summary-list").show();
    });
});
