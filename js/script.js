(function ($) {
    'use strict';

    // Cache jQuery selectors
    var $window = $(window);
    var $topHeader = $('.top-header');
    var $navigation = $('.navigation');
    var $preloader = $('.preloader');
    var $countElements = $('.count');

    // Preloader js
    $window.on('load', function () {
        $preloader.fadeOut(1000);
    });

    // Sticky Menu
    $window.scroll(function () {
        var height = $topHeader.innerHeight();
        if ($('header').offset().top > 10) {
            $topHeader.addClass('hide');
            $navigation.addClass('nav-bg').css('margin-top', '-' + height + 'px');
        } else {
            $topHeader.removeClass('hide');
            $navigation.removeClass('nav-bg').css('margin-top', '0');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    });

    // Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        mobileFirst: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="prevArrow"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="nextArrow"><i class="ti-angle-right"></i></button>',
        dots: true
    }).slickAnimation();

    // Venobox popup
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // Filter
    $(document).ready(function () {
        var $filterContainer = $('.filtr-container');
        if ($filterContainer.length) {
            $filterContainer.filterizr({});
        }
        $('.filter-controls li').on('click', function () {
            $('.filter-controls li').removeClass('active');
            $(this).addClass('active');
        });
    });

    // Count Up
    function counter() {
        var oTop;
        if ($countElements.length !== 0) {
            oTop = $countElements.offset().top - window.innerHeight;
        }
        if ($window.scrollTop() > oTop) {
            $countElements.each(function () {
                var $this = $(this);
                var countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }

    // Throttle scroll event for performance
    $window.on('scroll', _.throttle(counter, 100));

})(jQuery);
