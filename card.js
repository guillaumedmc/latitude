$(document).ready(function(){
    $("[id=product-card]").hover(function(){
            $(this).addClass('animate');
         }, function(){
            $(this).removeClass('animate');
    });
});
