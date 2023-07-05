var up = function () {
var volume = $("#player-background").prop("volume") + 0.2;
if (volume > 1) {
volume = 1;
}
$("#player-background").prop("volume", volume);
}

var down = function () {
var volume = $("#player-background").prop("volume") - 0.2;
if (volume < 0) {
volume = 0;
}
$("#player-background").prop("volume", volume);
}

var mute = function () {
var volume = $("#player-background").prop("volume") - 1.0;
if (volume < 0) {
volume = 0;
}
$("#player-background").prop("volume", volume);
}

var speel = function () {
var volume = $("#player-background").prop("volume") + 1.0;
if (volume > 1) {
volume = 1;
}
$("#player-background").prop("volume", volume);
}

  $("#player-pause").click(function () { mute(); });
  $("#player-play").click(function () { $("#player-background").trigger('play'); });
  $("#player-play").click(function () { speel(); });
  $("#player-plus").click(function () { up(); });
  $("#player-moins").click(function () { down(); });

  $("#mplayer-pause").click(function () { mute(); });
  $("#mplayer-play").click(function () { $("#player-background").trigger('play'); });
  $("#mplayer-play").click(function () { speel(); });
  $("#mplayer-plus").click(function () { up(); });
  $("#mplayer-moins").click(function () { down(); });
