import 'jquery'

$(document).ready(function () {
    $('.lp-advantages-row-about-row__toggle').click(function (e) {
        e.preventDefault();
        $('.lp-advantages-row-about-content div').hide();
        let href = $(this).attr('href');
        $(href).show();
    });


    $('.lp-header__circle').click(function (e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    })
});
