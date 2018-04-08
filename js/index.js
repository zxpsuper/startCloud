
$(document).ready(function () {
    $('.navs li').each(
        function(){
            $(this).hover(
                function(){
                    $(this).find('ul').fadeIn();
                },
                function(){
                    $(this).find('ul').hide();
                }
            )
        }
    );
    $('.aside-nav-right li').each(
        function(){
            $(this).hover(
                function(){
                    $(this).find('img').removeClass('hide').fadeIn();
                },
                function(){
                    $(this).find('img').hide();
                }
            )
        }
    );
    $('.structure-logo img').hover(
        function () {
            $(this).css('opacity', 0.5);
        },
        function () {
            $(this).css('opacity', 1)
        }
    );
    $('.company img').hover(
        function () {
            $(this).animate({marginTop: "-20px"});
            $(this).css('opacity', 0.5);
        },
        function(){
            $(this).animate({marginTop:"0px"});
            $(this).css('opacity', 1)
        }

    )
});

