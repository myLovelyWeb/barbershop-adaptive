var form = document.querySelector('.order__form');
var submitForm = form.querySelector('.order__btn');
var modalSuccess = document.querySelector('.success');
var closeSuccess = modalSuccess.querySelector('.success__btn');
var modalFailure = document.querySelector('.failure');
var closeFailure = modalFailure.querySelector('.failure__btn');

submitForm.addEventListener("click", function(event) {
  event.preventDefault();
  modalSuccess.classList.add("modal--show");
});

closeSuccess.addEventListener("click", function(event) {
  event.preventDefault();
  modalSuccess.classList.remove("modal--show");
});

closeFailure.addEventListener("click", function(event) {
  event.preventDefault();
  modalFailure.classList.remove("modal--show");
});
