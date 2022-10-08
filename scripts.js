const container = document.querySelector('div.container');
const confirmB = document.querySelector('button#confirm');
const confirmS = document.querySelector('div.firstscreen');
const signupScreen = document.querySelector('div.signup');
const serverDetails = document.querySelector('div.details');
const signupB = document.querySelector('#signup');
const notificationBadge = document.querySelector('#notificationBadge');

document.querySelectorAll('[data-server-info]').forEach(item => {
    item.onclick = () => {
        item.focus();
        item.select(0, 200);
    }
});

var firstScreen = true;

function notify(msg) {
    notificationBadge.innerHTML = `${msg}`;
    notificationBadge.style.top = "1rem";
    notificationBadge.style.opacity = "1";
    setTimeout(function(){
        notificationBadge.style.top = "-2.5rem";
        notificationBadge.style.opacity = "0";
    }, 7000)
}

const _form = document.querySelector('.form');
_form.addEventListener("submit", function(e) {
    e.preventDefault();
    signupB.disabled = true;
    const data = new FormData(_form);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
    })
    .then((e) => {
        notify('You are now signed up! Please wait to be whitelisted.');
        setTimeout(function(){
            signupScreen.style.left = "-100%";
            serverDetails.style.left = "0%";
        },Math.random()*100)
    });
});

confirmB.onclick = () => {
    if (firstScreen == true) {
        firstScreen = false;
        signupScreen.style.left = "0px";
        confirmS.style.left = "-100%";
        container.style.height = "60%";
    }
}