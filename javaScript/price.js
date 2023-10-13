let first_section = document.getElementById('first')
let second_section = document.getElementById('second')

document.getElementById('next').addEventListener('click', () => {
    first_section.classList.toggle('close')
    second_section.classList.toggle('active')
})





