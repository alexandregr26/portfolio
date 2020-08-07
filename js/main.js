$(document).ready(function () {

    let $btns = $('.projects .button-group button');
    
    $btns.click(function(e){
        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .row').isotope({
            filter:selector
        });

        return false;
    })
});