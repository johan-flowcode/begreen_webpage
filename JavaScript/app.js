
//----> Menu de navegación
const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const main = document.querySelector(".container")
const footer = document.querySelector(".pie-pagina");


open.addEventListener("click", () => {
    menu.classList.add("visible");
    main.classList.add("hidden");
    footer.classList.add("hidden");

})


close.addEventListener("click", () => {
    menu.classList.remove("visible");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");

})


//----> Banner
$(document).ready(function () {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>',
    });
});

