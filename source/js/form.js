"use strict";

let form = document.querySelector('.order__form');
let status = document.querySelector('.status');
let statusCloseBtn = status.querySelector('.modal__close-btn');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  status.classList.remove('visually-hidden');
});

statusCloseBtn.addEventListener('click', function() {
  status.classList.add('visually-hidden');
});
