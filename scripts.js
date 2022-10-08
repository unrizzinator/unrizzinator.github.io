const container = document.querySelector('div.container');
const confirmB = document.querySelector('button#confirm');
const confirmS = document.querySelector('div.firstscreen');
const signupScreen = document.querySelector('div.signup');

var firstScreen = true;

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

confirmB.onclick = () => {
    if (firstScreen == true) {
        firstScreen = false;
        signupScreen.style.left = "0px";
        confirmS.style.left = "-100%";
        container.style.height = "60%";
    }
}