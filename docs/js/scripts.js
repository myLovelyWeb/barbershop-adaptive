'use strict';

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let linkToLogin = document.querySelector('.user-menu__login');
let login = document.querySelector('.login');
let loginCloseBtn = login.querySelector('.modal__close-btn');
let userName = login.querySelector('[name=user-login]');

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

linkToLogin.addEventListener("click", function(evt) {
  evt.preventDefault();
  login.classList.remove('visually-hidden');
  userName.focus();
});

loginCloseBtn.addEventListener('click', function(evt) {
  login.classList.add('visually-hidden');
});

function handleKeyDown (evt) {
  const keyCode = evt.keyCode;
  if (keyCode === 27) {
    event.preventDefault();
    modal.classList.add('visually-hidden');
  }
}

document.addEventListener('keydown', handleKeyDown);
