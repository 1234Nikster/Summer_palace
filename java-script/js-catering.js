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




// swiper-furniture
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__furniture').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-furniture").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbs = document.querySelector('.gallery-thumbs').swiper
            galleryThumbs.update();
            var galleryTop = document.querySelector('.gallery-top').swiper
            galleryTop.update();
        }
    };
    document.querySelector('.number-2__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-furniture").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-furniture").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-furniture
// swiper-furniture



// swiper-dish
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsq = new Swiper('.gallery-thumbsq', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopq = new Swiper('.gallery-topq', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsq,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__dish').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-dish").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsq = document.querySelector('.gallery-thumbsq').swiper
            galleryThumbsq.update();
            var galleryTopq = document.querySelector('.gallery-topq').swiper
            galleryTopq.update();
        }
    };
    document.querySelector('.number-2__closeq').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-dish").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__backgroundq').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-dish").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-dish
// swiper-dish



// swiper-small
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsw = new Swiper('.gallery-thumbsw', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopw = new Swiper('.gallery-topw', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsw,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__small').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-small").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsw = document.querySelector('.gallery-thumbsw').swiper
            galleryThumbsw.update();
            var galleryTopw = document.querySelector('.gallery-topw').swiper
            galleryTopw.update();
        }
    };
    document.querySelector('.number-2__closew').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-small").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__backgroundw').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-small").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-small
// swiper-small



// swiper-transfer
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbse = new Swiper('.gallery-thumbse', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTope = new Swiper('.gallery-tope', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbse,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__transfer').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-transfer").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbse = document.querySelector('.gallery-thumbse').swiper
            galleryThumbse.update();
            var galleryTope = document.querySelector('.gallery-tope').swiper
            galleryTope.update();
        }
    };
    document.querySelector('.number-2__closee').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-transfer").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__backgrounde').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-transfer").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-transfer
// swiper-transfer



// swiper-floristik
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsr = new Swiper('.gallery-thumbsr', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopr = new Swiper('.gallery-topr', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsr,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__floristik').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-floristik").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsr = document.querySelector('.gallery-thumbsr').swiper
            galleryThumbsr.update();
            var galleryTopr = document.querySelector('.gallery-topr').swiper
            galleryTopr.update();
        }
    };
    document.querySelector('.number-2__closer').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-floristik").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__backgroundr').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-floristik").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-floristik
// swiper-floristik



// swiper-pro-serve
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbst = new Swiper('.gallery-thumbst', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopt = new Swiper('.gallery-topt', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbst,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-2__pro-serve').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-pro-serve").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbst = document.querySelector('.gallery-thumbst').swiper
            galleryThumbst.update();
            var galleryTopt = document.querySelector('.gallery-topt').swiper
            galleryTopt.update();
        }
    };
    document.querySelector('.number-2__closet').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-pro-serve").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-2__backgroundt').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-2__gallery-pop-up-pro-serve").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-pro-serve
// swiper-pro-serve


// ------------------------------------------------------------------------------------------------------------------------------------------------


// swiper-belveder
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsa = new Swiper('.gallery-thumbsa', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopa = new Swiper('.gallery-topa', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsa,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__belveder').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-belveder").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsa = document.querySelector('.gallery-thumbsa').swiper
            galleryThumbsa.update();
            var galleryTopa = document.querySelector('.gallery-topa').swiper
            galleryTopa.update();
        }
    };
    document.querySelector('.number-3__closea').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-belveder").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgrounda').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-belveder").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-belveder
// swiper-belveder



// swiper-const-castle
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbss = new Swiper('.gallery-thumbss', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTops = new Swiper('.gallery-tops', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbss,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__const-castle').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-const-castle").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbss = document.querySelector('.gallery-thumbss').swiper
            galleryThumbss.update();
            var galleryTops = document.querySelector('.gallery-tops').swiper
            galleryTops.update();
        }
    };
    document.querySelector('.number-3__closes').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-const-castle").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgrounds').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-const-castle").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-const-castle
// swiper-const-castle



// swiper-marble-castle
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsd = new Swiper('.gallery-thumbsd', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopd = new Swiper('.gallery-topd', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsd,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__marble-castle').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-marble-castle").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsd = document.querySelector('.gallery-thumbsd').swiper
            galleryThumbsd.update();
            var galleryTopd = document.querySelector('.gallery-topd').swiper
            galleryTopd.update();
        }
    };
    document.querySelector('.number-3__closed').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-marble-castle").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgroundd').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-marble-castle").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-marble-castle
// swiper-marble-castle



// swiper-arena
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsf = new Swiper('.gallery-thumbsf', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopf = new Swiper('.gallery-topf', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsf,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__arena').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-arena").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsf = document.querySelector('.gallery-thumbsf').swiper
            galleryThumbsf.update();
            var galleryTopf = document.querySelector('.gallery-topf').swiper
            galleryTopf.update();
        }
    };
    document.querySelector('.number-3__closef').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-arena").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgroundf').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-arena").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-arena
// swiper-arena



// swiper-square
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsg = new Swiper('.gallery-thumbsg', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTopg = new Swiper('.gallery-topg', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsg,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__square').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-square").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsg = document.querySelector('.gallery-thumbsg').swiper
            galleryThumbsg.update();
            var galleryTopg = document.querySelector('.gallery-topg').swiper
            galleryTopg.update();
        }
    };
    document.querySelector('.number-3__closeg').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-square").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgroundg').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-square").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-square
// swiper-square



// swiper-pro-musium
document.addEventListener("DOMContentLoaded", function (event) {
    var galleryThumbsh = new Swiper('.gallery-thumbsh', {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryToph = new Swiper('.gallery-toph', {
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbsh,
            slidesPerView: 3,

        }
    });
// active
    document.querySelector('.number-3__musium').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-musium").classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
           
            var galleryThumbsh = document.querySelector('.gallery-thumbsh').swiper
            galleryThumbsh.update();
            var galleryToph = document.querySelector('.gallery-toph').swiper
            galleryToph.update();
        }
    };
    document.querySelector('.number-3__closeh').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-musium").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-3__backgroundh').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-3__gallery-pop-up-musium").classList.remove("active");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
});

// active
// active
// swiper-pro-serve
// swiper-pro-serve