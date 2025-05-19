const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modalVideo = document.getElementById('videoPlayer');
const thumbnailVideo = document.getElementById('thumbnailVideo');

window.addEventListener('DOMContentLoaded', () => {
    thumbnailVideo.muted = true;
    thumbnailVideo.play();
});

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    thumbnailVideo.pause();
    modalVideo.muted = false;
    modalVideo.currentTime = 0;
    modalVideo.play();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.muted = true;
    thumbnailVideo.play();
});
