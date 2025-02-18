document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.addEventListener("mouseover", video.play);
    video.addEventListener("mouseout", video.pause);
  });
});
