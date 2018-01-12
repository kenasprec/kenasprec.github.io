$(document).ready(function () {

    $('#navbar').fadeIn(750);
    $('#separator1').fadeIn(750);
    $('#top-nav').fadeIn(750);
    $('#overview').fadeIn(750);

    $('#profile-pic').click(function () {
        $('#separator1-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#separator2-line').css({'background-color':'#cccccc', 'transition':'0.3s'});
        $('#name').css({'color':'#cccccc', 'transition':'0.3s'});
        $('#location').css({'color':'#cccccc', 'transition':'0.3s'}).typeIt({
            strings: 'Overview',
            speed: 25,
            breakLines: false,
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
            strings: 'About Me',
            speed: 25,
            breakLines: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("About Me").typeIt({
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
        $('#location').css({'color':'#65C6BB', 'transition':'0.3s'}).typeIt({
            strings: 'Projects',
            speed: 25,
            breakLines: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Projects").typeIt({
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
        $('#location').css({'color':'#D24D57', 'transition':'0.3s'}).typeIt({
            strings: 'Experience',
            speed: 25,
            breakLines: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Experience").typeIt({
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
        $('#location').css({'color':'#67809F', 'transition':'0.3s'}).typeIt({
            strings: 'Fun and Games',
            speed: 25,
            breakLines: false,
            cursor: false
        });
        $('#overview').hide();
        $('#wip').fadeIn(750);
    }).hover(function () {
        $(this).find('.button-text').show().append("Fun and Games").typeIt({
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
