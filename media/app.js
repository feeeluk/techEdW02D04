const AUDIO = document.getElementById("audio");

const AUDIOPLAYBUTTON = document.getElementById("audioPlay");
AUDIOPLAYBUTTON.addEventListener("click", function() {
    AUDIO.play();
})

const AUDIOSTOPBUTTON = document.getElementById("audioStop");
AUDIOSTOPBUTTON.addEventListener("click", function() {
    AUDIO.pause();
    AUDIO.load();
})

const AUDIOPAUSEBUTTON = document.getElementById("audioPause");
AUDIOPAUSEBUTTON.addEventListener("click", function() {
    AUDIO.pause();
})

const AUDIOBACKBUTTON = document.getElementById("audioBack");
AUDIOBACKBUTTON.addEventListener("click", function() {
    AUDIO.currentTime = AUDIO.currentTime - 10;
})

const AUDIOFORWARDBUTTON = document.getElementById("audioForward");
AUDIOFORWARDBUTTON.addEventListener("click", function() {
    AUDIO.currentTime = AUDIO.currentTime + 10;
})




const VIDEO = document.getElementById("video");

const VIDEOPLAYBUTTON = document.getElementById("videoPlay");
VIDEOPLAYBUTTON.addEventListener("click", function() {
    VIDEO.play();
})

const VIDEOSTOPBUTTON = document.getElementById("videoStop");
VIDEOSTOPBUTTON.addEventListener("click", function() {
    VIDEO.pause();
    VIDEO.load();
})

const VIDEOPAUSEBUTTON = document.getElementById("videoPause");
VIDEOPAUSEBUTTON.addEventListener("click", function() {
    VIDEO.pause();
})

const VIDEOBACKBUTTON = document.getElementById("videoBack");
VIDEOBACKBUTTON.addEventListener("click", function() {
    VIDEO.currentTime = VIDEO.currentTime - 10;
})

const VIDEOFORWARDBUTTON = document.getElementById("videoForward");
VIDEOFORWARDBUTTON.addEventListener("click", function() {
    VIDEO.currentTime = VIDEO.currentTime + 10;
})