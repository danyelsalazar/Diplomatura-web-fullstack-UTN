//USAMOS // para hacer comentarios

//guardamos cada uno de los elementos del html que vamos a usar en una constante: 
const button = document.querySelector('.button-select'); //selecionamos el boton mediante su class
const boody = document.querySelector('body'); //selecionamos el body mediuante su nombre de etiqueta

//hacemos un evento que se ejecutara cada vez que damos click al boton
button.addEventListener('click', () =>{
    //Si el body ya tiene la clase "body-light" entramos al if
    //Si no lo tiene entramos al else
    if(boody.classList.contains("body-light")){
        console.log("bloque if") //guia para ver en consola a que bloque va entrando
        boody.classList.remove("body-light") //removemos la clase "body-light" de la lista de clases del body
        boody.classList.add("body-darck"); // agregamos la clase "body-darck" a la lista de clases del body
    }else{
        console.log("bloque else") //guia para ver en consola a que bloque va entrando
        boody.classList.remove("body-darck") //removemos la clase "body-darck" de la lista de clases del body
        boody.classList.add("body-light");// agregamos la clase "body-light" a la lista de clases del body
    }
    console.log("me diste click")//guia para saber que esta funcionando el click
} 
)
