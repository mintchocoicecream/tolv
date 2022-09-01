const getHeader = document.getElementById("header");

function scrollFunction(){
    if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.backgroundColor = "white";
        getHeader.style.boxShadow = "0 .2em .3em rgb(216, 216, 216)";
      } else {
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.boxShadow = "none";
        getHeader.style.backgroundColor = "";
      }
}

window.onscroll = function() {scrollFunction()};