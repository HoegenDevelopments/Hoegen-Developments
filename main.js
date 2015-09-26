/* 
 * Created by Ian Hoegen; Hoegen Developments 2015
 *  Website: http://hoegendevelopments.ga
 * Contact: Phone: (253) 328 1936; ianhoegen@gmail.com
 */
$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
        $('.banner').show();
    }, 3000);

});
var submitted = false;
$('body').scrollspy({target: '.nav'});
function hide() {
    $('.thanks').show();
    $('.form').hide();
}
;
$(document).ready(function () {
    $('#closeBanner').click(function () {
        ;
        $('.banner').hide();
        $('header').css('margin-top', '0px');
    });
});
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-66867484-1', 'auto');
ga('send', 'pageview');


