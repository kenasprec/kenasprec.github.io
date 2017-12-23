$(document).ready(function () {

    $('#overview').fadeIn(1000);

    $('#profile-pic').click(function () {
        $('#separator1-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#name').css({'color':'#cccccc', 'transition':'0.3s'});
        $('#location').css({'color':'#cccccc', 'transition':'0.3s'}).typeIt().empty().typeIt({
            strings: 'Overview',
            speed: 25,
            breakLines: false,
            cursor: false
        })
    });

    $('#square').click( function () {
        $('#separator1-line').css({'background-color':'#D2527F', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#D2527F', 'transition':'0.3s'});
        $('#name').css({'color':'#D2527F', 'transition':'0.3s'});
        $('#location').css({'color':'#D2527F', 'transition':'0.3s'}).typeIt().empty().typeIt({
            strings: 'About Me',
            speed: 25,
            breakLines: false,
            cursor: false
        });
    }).hover(function () {
        $(this).find('.button-text').typeIt({
            strings: 'About Me',
            speed: 50,
            breakLines: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#triangle').click( function () {
        $('#separator1-line').css({'background-color':'#65C6BB', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#65C6BB', 'transition':'0.3s'});
        $('#name').css({'color':'#65C6BB', 'transition':'0.3s'});
        $('#location').css({'color':'#65C6BB', 'transition':'0.3s'}).typeIt().empty().typeIt({
            strings: 'Projects',
            speed: 25,
            breakLines: false,
            cursor: false
        })
    }).hover(function () {
        $(this).find('.button-text').typeIt({
            strings: 'Projects',
            speed: 50,
            breakLines: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#circle').click( function () {
        $('#separator1-line').css({'background-color':'#D24D57', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#D24D57', 'transition':'0.3s'});
        $('#name').css({'color':'#D24D57', 'transition':'0.3s'});
        $('#location').css({'color':'#D24D57', 'transition':'0.3s'}).typeIt().empty().typeIt({
            strings: 'Experience',
            speed: 25,
            breakLines: false,
            cursor: false
        })
    }).hover(function () {
        $(this).find('.button-text').typeIt({
            strings: 'Experience',
            speed: 50,
            breakLines: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#x').click( function () {
        $('#separator1-line').css({'background-color':'#67809F', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#67809F', 'transition':'0.3s'});
        $('#name').css({'color':'#67809F', 'transition':'0.3s'});
        $('#location').css({'color':'#67809F', 'transition':'0.3s'}).typeIt().empty().typeIt({
            strings: 'Fun and Games',
            speed: 25,
            breakLines: false,
            cursor: false
        })
    }).hover(function () {
        $(this).find('.button-text').typeIt({
            strings: 'Fun and Games',
            speed: 50,
            breakLines: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('.recent-tile').hover(function () {
        $(this).find('.recent-img').css({'opacity':'0.3', 'transition':'0.3s'});
        $(this).find('.recent-img-text').fadeIn(300);
    }, function () {
        $(this).find('.recent-img').css({'opacity':'1.0', 'transition':'0.3s'});
        $(this).find('.recent-img-text').fadeOut(300);
    });

});
