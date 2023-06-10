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

function scrollNgang1() {
    const scrollContainer = document.querySelector(".modau-34");
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        if (scrollContainer.scrollLeft > $(window).width() * 3 - $(window).width()) {
            $(window).scrollTop($(window).scrollTop() + 200)
        }
    });
}


function scrollNgang2() {
    const scrollContainer = document.querySelector(".modau-35");
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        if (
            scrollContainer.scrollLeft > 400 * 8 - $(window).width() ||
            scrollContainer.scrollLeft === 0
        ) {
            $(window).scrollTop($(window).scrollTop() + 200)
        }
    });
}

function scrollNgang3() {
    const scrollContainer = document.querySelector(".modau-37");
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        if (scrollContainer.scrollLeft > 400 * 4 - $(window).width() ||
            scrollContainer.scrollLeft === 0) {
            $(window).scrollTop($(window).scrollTop() + 200)
        }
        console.log(scrollContainer.scrollLeft)
        console.log(scrollContainer.clientWidth)
    });
}

function loadAudio(i) {
    console.log(`.audio${i}`)
    const wavesurfer = WaveSurfer.create({
        // The container is where the waveform will be drawn.
        // This is the only required parameter.
        // We're passing `document.body` here, but you can pass any DOM element or CSS selector.
        container: `#audio${i}`,
        height: 50,

        // The main waveform.
        waveColor: 'rgb(38, 130, 209)',

        // This is color of the progress mask
        progressColor: 'rgb(0, 0, 0)',
    })
    // wavesurfer.load('https://cdn.pixabay.com/audio/2022/06/27/audio_896b171c42.mp3');
      wavesurfer.load(`./audio/p1/${i}.mp3`);

    // Next, let's change the text on the button when the audio is playing
    wavesurfer.on('play', () => {
        $(`.audio${i} .play`).hide();
        $(`.audio${i} .pause`).show();
    })
    // And when it's paused
    wavesurfer.on('pause', () => {
        $(`.audio${i} .play`).show();
        $(`.audio${i} .pause`).hide();
    })

    // Subscribe to wavesurfer's `ready` event to know when we can interact with the player
    wavesurfer.on('ready', () => {
        $(`.audio${i} .play`).click(() => {
            if (wavesurfer.isPlaying()) {
                wavesurfer.pause()
            } else {
                wavesurfer.play()
            }
        })
        $(`.audio${i} .pause`).click(() => {
            if (wavesurfer.isPlaying()) {
                wavesurfer.pause()
            } else {
                wavesurfer.play()
            }
        })
    })
}


function start() {
    $('#load').hide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // $('#root-content').show();
    playVideoBG(true, true);
    scrollNgang1();
    scrollNgang2();
    scrollNgang3();

    loadImageSvg();

    loadAudio(1);
    loadAudio(2);
    loadAudio(3);
    loadAudio(4);
    loadAudio(5);
    loadAudio(6);
    loadAudio(7);
    loadAudio(8);

    
}

$(window).on('load', function () {
    console.log('Loaded');
    $('#loading').hide();
    $('#starting').show();
});

$(window).on('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let modau30 = $('.modau-300').height()
    if (scrollTop > 200) {
        $('.modau-300').css("opacity", 0);
    } else {
        $('.modau-300').css("opacity", 1);
    }

    let modau36 = $('.modau-36-1')
    if (scrollTop > modau36.offset().top - 120) {
        $('.modau-36-1').css("opacity", 0);
        $('.modau-36-2').css("opacity", 1);
        $('.modau-36-20').css("opacity", 1);
    } else {
        $('.modau-36-1').css("opacity", 1);
        $('.modau-36-2').css("opacity", 0);
        $('.modau-36-20').css("opacity", 0);
    }
});

