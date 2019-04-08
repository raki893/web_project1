$(document).on('ready', function() {
      $(".regular").slick({
        dots: false,
		autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
      });
    });
    
    /*************/
    $(document).on('ready', function() {
      $(".regular1").slick({
        dots: false,
		autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    });
    /*************/
    $(document).on('ready', function() {
      $(".regular2").slick({
        dots: false,
		autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    });
    
//    ===============================================
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(" a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

            
                // Show or Hide The Sticky Footer Button

                $(window).scroll(function(){
                    if ($(this).scrollTop() > 500 ) {

                        $('#bck_to_top').fadeIn();
                    } else {
                        $('#bck_to_top').fadeOut();
                    }
                });


                // Animate the scroll to top

                $('#bck_to_top').click(function(){
                    $("html,body").animate({
						scrollTop:0}, 600);
                });
