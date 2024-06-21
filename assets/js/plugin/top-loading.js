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
    $('#splash').css("display", "none", function(slick) {    
    //この中に動かしたいJSを記載
    $mvSlider.slick('slickPlay'); //アニメーション終了後にスライドを再生
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

