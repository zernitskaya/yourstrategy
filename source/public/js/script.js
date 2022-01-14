if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

} else {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.7
  });
}

(function() {
  var header = document.querySelector('.header');
  var seatchBtn = document.querySelector('.js-search-btn');
  var closeSearch = document.querySelector('.js-close-search');
  var seatchWrap = document.querySelector('.header__control');
  var searchInput = document.querySelector('.js-search-input');
  var openMenu = document.querySelector('.js-open-menu');
  var menu = document.querySelector('.js-menu');

  if (!header) return;

  seatchBtn.addEventListener('click', function() {
    seatchWrap.classList.toggle('active');
    searchInput.focus();
  });

  closeSearch.addEventListener('click', function() {
    seatchWrap.classList.toggle('active');
  });

  openMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  function animHead() {
    if (window.pageYOffset > 40) {
      header.classList.add('header--min');
    } else if (window.pageYOffset > 10) {
      header.classList.remove('header--min');
    }
  }

  function scrollBtn() {
    var h = document.documentElement.scrollHeight;
    var y = window.pageYOffset;
    var elem = document.querySelector('.scroll-top');

    if (h / 4 < y) {
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  }

  scrollBtn();

  window.addEventListener('scroll', function(e) {
    scrollBtn();
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return;
  }

  animHead();

  window.addEventListener('scroll', function(e) {
    animHead();
  });
})();

jQuery(document).ready(function($){
  var show = true;
  var countbox = ".stat__list";
  $(window).on("scroll load resize", function () {
      var el = document.querySelector('.stat__number');
      if (!show || !el) return false;
      var w_top = $(window).scrollTop();
      var e_top = $(countbox).offset().top;
      var w_height = $(window).height();
      var d_height = $(document).height();
      var e_height = $(countbox).outerHeight();
      var text = document.querySelector('.stat__number').textContent;
      var sybmol = text[text.length-1];
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.stat__number').css('opacity', '1');
          $('.stat__number').spincrement({
              thousandSeparator: "",
              duration: 1500,
              complete: function (e) {
                e.text( e.text() + ' ' + sybmol);
              }
          });


          show = false;
      }
  });

  $('.scroll-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    });
    return false;
});
});
