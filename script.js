var dropdown = document.getElementsByClassName("link-menu");

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    let children = this.querySelectorAll(".fa-angle-left");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      this.querySelectorAll(".fa-angle-down")[0].className = "fa fa-angle-left";
    } else {
      dropdownContent.style.display = "block";
      this.querySelectorAll(".fa-angle-left")[0].className = "fa fa-angle-down";
    }
  });
}
var LeftWidth = document.getElementById("content-shower").style.width;
var RightWidth = document.getElementById("sydebar").style.width;

function openNav() {
  document.getElementById("mySidenav").style.width = "332px";
  document.getElementById("content-shower").style.right = "332px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("content-shower").style.right = "0px";
}

$(document).ready(function () {
  $(".nav-tabs a").click(function () {
    $(this).tab("show");
  });
});
