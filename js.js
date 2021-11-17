// Прелоардер
window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 000);
}

// регестарция
let button = document.querySelector(".reg");
let closee = document.querySelector(".close");
let form = document.querySelector("#window");
let shadow = document.createElement("div");
shadow.id = "shadow"
function open(){
document.body.appendChild(shadow)
form.style.opacity = 1;
}
button.onclick = open;
function close(){
    shadow.parentNode.removeChild(shadow);
    form.style.opacity = 0;
}
closee.onclick = close;
shadow.onclick = close;