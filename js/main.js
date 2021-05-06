$(function () {
    $(document).on("scroll", onScroll);
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#sticky-nav .main-nav__link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#sticky-nav .main-nav__link').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }


    // CUSTOME BASIC SELECT

    $('.js-custom-select').each(function(){
        var placeholder = $(this).data('placeholder');
        $(this).select2({
            placeholder: placeholder,
            allowClear: false,
            minimumResultsForSearch: -1
        }).val(null).trigger('change');
    })

   /* $(function () {
        //Checkboves Dynamic ID create
        var checkboxDataId = 0;
        $(".checkbox-group, .form-check").each(function () {
            checkboxDataId++;
            $('input', this).attr("id", "check-" + checkboxDataId);
            $('.form-check-label', this).attr("for", "check-" + checkboxDataId);
        });
    });*/
});


/*
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600 && y < 1000) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-1-nav').css("color", "black");
    } else if (y > 1000 && y < 1600) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-2-nav').css("color", "black");
    } else if (y > 1600 && y < 2100) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-3-nav').css("color", "black");
    }  else if (y > 1900 && y < 2400) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-4-nav').css("color", "black");
    }  else if (y > 2400 && y < 2900) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-5-nav').css("color", "black");
    }  else if (y > 2900 && y < 3300) {
        $('#sticky-nav ul li').css("color", "white");
        $('#sticky-nav ul #sec-6-nav').css("color", "black");
    }
});*/
