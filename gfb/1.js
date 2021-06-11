// Прелоардер
window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}

// Анимация загрузки
let animElemets1 = document.querySelectorAll('.my-anim-left');
if (animElemets1.length > 0) {
    for (let i = 0; i < animElemets1.length; i++) {
        let item = animElemets1[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left')
        })
        myAnimScroll(item, 'activ-anim-left');
    }
}

let animElemets2 = document.querySelectorAll('.my-anim-right');
if (animElemets2.length > 0) {
    for (let i = 0; i < animElemets2.length; i++) {
        let item = animElemets2[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right')
        })
        myAnimScroll(item, 'activ-anim-right');
    }
}

function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}

// Увелечение фоток
let fotoFull = document.querySelectorAll(".fotoFull");
function fullScreen(){
if(document.fullscreenEnabled && document.fullscreenElement === null){
    this.requestFullscreen();
}
else{
    document.exitFullscreen()
}
}

// fotoFull.addEventListener("click", fullScreen);

for(let i = 0; i < fotoFull.length; i++){
    fotoFull[i].addEventListener("click", fullScreen)
}

//Карусель
let butNext = document.querySelector(".btn-next");
let butPrev = document.querySelector(".btn-prev");
let slider = document.querySelector(".slider");
let sliderLine = document.querySelector(".slider-line");
let sliderItem = document.querySelectorAll(".slider-item");
let count = 0;
let widthSlider;
function init(){
    widthSlider = slider.clientWidth;
    for(let i = 0; i < sliderItem.length; i++){
        sliderItem[i].style.width = widthSlider + "px";
    }
    sliderLine.style.width = widthSlider * sliderItem.length + "px";
}
window.addEventListener("resize", init)
init();

function mem(){
sliderLine.style.transform = "translate(-" + count * widthSlider + "px)";

}
function moveNext(){
count++;
if(count > sliderItem.length -1){
    count = 0;
}
mem();
}

function moveBack(){
count--;
if(count < 0){
    count = sliderItem.length -1;
}
mem()
}
butNext.onclick = moveNext;
butPrev.onclick = moveBack;