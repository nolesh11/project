let mobileMenu = document.querySelector('.mobile_nav')
let call_back = document.querySelector('.call_back')
let thanks = document.querySelector('.thanks')

document.getElementById('burger_menu').addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
    this.classList.toggle('open')
})

document.getElementById('primary').addEventListener('click', () => {  
    call_back.classList.toggle('active')
})

document.getElementById('cross').addEventListener('click', () => {
    call_back.classList.remove('active')
})

document.getElementById('submit').addEventListener('click', () => {
    call_back.classList.remove('active')
    thanks.classList.toggle('active')
})

document.getElementById('thanks_btn').addEventListener('click', () => {
    thanks.classList.remove('active')
})

document.getElementById('nav_btn').addEventListener('click', () => {
    call_back.classList.toggle('active')
})

document.getElementById('price_btn').addEventListener('click', () => {
    window.open('./html/price.html', '_blank')
})



// document.addEventListener('DOMContentLoaded', function() {
//     const slidesContainer = document.querySelector('.stairs_variaty');
//     const slides = document.querySelectorAll('.stair_price');
//     const totalSlides = slides.length;
//     let currentSlide = 0;

//     function updateSlides() {
//         slidesContainer.style.transform = `translateX(-${currentSlide * (300 / 3)}%)`;
//     }

//     document.querySelector('.next').addEventListener('click', function() {
//         currentSlide = (currentSlide + 1) % totalSlides;
//         updateSlides();
//     });

//     document.querySelector('.prev').addEventListener('click', function() {
//         currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//         updateSlides();
//     });
// });