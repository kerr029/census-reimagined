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
});
