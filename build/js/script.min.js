jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.7
});


(function() {
  var header = document.querySelector('.header');
  if (!header) return;

  function animHead() {
    if (window.pageYOffset > 40) {
      header.classList.add('header--min');
    } else {
      header.classList.remove('header--min');
    }
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
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
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
});
