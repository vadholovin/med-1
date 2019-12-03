
/**
 * Modals
 */
$(document).ready(function () {
  $.modal.defaults.showClose = false;

  $('.js-open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });

  // $('.modal').on($.modal.OPEN, function () {
  //   $('html').css('overflow', 'hidden');
  // });

  // $('.modal').on($.modal.AFTER_CLOSE, function () {
  //   $('html').removeAttr('style');
  // });
  
});