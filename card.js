$(document).ready(function(){
    $("[id=product-card]").hover(function(){
            $(this).addClass('animate');
         }, function(){
            $(this).removeClass('animate');
    });

    $("[class=tout-voir]").bind(function(){
            $(this).addClass('voir-tout', 'animate');
         }, function(){
            $(this).removeClass('voir-tout', 'animate');
    });
});
