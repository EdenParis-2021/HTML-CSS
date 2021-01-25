var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");
/*
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}


vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10

}); 
*/
document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        vid.play();
        console.log("waw ca a play");
    }, 100)
})



pauseButton.addEventListener("click", function() {
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})