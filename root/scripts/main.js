window.onscroll = function () {
  document.getElementsByClassName('header')[0].setAttribute("class", "changeHeaderBG");
  var vscroll = document.body.scrollTop;
  if(vscroll === 0) {
    document.getElementsByClassName('header')[0].setAttribute("class", "header");
  }
}
