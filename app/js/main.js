
/**
 * Accordion
 */
$(document).ready(function () {
  let button = $('.js-accordion button');

  button.click(function (e) { 
    e.preventDefault();

    if (!$(this).hasClass('is-active')) {
      button.removeClass('is-active').attr('aria-expanded', false);
      button.parent().next().removeClass('is-open');
      $(this).addClass('is-active').attr('aria-expanded', true);
      $(this).parent().next().addClass('is-open');
    } else {
      $(this).removeClass('is-active').attr('aria-expanded', false);
      $(this).parent().next().removeClass('is-open');
    }
  });
});


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
  
});