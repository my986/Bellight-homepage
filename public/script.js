// 例: ヘッダーの背景色をスクロールに合わせて変える
window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#333';
    } else {
      header.style.backgroundColor = '#111';
    }
  };
  