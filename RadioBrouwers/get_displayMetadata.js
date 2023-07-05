var nowPlayingTimeout;
var nowPlaying;

function loadNowPlaying() {
    $.ajax({
        cache: false,
        dataType: "json",
        url: 'https://radiocamel.nl/api/nowplaying/radio_brouwers',
        success: function(np) {
            // Do something with the Now Playing data.

            nowPlaying = np;
            npline = (nowPlaying['now_playing']);
            song = (npline['song'])
            nowplayingtext = (song['text'])
            console.log(nowplayingtext)
            var nowplayingsong = nowplayingtext;
            document.getElementById("liedje").innerHTML = nowplayingsong;

            nowPlayingTimeout = setTimeout(loadNowPlaying, 1500);
        }
    }).fail(function() {
        nowPlayingTimeout = setTimeout(loadNowPlaying, 3000);
    });
}

$(function() {
    loadNowPlaying();
});
