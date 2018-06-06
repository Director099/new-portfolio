'use strict'


  var mainContent = document.querySelector('#main-content');
  var navigation = document.querySelector('.navigation');

  setInterval(function() {
    if (window.scrollY >= mainContent.offsetTop) {
      navigation.classList.add('navigation--fixed');
    } else {
      navigation.classList.remove('navigation--fixed');
    }
  }, 0);



  var toggleMenu = document.querySelector('.toggle-menu');
  var mainNav = document.querySelector('.main-nav');

  toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('toggle-menu--close');
    mainNav.classList.toggle('main-nav--open')
  })


