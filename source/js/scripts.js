'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var linkLogin = document.querySelector('.user-menu__login');
var modalLogin = document.querySelector('.login');
var userLogin = modalLogin.querySelector('[name=user-login]');
var closeLogin = modalLogin.querySelector('.login__close-btn');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

linkLogin.addEventListener("click", function(event) {
  event.preventDefault();
  modalLogin.classList.add("modal--show");
  userLogin.focus();
});

closeLogin.addEventListener("click", function(event) {
  event.preventDefault();
  modalLogin.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal--show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal--show");
    }
  }
});



