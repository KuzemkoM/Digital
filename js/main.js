var $topMenu = $('#main-menu'),
  $showMenuBtn = $('#show-menu');

$showMenuBtn.on('click', function(){
  if ($topMenu.hasClass('open')){
    $topMenu.removeClass('open');
    $(this).find('span')
           .addClass('icon-menu');       
  }
  else{
    $topMenu.addClass('open');
    $(this).find('span')
           .removeClass('icon-menu')  
  }
});

$(window).resize(function(){
  if ($(window).width() > 885){
    $topMenu.removeClass('animation')
        .removeClass('open');

  $showMenuBtn.find('span')
            .addClass('icon-menu');
  }else {
      $topMenu.addClass('animation');
    }     
});

$topMenu.on('click', 'a', function(){
  $topMenu.removeClass('open')
  $showMenuBtn.find('span')
            .addClass('icon-menu');
});


$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000, 
  });
});


$(document).ready(function() {
  $('a[href^="#"]').click(function(){
  var el = $(this).attr('href');
  $('body').animate({
  scrollTop: $(el).offset().top}, 1000);
  return false;
  });
});