AOS.init();

function playVideoBG(play = true, on = false) {
    const modau_video1 = document.getElementById('modau_video1');
    if (modau_video1) {
        if (play) {
            if (on) {
                modau_video1.play();
            }
        } else {
            modau_video1.pause();
        }
    }
}

function start() {
    $('#load').hide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // $('#root-content').show();
    playVideoBG(true, true);
}

$(window).on('load', function () {
    console.log('Loaded');
    $('#loading').hide();
    $('#starting').show();
});

$(window).on('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > $(window).height()/2) {
        $('.modau-1').css("opacity", 0);
        playVideoBG(false);
    } else {
        $('.modau-1').css("opacity", 1);
        playVideoBG(true);
    }

    let modau30 = $('.modau-30').height()
    if (scrollTop > modau30  +   $(window).height() + 200) {
        $('.modau-30').css("opacity", 0);
    } else {
        $('.modau-30').css("opacity", 1);
    }
});

