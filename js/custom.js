'use strict'

window.onscroll = function(evt) {
  var scroll = window.pageYOffset;
  var fullPage = document.querySelector('.main-header').offsetHeight;
  var nav = document.querySelector('.navigation');

  if (fullPage < scroll) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}
