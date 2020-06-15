var video = document.querySelector(".video");
var slider = document.querySelector(".slider-color");
var btn = document.getElementById("play-pause");
var videoContainer = document.querySelector(".c-video")
var volumeControl = document.getElementById("vol-control");

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

// video.addEventListener("mouseover", function() {
//     btn.classList.remove("hidden");
// });

// video.addEventListener("mouseout", function () {
//     btn.classList.add("hiddden");
// })

videoContainer.onmouseover = function () {  
    btn.classList.remove("hidden");
}

videoContainer.onmouseout = function () {
    btn.classList.add("hidden");
}

video.addEventListener('timeupdate', function () {
    var sliderPosition = video.currentTime / video.duration;
    slider.style.width  = sliderPosition * 100 + "%";
    if (video.ended) {
        btn.className = "play";
    }
});


volumeControl.addEventListener('change', function () {  
    video.volume = this.value / 100;
});

volumeControl.addEventListener('input', function () {
    video.volume = this.value / 100;
});
