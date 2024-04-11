var dropdown = document.getElementsByClassName("link-menu");

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    let children = this.querySelectorAll('.fa-angle-left');
    
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      this.querySelectorAll('.fa-angle-down')[0].className="fa fa-angle-left";
    } else {
      dropdownContent.style.display = "block";
      this.querySelectorAll('.fa-angle-left')[0].className="fa fa-angle-down";
    }
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "332px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
