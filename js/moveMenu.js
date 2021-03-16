var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bignav").style.top = "0";
  } else {
    document.getElementById("bignav").style.top = "-51px";
  }
  prevScrollpos = currentScrollPos;
}
