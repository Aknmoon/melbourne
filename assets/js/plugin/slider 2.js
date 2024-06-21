///////////////
// mainvisual slider（オープニング後の）
////////////////

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
//=====ここまで背景が伸びた後に動かしたいJSをまとめる



$(window).on('load', function () {
  webStorage();
  $mvSlider.slick('slickPlay');
  /* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



///////////////
// news slider
////////////////

const $newsSlider = $('.newsTop-slick-area');

$newsSlider.slick({
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [ {
      breakpoint: 768,
      settings: 'unslick'
  } ]
});
//リサイズした時に実行
$(window).on('resize orientationchange', function(slick) {
  $newsSlider.slick('resize');
});
