let mobileMenu = document.querySelector('.mobile_nav')
let call_back = document.querySelector('.call_back')

document.getElementById('burger_menu').addEventListener('click', function(){
    
    mobileMenu.classList.toggle('active')
    this.classList.toggle('open')
})

document.getElementById('primary').addEventListener('click', () => {
    
    call_back.classList.toggle('active')
    // console.log('hello');
})

document.getElementById('cross').addEventListener('click', () => {
    call_back.classList.remove('active')
})