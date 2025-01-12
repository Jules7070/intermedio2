document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".nav ul");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
