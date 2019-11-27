
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


(function () {
  var researchCanvas = document.getElementById('researchChart');
  var barChart = new Chart(researchCanvas, {
    type: 'bar',
    data: {
      labels: ['Доксициклин', 'Минолексин'],
      datasets: [{
        label: '',
        data: [82, 52],
        backgroundColor: [
          '#c3283f',
          '#39434d',
        ]
      }]
    }
  });
})();