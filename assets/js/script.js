$(document).ready(function () {

    $('#welcome').fadeIn(750).delay(750).fadeOut(750);

    $('#navbar').delay(2000).fadeIn(750);
    $('#separator1').delay(2000).fadeIn(750);
    $('#top-nav').delay(2000).fadeIn(750);
    $('#overview').delay(2000).fadeIn(750);

    /*
    $('#navbar').fadeIn(750);
    $('#separator1').fadeIn(750);
    $('#top-nav').fadeIn(750);
    $('#overview').fadeIn(750);
    */


    $('#profile-pic').click(function () {
        $('#separator1-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#name').css({'color':'#cccccc', 'transition':'0.3s'});
        $('#location').css({'color':'#cccccc', 'transition':'0.3s'}).typeIt({
            strings: 'Overview',
            speed: 35,
            breakLines: false,
            lifeLike: false,
            cursor: false
        });
        $('#wip').hide();
        $('#overview').fadeIn(750);
    });

    $('#square').click( function () {
        $('#separator1-line').css({'background-color':'#D2527F', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#D2527F', 'transition':'0.3s'});
        $('#name').css({'color':'#D2527F', 'transition':'0.3s'});
        $('#location').css({'color':'#D2527F', 'transition':'0.3s'}).typeIt({
            strings: 'Biography',
            speed: 35,
            breakLines: false,
            lifeLike: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Biography").typeIt({
            speed: 50,
            breakLines: false,
            lifeLike: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#triangle').click( function () {
        $('#separator1-line').css({'background-color':'#65C6BB', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#65C6BB', 'transition':'0.3s'});
        $('#name').css({'color':'#65C6BB', 'transition':'0.3s'});
        $('#location').css({'color':'#65C6BB', 'transition':'0.3s'}).typeIt({
            strings: 'Inventory',
            speed: 35,
            breakLines: false,
            lifeLike: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Inventory").typeIt({
            speed: 50,
            breakLines: false,
            lifeLike: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#circle').click( function () {
        $('#separator1-line').css({'background-color':'#D24D57', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#D24D57', 'transition':'0.3s'});
        $('#name').css({'color':'#D24D57', 'transition':'0.3s'});
        $('#location').css({'color':'#D24D57', 'transition':'0.3s'}).typeIt({
            strings: 'Progress',
            speed: 35,
            breakLines: false,
            lifeLike: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Progress").typeIt({
            speed: 50,
            breakLines: false,
            lifeLike: false,
            cursor: false
        })
    }, function () {
        $(this).find('.button-text').typeIt().empty()
    });

    $('#x').click( function () {
        $('#separator1-line').css({'background-color':'#67809F', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#67809F', 'transition':'0.3s'});
        $('#name').css({'color':'#67809F', 'transition':'0.3s'});
        $('#location').css({'color':'#67809F', 'transition':'0.3s'}).typeIt({
            strings: 'Easter Eggs',
            speed: 35,
            breakLines: false,
            lifeLike: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Easter Eggs").typeIt({
            speed: 50,
            breakLines: false,
            lifeLike: false,
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
