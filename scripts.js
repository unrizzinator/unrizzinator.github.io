const container = document.querySelector('div.container');
const confirmB = document.querySelector('button#confirm');
const confirmS = document.querySelector('div.firstscreen');
const signupScreen = document.querySelector('div.signup');

var firstScreen = true;

confirmB.onclick = () => {
    if (firstScreen == true) {
        firstScreen = false;
        signupScreen.style.left = "0px";
        confirmS.style.left = "-100%";
        container.style.height = "60%";
    }
}