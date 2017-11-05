window.onload = function() {

    var blackWrapper = $(".blackWrapper"),
        body = $("body");

    ///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }

    //  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }


//    Discount Products  - Скидки
    /*
       $(".slider_discountProducts").owlCarousel({
           items: 5,
           loop: true,
           nav: true,
           navText: true,
           dots: false,
           autoplay: false,
           stopOnHover: true,
           margin: 20,
           smartSpeed: 1000,
           autoplayTimeout: 4000,
           pagination: false,
           responsiveClass: true,
           responsive: {
               1200: {
                   items: 5
               },
               991: {
                   items: 3
               },
               550: {
                   items: 2,
                   margin: 5
               },
               450: {
                   margin: 0,
                   items: 1,
                   center: true
               },

               320: {
                   items: 1,
                   center: true
               }

           }
       });
   */

/// SLICK SLIDER

    /*
        $(".bl_product__productSlider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.bl_product__verticalSlider',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                }
            ]
        });
    */

    // Zoom Effect
    /*
        function zoomEffect() {

            if (body.width() >= 1200) {
                $(".bl_product__productSlider .slick-active .bl_product_image").elevateZoom({
                    borderSize: 2,
                    borderColour: "#7f8000"
                });
            }else if ( (body.width() < 1200) && (body.width() > 768) ) {
                $(".bl_product__productSlider .slick-active .bl_product_image").elevateZoom({
                    zoomType: "inner",
                    cursor: "crosshair"
                });
            }else {
                return false;
            }


        }
        zoomEffect();
    */


// Ancor to top
    /*
        $(".bl_ancor").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
        $(window).scroll(function () {



            var ancor = $(".bl_ancor"),
                windowHeight = $(window).height() / 2;

            if ($(this).scrollTop() > windowHeight) {

                ancor.removeClass("hidden");

            } else {
                ancor.addClass("hidden");
            }


            if ( ($(this).scrollTop() >= topMainHeaderBlock) && (screenWidth >= 1027)) {
                mainHeaderBlock.addClass(mainHeaderFixed);
                mainNavigation.addClass(mainNavigationFixed);
            } else {
                mainHeaderBlock.removeClass(mainHeaderFixed);
                mainNavigation.removeClass(mainNavigationFixed);
            }


        });
     */


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});

    /*
        ////////////////// POPUPS LOGIC

            function popupWindowShow(btn, field) {
                btn.on("click", function () {

                    field.removeClass("hidden");
                    blackWrapper.removeClass("hidden");
                    blackWrapper.animate({opacity: 0.6}, 300);
                });
            }

            function closePopupWindow(btn, field) {
                btn.on("click", function () {
                    field.addClass("hidden");
                    blackWrapper.addClass("hidden");
                    blackWrapper.animate({opacity: 0}, 400);
                })
            }


        /// POPUP BIFORE ADD TO SHOPBAG

            function popupWindowBiforeAddToShopBag() {

                var TESTBUTTON = $(".TEST_BUTTON");

                var popupWindow = $(".popup_likeShopbag"),
                    buttonClose = $(".popup_likeShopbag__close"),
                    buttonContinueBuying = $(".popup_likeShopbag__continueBuying");

                popupWindowShow(TESTBUTTON, popupWindow);

                closePopupWindow(buttonClose, popupWindow);
                closePopupWindow(buttonContinueBuying, popupWindow);
                closePopupWindow(blackWrapper, popupWindow);

            }

            popupWindowBiforeAddToShopBag();

        ////////// CallBack PopUp

            function popupWindowCallBack() {
                var buttonCallback = $(".btn_callBack"),
                    fieldCallBack = $(".bl_callback"),
                    buttonClose = $(".bl_callback__close");

                popupWindowShow(buttonCallback, fieldCallBack);
                closePopupWindow(buttonClose, fieldCallBack);
                closePopupWindow(blackWrapper, fieldCallBack);


            }

            popupWindowCallBack();


        //// Succsess PopUp

            function popupWindowSuccsess() {

                var fieldSuccess = $(".bl_success");

                closePopupWindow(blackWrapper, fieldSuccess);
                closePopupWindow( fieldSuccess, fieldSuccess);
            }

            popupWindowSuccsess();

        */


};


