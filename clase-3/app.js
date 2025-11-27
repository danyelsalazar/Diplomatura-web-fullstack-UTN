const nav = document.querySelector('#nav')
const abrir_menu = document.querySelector(".btn-abrir-menu")
const cerrar_menu = document.querySelector(".btn-cerrar-menu")
const main = document.querySelector("main")

abrir_menu.addEventListener("click", ()=>{
    nav.classList.add("nav-desplegar")
    main.classList.add("active")

    main.addEventListener("click", ()=>{
        nav.classList.remove("nav-desplegar")
        main.classList.remove("active")
    })
})

cerrar_menu.addEventListener("click", ()=>{
    nav.classList.remove("nav-desplegar")
    main.classList.remove("active")
})
