window.onload = function() {


    var active = "active",
        body = $("body");

    if (body.width() > 1280) {

    }


/////////////

    var scrollerBlock = $(".scroller");
    var btnGetBonus = $(".bl_getBonus");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            scrollerBlock.fadeIn(400);
            btnGetBonus.addClass(active);
        } else {
            scrollerBlock.fadeOut(400);
            setTimeout(function () {
                scrollerBlock.removeClass('scrolling');
                btnGetBonus.removeClass(active);
            }, 500)
        }
    });

    scrollerBlock.click(function () {
        $(this).addClass('scrolling');
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });




};


