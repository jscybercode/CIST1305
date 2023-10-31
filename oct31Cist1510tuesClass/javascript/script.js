// function hamburger() {
//     var menu = document.getElementById("menu-links");
//     var logo = document.getElementById("ffc-logo");
//     if (menu.style.display === "block" && logo.style.display === "none") {
//         menu.style.display = "none";
//         logo.style.display = "block";
//     } else {
//         menu.style.display = "block";
//         logo.style.display = "none";
//     }
// }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  