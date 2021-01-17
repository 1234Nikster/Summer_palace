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





// number-one

document.querySelector('.number-one__paginations-catering').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.add("filter");
        document.querySelector(".number-one__paginations-conference").classList.remove("filter");
        document.querySelector(".number-one__paginations-presentation").classList.remove("filter");
        document.querySelector(".number-one__paginations-event").classList.remove("filter");
        document.querySelector(".number-one__paginations-conversation").classList.remove("filter");
        document.querySelector(".number-one__paginations-lunch").classList.remove("filter");
        document.querySelector(".block-1").classList.add("activation");
        document.querySelector(".block-2").classList.remove("activation");
        document.querySelector(".block-3").classList.remove("activation");
        document.querySelector(".block-4").classList.remove("activation");
        document.querySelector(".block-5").classList.remove("activation");
        document.querySelector(".block-6").classList.remove("activation");
    }
};

document.querySelector('.number-one__paginations-conference').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.remove("filter");
        document.querySelector(".number-one__paginations-conference").classList.add("filter");
        document.querySelector(".number-one__paginations-presentation").classList.remove("filter");
        document.querySelector(".number-one__paginations-event").classList.remove("filter");
        document.querySelector(".number-one__paginations-conversation").classList.remove("filter");
        document.querySelector(".number-one__paginations-lunch").classList.remove("filter");
        document.querySelector(".block-1").classList.remove("activation");
        document.querySelector(".block-2").classList.add("activation");
        document.querySelector(".block-3").classList.remove("activation");
        document.querySelector(".block-4").classList.remove("activation");
        document.querySelector(".block-5").classList.remove("activation");
        document.querySelector(".block-6").classList.remove("activation");
    }
};

document.querySelector('.number-one__paginations-presentation').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.remove("filter");
        document.querySelector(".number-one__paginations-conference").classList.remove("filter");
        document.querySelector(".number-one__paginations-presentation").classList.add("filter");
        document.querySelector(".number-one__paginations-event").classList.remove("filter");
        document.querySelector(".number-one__paginations-conversation").classList.remove("filter");
        document.querySelector(".number-one__paginations-lunch").classList.remove("filter");
        document.querySelector(".block-1").classList.remove("activation");
        document.querySelector(".block-2").classList.remove("activation");
        document.querySelector(".block-3").classList.add("activation");
        document.querySelector(".block-4").classList.remove("activation");
        document.querySelector(".block-5").classList.remove("activation");
        document.querySelector(".block-6").classList.remove("activation");
    }
};

document.querySelector('.number-one__paginations-event').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.remove("filter");
        document.querySelector(".number-one__paginations-conference").classList.remove("filter");
        document.querySelector(".number-one__paginations-presentation").classList.remove("filter");
        document.querySelector(".number-one__paginations-event").classList.add("filter");
        document.querySelector(".number-one__paginations-conversation").classList.remove("filter");
        document.querySelector(".number-one__paginations-lunch").classList.remove("filter");
        document.querySelector(".block-1").classList.remove("activation");
        document.querySelector(".block-2").classList.remove("activation");
        document.querySelector(".block-3").classList.remove("activation");
        document.querySelector(".block-4").classList.add("activation");
        document.querySelector(".block-5").classList.remove("activation");
        document.querySelector(".block-6").classList.remove("activation");
    }
};

document.querySelector('.number-one__paginations-conversation').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.remove("filter");
        document.querySelector(".number-one__paginations-conference").classList.remove("filter");
        document.querySelector(".number-one__paginations-presentation").classList.remove("filter");
        document.querySelector(".number-one__paginations-event").classList.remove("filter");
        document.querySelector(".number-one__paginations-conversation").classList.add("filter");
        document.querySelector(".number-one__paginations-lunch").classList.remove("filter");
        document.querySelector(".block-1").classList.remove("activation");
        document.querySelector(".block-2").classList.remove("activation");
        document.querySelector(".block-3").classList.remove("activation");
        document.querySelector(".block-4").classList.remove("activation");
        document.querySelector(".block-5").classList.add("activation");
        document.querySelector(".block-6").classList.remove("activation");
    }
};

document.querySelector('.number-one__paginations-lunch').onclick = function () {
    activation()

    function activation() {
        document.querySelector(".number-one__paginations-catering").classList.remove("filter");
        document.querySelector(".number-one__paginations-conference").classList.remove("filter");
        document.querySelector(".number-one__paginations-presentation").classList.remove("filter");
        document.querySelector(".number-one__paginations-event").classList.remove("filter");
        document.querySelector(".number-one__paginations-conversation").classList.remove("filter");
        document.querySelector(".number-one__paginations-lunch").classList.add("filter");
        document.querySelector(".block-1").classList.remove("activation");
        document.querySelector(".block-2").classList.remove("activation");
        document.querySelector(".block-3").classList.remove("activation");
        document.querySelector(".block-4").classList.remove("activation");
        document.querySelector(".block-5").classList.remove("activation");
        document.querySelector(".block-6").classList.add("activation");
    }
};

// number-one
// number-one




document.addEventListener("DOMContentLoaded", function (event) {
    var swiper = new Swiper('.swiper-containerq', {
        slidesPerView: 3,
        spaceBetween: 4,
        autoplay: {
            delay: 1850,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

            
    });
});


// slider
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
// slider
// slider




    // <!-- poap-up -->
    document.querySelector('.ph-1').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };




    document.querySelector('.ph-2').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up2").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");   
        }
    };
    document.querySelector('.number-three__poap-up2 .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up2").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up2 .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up2").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };




    document.querySelector('.ph-3').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up3").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up3 .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up3").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up3 .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up3").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };


    document.querySelector('.ph-4').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up4").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up4 .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up4").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up4 .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up4").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };




    document.querySelector('.ph-5').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up5").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");   
        }
    };
    document.querySelector('.number-three__poap-up5 .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up5").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up5 .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up5").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };




    document.querySelector('.ph-6').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up6").classList.add("click-on-photo");
            document.querySelector("body").classList.add("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up6 .number-three__background').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up6").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };
    document.querySelector('.number-three__poap-up6 .number-three__close').onclick = function () {
        open()

        function open() {
            document.querySelector(".number-three__poap-up6").classList.remove("click-on-photo");
            document.querySelector("body").classList.remove("no-scroll");
        }
    };



    
// <!-- poap-up -->
// <!-- poap-up -->