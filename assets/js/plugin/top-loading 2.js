///////////////
// オープニング
////////////////

// $(window).on('load',function(){
//   $('body').addClass('loading');

//   //=====ロゴを0.4秒待ってフェードアウトする記述
//   $("#splash-logo").delay(400).fadeOut('slow');

//   //=====splashエリアを2.2秒待って0.6秒でフェードアウト
//   $("#splash").delay(2200).fadeOut('600',function(){
//       $('body').removeClass('loading');
//       $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
//   });
//   //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる      
// });


const webStorage = function () {
  if (sessionStorage.getItem('visit')) {
    $("#splash").css("display", "none");

    $(window).on('load',function(){
      // When Window Load
            
      const $mvSlider = $('.mainvisual-slider');

      $mvSlider.slick({
        fade:true,//切り替えをフェードで行う。初期値はfalse。
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 4000,//次のスライドに切り替わる待ち時間
        speed:1000,//スライドの動きのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        // slidesToShow: 1,//スライドを画面に3枚見せる
        // slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        arrows:false
      }).slick('slickPause');

      //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
      $mvSlider.on('touchmove', function(event, slick, currentSlide, nextSlide){
        $mvSlider.slick('slickPlay');
      });

      //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
      $('#splash').on('animationend', function(slick) {    
          //この中に動かしたいJSを記載
        $mvSlider.slick('slickPlay'); //アニメーション終了後にスライドを再生
      });

  //   $('#splash').on('animationend', function(slick) {    
  //   //この中に動かしたいJSを記載
  // $mvSlider.slick('slickPlay'); //アニメーション終了後にスライドを再生
});


  } else {
    sessionStorage.setItem('visit', 'true'); 
    $(window).on('load',function(){
      $('body').addClass('loading');
    
      //=====ロゴを0.4秒待ってフェードアウトする記述
      $("#splash-logo").delay(400).fadeOut('slow');
    
      //=====splashエリアを2.2秒待って0.6秒でフェードアウト
      $("#splash").delay(2200).fadeOut('600',function(){
          $('body').removeClass('loading');
          $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
      });
      //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる      
    });
  }
}
webStorage();

