/**
 *
 *
 * ナビゲーション
 *
 *
 */
const hamburger = document.querySelector(".drawer_open");
const gnav = document.querySelector('.nav_content');
const navLinks = document.querySelectorAll('.nav_content a'); // 追加：メニュー内のリンク


// ハンバーガークリック時の処理
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  gnav.classList.toggle('is-active');
  // bodyにクラスをつけてスクロール禁止にするなら
  // document.body.classList.toggle('is-fixed');
});

// 追加：メニューリンクをクリックした時にメニューを閉じる
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    gnav.classList.remove('is-active');
  });
});

// const menu = document.getElementById('menu'); // メニュー本体
// const btn = document.getElementById('toggle-btn'); // ハンバーガーボタン

// document.addEventListener('click', (e) => {
//   // クリックされた場所がメニューでもボタンでもない場合、メニューを閉じる
//   if (!menu.contains(e.target) && !btn.contains(e.target)) {
//     menu.classList.remove('active');
//   }
// });



const heading = document.querySelector('#heading');


const keyframes = {
  opacity: [0, 1],
  translate:['0px, 50px', 0],
};
const options = {
  duration: 8000,
  easing: 'ease',
};

heading.animate (keyframes, options);

/*topへ戻るボタン*/
window.addEventListener('scroll', function() {
  var pagetop = document.getElementById('page-top');
  if (window.pageYOffset > 100) {
    pagetop.classList.add('is-show');
  } else {
    pagetop.classList.remove('is-show');
  }
});
