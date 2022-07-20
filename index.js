const menuBar = document.querySelector(".menu-bar");
const navLinks = document.querySelectorAll('.nav-links');
menuBar.addEventListener("click", function() {
    navLinks.forEach(nav => nav.classList.menu('active'))
});