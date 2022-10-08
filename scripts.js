const container = document.querySelector('div.container');
const confirmB = document.querySelector('button#confirm');
const confirmS = document.querySelector('div.firstscreen');
const signupScreen = document.querySelector('div.signup');
const notificationBadge = document.querySelector('#notificationBadge');

var firstScreen = true;

function notify(msg) {
    notificationBadge.innerHTML = `${msg}`;
    notificationBadge.style.top = "1rem";
    setTimeout(function(){
        notificationBadge.style.top = "-2.5rem";
    }, 5000)
}

const _form = document.querySelector('.form');
_form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(_form);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
    })
    .then((e) => {
        notify('You are now signed up!')
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