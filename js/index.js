// ハンバーガーメニュー
let hum_btn = document.getElementById('hamburger');
let gnav = document.getElementById('gNav');
hum_btn.addEventListener('click', () => {
  hum_btn.classList.toggle('open_nav');
  gnav.classList.toggle('show_spnav');
});


// pagetop
const page_top = document.getElementById('page_top');
page_top.addEventListener('click', () => {
  scrollTo(0, 0);
});
