const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".ctr-prev");
const next = document.querySelector(".ctr-next");

var n = 0;

function change_Slide() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
change_Slide();

prev.addEventListener("click", function(e) {
  if (n > 0) {
    n--;
  }
  else {
    n = imgs.length - 1;
  }
  change_Slide();
});

next.addEventListener("click", function(e) {
  if (n < imgs.length - 1) {
    n++;
  }
  else {
    n = 0;
  }
  change_Slide(); 
});