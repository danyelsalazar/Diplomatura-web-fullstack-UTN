const burger = document.querySelector('.content-burger-rotate');
const menu_abierto = document.querySelector('.menu-abierto');
const body = document.querySelector('section');
const section = document.querySelector('section')

burger.addEventListener('click', ()=>{
    console.log("1")
    burger.classList.toggle('active');
    menu_abierto.classList.toggle('active');
    section.classList.toggle('active');
});

body.addEventListener('click', ()=>{
    if(menu_abierto.classList.contains('active') && burger.classList.contains('active')){
        menu_abierto.classList.remove('active')
        burger.classList.remove('active')
        section.classList.remove('active');
    }
})

