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
let darkMode = 'dark'
dark.addEventListener('click', ()=>{
    if (body.classList.contains("dark")) {
        body.classList.remove('dark')
    }else{
        body.classList.add('dark')
    }
})


// FULL JS
const menuButtons = document.querySelectorAll('.carte button');
const menuSection = document.querySelector('.full-js');

menuButtons.forEach(button => {
    button.addEventListener('click', function() {
    while (menuSection.firstChild) {
    menuSection.removeChild(menuSection.firstChild);
    }

    const title = document.createElement('div');
    title.classList.add('titre-menu');
    const titleText = document.createElement('p');
    titleText.textContent = 'MENU';
    title.appendChild(titleText);
    const dishType = document.createElement('h4');
    dishType.textContent = button.textContent;
    title.appendChild(dishType);
    menuSection.appendChild(title);

    const dishes = document.createElement('div');
    dishes.classList.add('plats-img');

    for (let i = 1; i <= 6; i++) {
        const dish = document.createElement('div');
        dish.classList.add('plats');
        const dishImg = document.createElement('img');
        dishImg.src = `./public/img/menu/menu-item-${i}.png`;
        dishImg.alt = '';
        dish.appendChild(dishImg);
        const dishText = document.createElement('div');
        dishText.classList.add('txt-plats');
        const dishTitle = document.createElement('h5');
        dishTitle.textContent = 'Plats';
        dishText.appendChild(dishTitle);
        const dishDesc = document.createElement('p');
        dishDesc.textContent = 'Lorem ipsum dolor sit amet.';
        dishText.appendChild(dishDesc);
        const dishPrice = document.createElement('p');
        dishPrice.textContent = '10$';
        dishText.appendChild(dishPrice);
        dish.appendChild(dishText);
        dishes.appendChild(dish);
    }

    menuSection.appendChild(dishes);
});
});


















// FIN FULL JS

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

// carousel2


