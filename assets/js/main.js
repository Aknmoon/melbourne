$(function(){
  const $masonry = $('.masonry');

  $masonry.imagesLoaded(function(){
    $masonry.masonry({
      itemSelector:'.masonry-item',
      columnWidth:300,
      gutter:20,
      fitWidth:true,
    });
  });
  
});



$(function(){
  $(window).scroll(function(){
    $('.fade-in').each(function(){
      const elemPos = $(this).offset().top;
      //位置を取得
      const scroll = $(window).scrollTop();
      //スクロールの位置(量)を取得
      const windowHeight = $(window).height();
      //画面の高さを取得
      if(scroll > elemPos - windowHeight){
        $(this).addClass('scroll-in');
      }

    });
  });
  jQuery(window).scroll();
});






