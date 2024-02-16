(function ($) {
    "use strict";
    var nav = $('nav'),
        sound = $("#jingle_bell")[0],
        pauseBtn = $(".sound_toggle_btn"),
        myIndex = 0,
        mybody = $('#home');
    /* navOffset ends */


    //site music control js
    var playing = false;
    // sound.play();
    pauseBtn.on('click', function () {
        $(this).children('span').toggleClass('fa fa-play fa fa-pause');
        if (playing == true) {
            sound.pause();
            playing = false;
        } else {
            sound.play();
            playing = true;
        }

    });

    // DEFAULT VOLUME
    sound.volume = '0.8';
    $('.slider-input').on('change', function () {
        var getValue = $(this).val() / 10;
        sound.volume = getValue;
    });



})(jQuery);