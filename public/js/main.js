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

// carousel3
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
