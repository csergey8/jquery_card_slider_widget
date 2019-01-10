$(document).ready(() => {

  let current = 1;
  const itemsLength = $('.cards_container .item').length;

  $('.total_slides').text(itemsLength);

  $('.cardSlider .btn_prev').on('click', () => {
    if(current !== 1) {
      current = current - 1;
      showSlider(current);
    } else {
      current = 3;
      showSlider(current);
    }
    
  })

  $('.cardSlider .btn_next').on('click', () => {
    if(current !== itemsLength) {
      current = current + 1;
      showSlider(current);
    } else {
      current = 1;
      showSlider(current);
    }
  })

  const showSlider = (current) => {
    $('.cards_container .item').removeClass('active');
    $('div[data-id="' + current +'"]').addClass('active');
    $('.current_slide').text(current);
  }
});