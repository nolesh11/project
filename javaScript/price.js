let first_section = document.getElementById('first')
let second_section = document.getElementById('second')
let third_section = document.getElementById('third')
let last_section = document.getElementById('last')
let first_btn = document.querySelectorAll('.stair_radio_btn')
let second_btn = document.querySelectorAll('.type_btn')

let arr1 = []

document.getElementById('next').addEventListener('click', () => {
    first_section.classList.toggle('close')
    second_section.classList.toggle('active')
})
document.getElementById('next_2').addEventListener('click', () => {
    second_section.classList.remove('active')
    third_section.classList.toggle('active')
})
document.getElementById('last_btn').addEventListener('click', () => {
    third_section.classList.remove('active')
    last_section.classList.toggle('active')
})

first_btn.forEach(function (button) {
    button.addEventListener('click', function () {
        first_btn.forEach(function (btn) {
            btn.style.backgroundColor = '#FFFFFF'
        })
        this.style.backgroundColor = '#FF9646'
    })
})

let data_put = document.getElementsByClassName('data_value')[0]
document.getElementById('stair_radio_btn').addEventListener('click', function () {
    let data_type = document.getElementsByClassName('data_type')[0].textContent
    data_put.innerHTML = data_type
})
document.getElementById('stair_radio_btn_1').addEventListener('click', function () {
    let data_type = document.getElementsByClassName('data_type')[1].textContent
    data_put.innerHTML = data_type
})
document.getElementById('stair_radio_btn_2').addEventListener('click', function () {
    let data_type = document.getElementsByClassName('data_type')[2].textContent
    data_put.innerHTML = data_type
})
document.getElementById('stair_radio_btn_3').addEventListener('click', function () {
    let data_type = document.getElementsByClassName('data_type')[3].textContent
    data_put.innerHTML = data_type
})
document.getElementById('stair_radio_btn_4').addEventListener('click', function () {
    let data_type = document.getElementsByClassName('data_type')[4].textContent
    data_put.innerHTML = data_type
})

// second_btn.forEach(function (button_2) {
//     button_2.addEventListener('click', function () {
//         second_btn.forEach(function (btn_2) {
//             btn_2.style.backgroundColor = '#FFFFFF'
//         })
//         this.style.backgroundColor = '#FF9646'
//     })
// })







