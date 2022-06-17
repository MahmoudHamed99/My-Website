// Start Navbar
let menuBar = document.querySelector(".header .menu"),
    closeButton = document.querySelector("nav .close"),
    head = document.querySelector(".header"),
    navBar = document.querySelector("nav"),
    cvLink = document.querySelector(".landing .content > a"),
    websiteLink = document.querySelector(".website"),
    mainPage = document.querySelector("main");

    menuBar.onclick = function () {
        navToggle()
    }
    closeButton.onclick = function () {
        navToggle()
    }
    function navToggle() {
        navBar.classList.toggle("active");
        mainPage.classList.toggle("active");
        head.classList.toggle("active");
    };
// End Navbar

// Scroll To Section
$(function () {
    $("nav ul li a").on("click", function () {
        if ($(closeButton).css("display") === "block") {
            closeButton.click();
        };
        $("html, body").animate({
            scrollTop: (($($(this).data("section")).offset().top) - 60)
        }, 1000)
    });
});
// Scroll To Section