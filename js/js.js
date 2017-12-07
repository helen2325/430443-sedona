var link = document.querySelector(".for-form");
var popup = document.querySelector(".modal-form");

        link.addEventListener("click", function (evt) { evt.preventDefault(); popup.classList.toggle("modal-show"); });