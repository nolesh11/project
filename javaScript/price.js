let first_section = document.getElementById('first')
let second_section = document.getElementById('second')
let third_section = document.getElementById('third')

document.getElementById('next').addEventListener('click', () => {
    first_section.classList.toggle('close')
    second_section.classList.toggle('active')
})
document.getElementById('next_2').addEventListener('click', () => {
    second_section.classList.remove('active')
    third_section.classList.toggle('active')
})





