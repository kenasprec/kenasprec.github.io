$(document).ready(function () {

    // jQuery Function Number 1
    $('.button').hover(function () {
        // jQuery Function Number 2
        $(this).css('background', '#4D89FF');
        $(this).css('transition', '0.4s');
    }, function () {
        $(this).css('background', '')
        $(this).css('transition', '0.4s');
    });

    // jQuery Function Number 3
    $('.button').click(function () {
        $(this).css('background', 'red');
    });

    $('#incomplete').click(function () {
        // jQuery Function Number 4
        $(this).fadeOut(function () {
            $(this).text("Sorry!").fadeIn();
        });
    });

    $('#typeit').typeIt({
        strings: ['Developer', 'Designer', 'Leader', 'Kendal Asprec'],
        speed: 100,
        breakLines: false
    });

});
