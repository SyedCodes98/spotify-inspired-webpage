const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const exitBtn = document.getElementById("exitFullscreenBtn");
const overlayVideo = document.getElementById("overlayVideo");
const playImages = document.querySelectorAll(".playImage");
const videos = document.querySelectorAll(".videoPlayer");

// Open overlay with video
openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  overlayVideo.play();

  // Request fullscreen for overlay
  if (overlay.requestFullscreen) {
    overlay.requestFullscreen().catch(err => console.log(err));
  } else if (overlay.webkitRequestFullscreen) {
    overlay.webkitRequestFullscreen();
  } else if (overlay.mozRequestFullScreen) {
    overlay.mozRequestFullScreen();
  } else if (overlay.msRequestFullscreen) {
    overlay.msRequestFullscreen();
  }

  exitBtn.style.display = "block";
});

// Close overlay
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  overlayVideo.pause();
  overlayVideo.currentTime = 0;
  exitBtn.style.display = "none";

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
});

// Exit fullscreen button
exitBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  overlay.style.display = "none";
  exitBtn.style.display = "none";

  overlayVideo.pause();
  overlayVideo.currentTime = 0;

  videos.forEach(video => {
    video.pause();
    video.style.display = "none";
  });

  playImages.forEach(img => {
    img.style.display = "block";
  });
});

// Play individual videos when image clicked
playImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    img.style.display = "none";
    const video = videos[index];
    video.style.display = "block";
    video.play();

    if (video.requestFullscreen) {
      video.requestFullscreen().catch(err => console.log(err));
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }

    exitBtn.style.display = "block";
  });
});
