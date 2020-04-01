$(document).ready(function () {

    var fullpageActive = false;
    var num = 0;
    function windowSize() {
        if ($(window).width() >= 1130 && !fullpageActive) {
            $('#fullpage').fullpage({
                scrollBar: false,
                paddingTop: '30px',
                paddingBottom: '57px',
                // scrollOverflow: true,
                bigSectionsDestination: 'top',
                responsiveWidth: 1130,
                responsiveHeight: 670,
                responsiveSlides: true,
                // normalScrollElements: '.footer-form',
                // fitToSection: false,
                // verticalCentered: false,
                css3: true,
                scrollingSpeed: 700,
                // onLeave: function (index, nextIndex, direction) {
                //     if (index == 1 && direction == 'down') {
                //         $("#pho .content-right-block__img-desk").addClass('animated fadeInLeft');
                //         $("#pho .content-right-block__img-mob").addClass('animated fadeInUp').css('animation-delay', '.15s');
                //         $("#pho a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
                //         $("#pho .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
                //         $("#pho .content-left-block__text").addClass('animated fadeInUp').css('animation-delay', '.24s');
                //         $("#pho .content-left-block__task").addClass('animated fadeInUp').css('animation-delay', '.28s');
                //         $("#pho .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
                //         $("#pho .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster').css('animation-delay', '.5s');
                //         $("#pho .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster').css('animation-delay', '.6s');
                //         $("#pho .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster').css('animation-delay', '.7s');
                //         $("#pho .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster').css('animation-delay', '.8s');
                //     }
                //     if (index == 2 && direction == 'down') {
                //         $("#zodiac .content-right-block__img-desk").addClass('animated fadeInRight');
                //         $("#zodiac .content-right-block__img-mob").addClass('animated fadeInUp').css('animation-delay', '.15s');
                //         $("#zodiac a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
                //         $("#zodiac .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
                //         $("#zodiac .content-left-block__text").addClass('animated fadeInLeft').css('animation-delay', '.24s');
                //         $("#zodiac .content-left-block__task").addClass('animated fadeInLeft').css('animation-delay', '.28s');
                //         $("#zodiac .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
                //         $("#zodiac .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster').css('animation-delay', '.7s');
                //         $("#zodiac .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster').css('animation-delay', '.8s');
                //         $("#zodiac .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster').css('animation-delay', '.90s');
                //         $("#zodiac .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster').css('animation-delay', '1s');
    
                //     }
                //     if (index == 3 && direction == 'down') {
                //         $("#rusteaco .content-right-block__img-desk").addClass('animated fadeInLeft');
                //         $("#rusteaco .content-right-block__img-mob").addClass('animated fadeInLeft').css('animation-delay', '.15s');
                //         $("#rusteaco a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
                //         $("#rusteaco .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
                //         $("#rusteaco .content-left-block__text").addClass('animated fadeInUp').css('animation-delay', '.24s');
                //         $("#rusteaco .content-left-block__task").addClass('animated fadeInUp').css('animation-delay', '.28s');
                //         $("#rusteaco .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
                //         $("#rusteaco .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster').css('animation-delay', '.7s');
                //         $("#rusteaco .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster').css('animation-delay', '.8s');
                //         $("#rusteaco .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster').css('animation-delay', '.90s');
                //         $("#rusteaco .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster').css('animation-delay', '1s');
                //     }
                //     if (index == 4 && direction == 'down') {
                //         $("#delta .content-right-block__img-desk").addClass('animated fadeInRight');
                //         $("#delta .content-right-block__img-mob").addClass('animated fadeInRight').css('animation-delay', '.15s');
                //         $("#delta a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
                //         $("#delta .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
                //         $("#delta .content-left-block__text").addClass('animated fadeInUp').css('animation-delay', '.24s');
                //         $("#delta .content-left-block__task").addClass('animated fadeInUp').css('animation-delay', '.28s');
                //         $("#delta .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
                //         $("#delta .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster ').css('animation-delay', '.7s');
                //         $("#delta .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster ').css('animation-delay', '.8s');
                //         $("#delta .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster ').css('animation-delay', '.90s');
                //         $("#delta .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster ').css('animation-delay', '1s');
                //     }
                //     if (index == 5 && direction == 'down') {
                //         $("#kvint .content-right-block__img-desk").addClass('animated fadeInLeft');
                //         $("#kvint .content-right-block__img-mob").addClass('animated fadeInLeft').css('animation-delay', '.15s');
                //         $("#kvint a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
                //         $("#kvint .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
                //         $("#kvint .content-left-block__text").addClass('animated fadeInUp').css('animation-delay', '.24s');
                //         $("#kvint .content-left-block__task").addClass('animated fadeInUp').css('animation-delay', '.28s');
                //         $("#kvint .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
                //         $("#kvint .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster').css('animation-delay', '.7s');
                //         $("#kvint .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster').css('animation-delay', '.8s');
                //         $("#kvint .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster').css('animation-delay', '.90s');
                //         $("#kvint .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster').css('animation-delay', '1s');
                //     }
                // }
            });
            fullpageActive = true;
        } else if ($(window).width() < 1130 && fullpageActive) {
            $.fn.fullpage.destroy('all');
            fullpageActive = false;
        }
    }
    
    $(window).on('load resize', windowSize);
    // $(window).on('load', function () {
    //     $('.portfolio').css("display", "flex"); // показываем блок с контентом
    //     $('#preloader').delay(350).fadeOut('slow'); // и скрываем сам блок прелоудера.
    //     setTimeout(function () {
    //         $("#smonta .content-right-block__img-desk").addClass('animated fadeInRight');
    //         $("#smonta .content-right-block__img-mob").addClass('animated fadeInUp').css('animation-delay', '.15s');
    //         $("#smonta a.content-left-block__link").addClass('animated fadeInTop').css('animation-delay', '.15s');
    //         $("#smonta .content-left-block__title").addClass('animated fadeInUp').css('animation-delay', '.2s');
    //         $("#smonta .content-left-block__text").addClass('animated fadeInUp').css('animation-delay', '.24s');
    //         $("#smonta .content-left-block__task").addClass('animated fadeInUp').css('animation-delay', '.28s');
    //         $("#smonta .content-left-block__btn-position-small").addClass('animated bounceIn').css('animation-delay', '1s');
    //         $("#smonta .content-left-block__footer-block:nth-child(1)").addClass('animated fadeInUp faster').css('animation-delay', '.5s');
    //         $("#smonta .content-left-block__footer-block:nth-child(2)").addClass('animated fadeInUp faster').css('animation-delay', '.6s');
    //         $("#smonta .content-left-block__footer-block:nth-child(3)").addClass('animated fadeInUp faster').css('animation-delay', '.7s');
    //         $("#smonta .content-left-block__footer-block:nth-child(4)").addClass('animated fadeInUp faster').css('animation-delay', '.8s');
    //     }, 800);
    
    
    // });

    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();
    
    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

})


