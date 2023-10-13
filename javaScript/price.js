let first_section = document.getElementById('first')
let second_section = document.getElementById('second')

document.getElementById('next').addEventListener('click', () => {
    first_section.classList.toggle('close')
    second_section.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.stairs')
    const slides = document.querySelectorAll('.stair')

    let index = 0

    function show_slides (index) {
        slider.style.transform = `translateX(-${index * 100}%)`
    }
    
    document.getElementById('prev_btn').addEventListener('click', function() {
        index = (index + 1) % slides.length;
        show_slides(index);
    })
    document.getElementById('next_btn').addEventListener('click', function() {
        index = (index - 1 + slides.length) % slides.length;
        show_slides(index);
    })
})



