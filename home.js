var show1 = document.getElementById("music1");
var audio = document.querySelector('#audio4')
show1.addEventListener("click", function(){
  audio.play()
});
show1.addEventListener("mouseout", function(){
 audio.pause()
});


