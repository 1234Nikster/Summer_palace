// header-convert
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll')
    }

};
// header-convert




// menu-burger
document.querySelector('.header__burger-menu').onclick = function () {
    opened()

    function opened() {
        document.querySelector(".header__open-menu-buger").classList.toggle("opened");
        document.querySelector(".header__container-burger-menu").classList.toggle("move-sticks");
        document.querySelector("body").classList.toggle("no-scroll");
    }
};
// menu-burger

document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: 9,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});