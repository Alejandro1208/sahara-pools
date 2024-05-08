function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    var hamburgerMenu = document.querySelector(".hamburger-menu");
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "flex";
        hamburgerMenu.classList.add("open");
    } else {
        menuItems.style.display = "none";
        hamburgerMenu.classList.remove("open");
    }
}

window.onload = function() {
    var menuItems = document.querySelectorAll("#menu-items li a");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            var menuItems = document.getElementById("menu-items");
            var hamburgerMenu = document.querySelector(".hamburger-menu");
            if (window.innerWidth <= 600) { // Solo ocultar el menú en pantallas pequeñas
                menuItems.style.display = "none";
                hamburgerMenu.classList.remove("open");
            }
        });
    }

    AOS.init();
}

var modal = document.getElementById("modal");
var btn = document.querySelector(".special-button");
var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$('.item').on('click', function() {
    $(this).find('.description').fadeIn();
  });
  
  $('.description').on('click', function(e) {
    e.stopPropagation();
    $(this).fadeOut();
  });