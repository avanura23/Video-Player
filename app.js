var video = document.querySelector(".video");
var slider = document.querySelector(".slider-color");
var btn = document.getElementById("play-pause");

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'play';
        video.play();
    } else {
        btn.className = "pause";
        video.pause();
    }
}

btn.onclick = function () { 
    togglePlayPause();
}

video.addEventListener("mouseover", function( event ) {
    btn.classList.remove("hidden");
})

video.addEventListener('timeupdate', function () {
    var sliderPosition = video.currentTime / video.duration;
    slider.style.width  = sliderPosition * 100 + "%";
    if (video.ended) {
        btn.className = "play";
    }
});

