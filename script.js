const progressElement = document.querySelector('#progress-value');
const contentElement = document.querySelector('.content');
const leftCurtain = document.querySelector('.leftCurtain');
const rightCurtain = document.querySelector('.rightCurtain');

function playOpeningAnimation() {
    leftCurtain.style.left = `-50%`;
    rightCurtain.style.left = `150%`;
}

function fadeInContent() {
    contentElement.style.top = 0;
    contentElement.style.opacity = 1;
}

function onPageLoad() {
    setTimeout(playOpeningAnimation, 200);
    setTimeout(fadeInContent, 500);
}

function updateProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressElement.style.width = `${(window.scrollY / pageHeight) * 100}%`;
}

window.onscroll = updateProgress;
window.onload = onPageLoad();
