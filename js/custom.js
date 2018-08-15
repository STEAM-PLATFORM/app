(function($, window, document, undefined) {
    'use strict';
    

        $('.cd-search-btn-wrap').on('click', function(e) {
            $('.cd-search-btn').addClass('open'), $('.cd-search-btn > form > input[type="search"]').focus()
        }), $('.cd-search-close').on('click', function(e) {
            $('.cd-search-btn').removeClass('open')
        }), $('.cd-search-btn, .cd-search-btn .cd-search-close').on('click keyup', function(e) {
            (e.target == this || 'cd-search-close' == e.target.className || 27 == e.keyCode) && $(this).removeClass('open')
        }), 
        $('.counter').each(function() {
            var e = $(this),
                a = e.attr('data-count');
            $({
                countNum: e.text()
            }).animate({
                countNum: a
            }, {
                duration: 8e3,
                easing: 'linear',
                step: function() {
                    e.text(Math.floor(this.countNum))
                },
                complete: function() {
                    e.text(this.countNum)
                }
            })
        })
    
    
    /*
     /*
     * Custom Data Fixed
     */
    $('.beactive').addClass('active');
    $('.beactive').removeClass('beactive');

    /*============================================
     MagnificPopup Bar
     ==============================================*/
    $('.mp-lightbox').magnificPopup({
        removalDelay: 300,
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });

    /*============================================
     Tooltip
     ==============================================*/
    $('[data-toggle="tooltip"]').tooltip();

    /*============================================
     Progress Bar
     ==============================================*/
    if ($('.progress-bars').length) {
        $(window).bind('scroll', function (e) {
            var hT = $('.progress-bars').offset().top,
                    hH = $('.progress-bars').outerHeight(),
                    wH = $(window).height(),
                    wS = $(this).scrollTop();
            if (wS > (hT + hH - wH)) {
                $(function () {

                    $('.progress-bars > .progress > .progress-bar').each(function () {
                        var width = $(this).attr('aria-valuenow');
                        $(this).css('width', width + '%');
                    });

                });
            }
        });
    }


    /*============================================
     Counter
     ==============================================*/
    if ($('.count').length)
    {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*============================================
     Brand
     ==============================================*/
    $('#owl-clients').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        pagination: true,
        autoPlay: true
    });

    /* ---------------------------------------------------------------- */
    /* Flexslider
     /* ---------------------------------------------------------------- */
    $('#main_slider').flexslider({
        animation: 'slide',
        useCSS: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#main_thumbs'
    });

    $('#main_thumbs').flexslider({
        animation: 'slide',
        useCSS: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        minItems: 3,
        maxItems: 4,
        itemWidth: 103.75,
        itemMargin: 10,
        asNavFor: '#main_slider'
    });

    $('.cd-lightbox-image').magnificPopup({
        removalDelay: 300,
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });
 
})(jQuery, window, document);

