const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//Toggle Nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

//Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

//Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

//Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
); //this means if window object target is modal then on clicking it it remove class show-modal from modal otherwise false
