'use strict';

window.onload = function(evt) {
  var preloader = document.querySelector('#preloader');

  preloader.classList.add('close');

  setTimeout(function() {
    preloader.classList.add('close');
    if (preloader.classList.contains('close')) {
      preloader.style.display = 'none';
    }
  }, 1000);
}

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

$(function () {
  $.scrollUp({
      scrollText: '',
  });
});

var linkNav = $(".scrollto > a");
var arrowLink = $(".scroll-down");

function scrollLink(value) {
  value.click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
}

scrollLink(linkNav);
scrollLink(arrowLink);

$('.jobs-slider').owlCarousel({
  loop: false,
  nav: true,
  items: 1
})
