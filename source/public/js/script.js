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


