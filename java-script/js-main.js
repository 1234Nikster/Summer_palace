
// header-convert
window.onscroll = function showHeader () {
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





// slider
document.addEventListener("DOMContentLoaded", function (event) {
    var mySwiper = new Swiper('.slider__container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.switch__button-next',
            prevEl: '.switch__button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },


        slidesPerView: 3,
        spaceBetween: 14,
        slidesPerGroup: 1,
        loop: true,
        oopFillGroupWithBlank: true,
        autoplay: {
            delay: 1850,
            disableOnInteraction: false,
          },
    })
});
// slider





// <!-- poap-up -->
document.querySelector('.gallery__photo-1').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up").classList.add("click-on-photo");
        document.querySelector("body").classList.add("no-scroll");
    }
};
document.querySelector('.gallery__poap-up .gallery__background').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
document.querySelector('.gallery__poap-up .gallery__close').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};




document.querySelector('.gallery__photo-2').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up2").classList.add("click-on-photo");
        document.querySelector("body").classList.add("no-scroll");
    }
};
document.querySelector('.gallery__poap-up2 .gallery__background').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up2").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
document.querySelector('.gallery__poap-up2 .gallery__close').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up2").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};




document.querySelector('.gallery__photo-3').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up3").classList.add("click-on-photo");
        document.querySelector("body").classList.add("no-scroll");
    }
};
document.querySelector('.gallery__poap-up3 .gallery__background').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up3").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
document.querySelector('.gallery__poap-up3 .gallery__close').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up3").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};



document.querySelector('.gallery__photo-4').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up4").classList.add("click-on-photo");
        document.querySelector("body").classList.add("no-scroll");
    }
};
document.querySelector('.gallery__poap-up4 .gallery__background').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up4").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
document.querySelector('.gallery__poap-up4 .gallery__close').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up4").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};



document.querySelector('.gallery__photo-5').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up5").classList.add("click-on-photo");
        document.querySelector("body").classList.add("no-scroll");
    }
};
document.querySelector('.gallery__poap-up5 .gallery__background').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up5").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
document.querySelector('.gallery__poap-up5 .gallery__close').onclick = function () {
    open()

    function open() {
        document.querySelector(".gallery__poap-up5").classList.remove("click-on-photo");
        document.querySelector("body").classList.remove("no-scroll");
    }
};
// <!-- poap-up -->