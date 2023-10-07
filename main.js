document.getElementById('burger_menu').addEventListener('click', function(){
    let mobileMenu = document.querySelector('.mobile_nav')
    mobileMenu.classList.toggle('active')
    this.classList.toggle('open')
})

