 $(document).ready(function(){
        $('#mycarousel').carousel({interval:2000});
        $('#carouselButton').click(function(){
            if ($('#carouselButton').children('span').hasClass('fa-pause')){
               $('#mycarousel').carousel('pause');
               $('#carouselButton').children('span').removeClass('fa-pause');
               $('#carouselButton').children('span').addClass('fa-play');
            }
           else if ($('#carouselButton').children('span').hasClass('fa-play')){
               $('#mycarousel').carousel('cycle');
               $('#carouselButton').children('span').removeClass('fa-play');
               $('#carouselButton').children('span').addClass('fa-pause');
            }
        });
       
        $("#reserve").click(function(){
               $("#reserveTable").modal('show');
           });
           $("#login").click(function(){
               $("#loginModal").modal('show');
           });       

           $("#close-login").click(function(){
               $("#loginModal").modal("hide");
               
           });
           $("#close-reserve").click(function(){
               $("#reserveTable").modal("hide");
               
           });
           $("#cancel-reserve").click(function(){
               $("#reserveTable").modal("hide");
               
           });
           $("#cancel-login").click(function(){
               $("#loginModal").modal("hide");
               
           });
    });
