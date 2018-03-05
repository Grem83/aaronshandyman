(function ($) {

  $('.nav-mobile').on('show.bs.collapse', function(e) {
    $('.nav-mobile').not(this).collapse('hide');
  });


})(jQuery);