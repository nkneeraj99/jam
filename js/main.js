
    /*    offcanvas menu*/
    $('#hamburger-menu-icon-main').click(function(){
        if($('#hamburger-menu-icon-main').hasClass('active')){
            $('#hamburger-menu-icon-main').removeClass('active');
            document.getElementById("navigation-mob").style.display = "none";
            $('.navigation-mob-child').animate({right:'-100%'});
        }
        else{
            $('#hamburger-menu-icon-main').addClass('active');
            document.getElementById("navigation-mob").style.display = "block";
            $('html').addClass('no-scroll');
            $('.navigation-mob-child').animate({right:'0px'});
            return false;
        }
    });

$("#navigation-mob, .close").click(function(){
    document.getElementById("navigation-mob").style.display = "none";
    $('.navigation-mob-child').animate({right:'-100%'});
    $('html').removeClass('no-scroll');
    $('#hamburger-menu-icon-main').removeClass('active');
});


