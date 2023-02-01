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