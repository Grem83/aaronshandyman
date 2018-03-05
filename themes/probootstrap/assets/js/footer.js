(function ($) {

  var footer = $('footer[role="footer"]'),
    body = $('body'),
    footerHeight = $(footer).outerHeight();

  $(body).css('margin-bottom', footerHeight);
  $(footer).css('height', footerHeight);

})(jQuery);