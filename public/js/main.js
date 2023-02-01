// modal js

let modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// fin modal js

// dark mode

let dark = document.querySelector('label')
let body = document.querySelector('body')
let header = document.querySelector('header')
let h5 = document.querySelectorAll('h5')
let btn = document.querySelector('.btn2-header')
let cards = document.querySelector(".pt-cards")
let paraCard = document.querySelector(".cards")
let chefs = document.querySelector('.pt-chefs')
console.log(chefs);
dark.addEventListener('click', ()=>{
    body.style.backgroundColor = "black";
    body.style.color = "white";
    // header.style.backgroundColor = "black";
    // h5.style.color = "black";
    // btn.style.color = "white";
    // cards.style.backgroundColor = "black";
    // paraCard.style.color = "black";
    // chefs.style.color= "none"
})

let slidePosition = 0;
let slides = document.getElementsByClassName('carousel_item')
let totalslides = slides.length;
let btnNext = document.getElementById
('carousel_button--next')
let btnPrev = document.getElementById('carousel_button--prev')

btnNext.addEventListener('click', ()=>{
    moveToNextSlide()
})
btnPrev.addEventListener('click', ()=>{
    moveToPrevSlide()
})

function updateSlidePosition() {
    for (let slide of slides){
        slide.classList
        .remove('carousel_item--visible')
        slide.classList.add('carousel_item--hidden')
    }

    slides[slidePosition].classList.add('carousel_item--visible')
}
function moveToNextSlide() {
    updateSlidePosition()
    if (slidePosition === totalslides - 1) {
        slidePosition = 0;
    }else{
        slidePosition++
    }
}
function moveToPrevSlide() {
    updateSlidePosition()
    if (slidePosition === 0) {
        slidePosition = totalslides - 1;
    }else{
        slidePosition--
    }
}