(function ($) {
  $(document).ready(function(){

    $('#hometext').hide().fadeIn(1000);

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > ($(window).height()*.9)) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });


    //picture hover fade
    $('.img-responsive').mouseover(function(){
        $(this).fadeTo('slow', 0.3);
    })

    $('.img-responsive').mouseleave(function(){
        $(this).fadeTo('slow', 1);

    })

    //expand more pictures
    $('#seeless').hide();
    $('.more').hide();

    $('#seemore').click(function(){
        $('.more').slideDown("slow");
        $('#seemore').hide();
        $('#seeless').show();
    })

    $('#seeless').click(function(){
        $('.more').slideUp("slow");
        $('#seemore').show();
        $('#seeless').hide();
    })

});
  }(jQuery));
