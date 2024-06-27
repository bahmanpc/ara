// navbar variables
const nav = document.querySelector(".mobile-nav"),
navMenuBtn = document.querySelector(".nav-menu-btn"),
navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function mobile
const navToggleFunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables desktop
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
themeBtn[i].addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  for (let j = 0; j < themeBtn.length; j++) {
    themeBtn[j].classList.toggle("light");
    themeBtn[j].classList.toggle("dark");
  }
});
}


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[1]);
let timeRunning = 600;
let timeAutoNext = 7000;

nextDom.onclick = function(){
showSlider('next');    
}

prevDom.onclick = function(){
showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
next.click();
}, timeAutoNext)
function showSlider(type){
let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

if(type === 'next'){
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
}else{
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
}
clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
}, timeRunning);

clearTimeout(runNextAuto);
runNextAuto = setTimeout(() => {
 next.click();
}, timeAutoNext)
}