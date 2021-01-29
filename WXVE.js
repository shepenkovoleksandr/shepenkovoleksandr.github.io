let butNext = document.querySelector(".btn-prev");
let butPrev = document.querySelector(".btn-next");
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