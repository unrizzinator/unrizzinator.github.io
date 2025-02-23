const progressElement = document.querySelector('#progress-value');
const contentElement = document.querySelector('.content');

function updateProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressElement.style.width = `${(window.scrollY / pageHeight) * 100}%`;
}

window.onscroll = updateProgress;
