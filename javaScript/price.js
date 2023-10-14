let first_section = document.getElementById('first')
let second_section = document.getElementById('second')
let third_section = document.getElementById('third')
let last_section = document.getElementById('last')
let first_btn = document.querySelectorAll('.stair_radio_btn')

let data_put = document.getElementsByClassName('data_value')[0]
let data_put_2 = document.getElementsByClassName('data_value')[1]
let data_put_3 = document.getElementsByClassName('data_value')[2]
let data_put_4 = document.getElementsByClassName('data_value')[3]
let data_put_5 = document.getElementsByClassName('data_value')[4]
let data_put_6 = document.getElementsByClassName('data_value')[5]

document.getElementById('back').addEventListener('click', function() {
    window.open('../index.html', '_blank')
})

document.getElementById('next').addEventListener('click', () => {
    first_section.classList.toggle('close')
    second_section.classList.toggle('active')
})

document.getElementById('next_2').addEventListener('click', () => {
    second_section.classList.remove('active')
    third_section.classList.toggle('active')

    let prop = document.getElementsByClassName('prop')[0].value
    let prop_2 = document.getElementsByClassName('prop')[1].value
    let prop_3 = document.getElementsByClassName('prop')[2].value

    data_put_3.innerHTML = prop
    data_put_4.innerHTML = prop_2
    data_put_5.innerHTML = prop_3
})

document.getElementById('last_btn').addEventListener('click', () => {
    third_section.classList.remove('active')
    last_section.classList.toggle('active')
})

document.getElementById('back_2').addEventListener('click', function () {
    second_section.classList.remove('active')
    first_section.classList.remove('close')
    first_section.classList.toggle('open')
})

document.getElementById('back_3').addEventListener('click', function () {
    third_section.classList.remove('active')
    second_section.classList.toggle('active')
})

document.getElementById('back_4').addEventListener('click', function () {
    last_section.classList.remove('active')
    third_section.classList.toggle('active')
})

document.getElementById('last_btn_1').addEventListener('click', function () {
    alert('Ваша заявка было успешно отправлена')
    window.open('../index.html', '_blank')
})



first_btn.forEach(function (button) {
    button.addEventListener('click', function () {
        first_btn.forEach(function (btn) {
            btn.style.backgroundColor = '#FFFFFF'
        })
        this.style.backgroundColor = '#FF9646'
    })
})



// 1 section btns

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

// 2 section btns

document.getElementById('type_btn').addEventListener('click', function() {
    let data_stair = document.getElementsByClassName('data_stair')[0].textContent
    data_put_2.innerHTML = data_stair

})
document.getElementById('type_btn_2').addEventListener('click', function() {
    let data_stair = document.getElementsByClassName('data_stair')[1].textContent
    data_put_2.innerHTML = data_stair
})

// 3 section btns

document.getElementById('type_material_btn').addEventListener('click', function () {
    let data_material = document.getElementsByClassName('data_material')[0].textContent
    data_put_6.innerHTML = data_material
})
document.getElementById('type_material_btn_2').addEventListener('click', function () {
    let data_material = document.getElementsByClassName('data_material')[1].textContent
    data_put_6.innerHTML = data_material
})
document.getElementById('type_material_btn_3').addEventListener('click', function () {
    let data_material = document.getElementsByClassName('data_material')[2].textContent
    data_put_6.innerHTML = data_material
})
document.getElementById('type_material_btn_4').addEventListener('click', function () {
    let data_material = document.getElementsByClassName('data_material')[3].textContent
    data_put_6.innerHTML = data_material
})
document.getElementById('type_material_btn_5').addEventListener('click', function () {
    let data_material = document.getElementsByClassName('data_material')[4``].textContent
    data_put_6.innerHTML = data_material
})








