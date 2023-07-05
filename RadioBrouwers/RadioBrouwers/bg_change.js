var i = 0;
var images = [];
var time = 40000;
var image = document.getElementById('achtergrond')
// Image List
  images[0] = 'RADIO-BROUWERS.gif';
  images[1] = 'BROUWERS-PALMBOOM.gif';
  images[2] = 'MAASTRICHT.gif';
  images[3] = 'BLACKLODGE.gif';
  images[4] = 'TVBROUWERS.gif';
// Change Image
function changeImg(){
  document.getElementById('video-bg-elem').src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
