const $inputName = document.getElementById("name")
const $inputemail = document.getElementById("email")
const $form = document.querySelector("form")
const $contactsList = document.querySelector("tbody")

// console.log($inputemail);
// console.log(localStorage, "----datos aquiii-----");

//creamos un arreglo vacio, este arreglo va a ser un array de objetos que contendra todos los contactos para poder ir cargandolo y mostrandolos en el DOM , SI el localStorage tiene contactos registrados estos se cargaran al arreglo contactos, si no este se inizializa vacio:
let contactos = JSON.parse(localStorage.getItem("lista")) || []


//apenas carga nuestra pagina mostramos los datos que esten guardados en el arreglo contactos que ya cuando lo creamos el verifica si existen contactos guardados en el localStorage para cargarlos en el arreglo
document.addEventListener('DOMContentLoaded', ()=>{
    renderContact()
})


//funcion para reflejamos el contenido en el html
const renderContact = () =>{
    //1 crear en js una fila de tablas
    //2 aniadirle contenido html
    //3 agregar la fila a la tabla
    let bloqueAcumulado = ``
    contactos.forEach((contacto)=>{

        bloqueAcumulado += `<tr>
        <td>${contacto.name}</td>
        <td>${contacto.email}</td>
        <td><button>Editar</button>
            <button>Eliminar</button></td> 
        </tr>`
        // console.log(bloqueAcumulado); //para ir viendo el mstring que se va generando que tiene las etiquetas
    })
    $contactsList.innerHTML = bloqueAcumulado
}

const sendForm = (event) =>{
    event.preventDefault()//evitamos que se recargue la pagiuna al hacer click en eln boton

    // consolas para ir verificando cada dato que se va cargando:
    console.log(`nombre: ${$inputName.value}`);
    console.log(`email: ${$inputemail.value}`);
    
    //clave valor:
    const newContact ={
        name: $inputName.value,
        email: $inputemail.value
    }

    contactos.push(newContact)//guardamos el contacto en el arreglo
    let contactosString = JSON.stringify(contactos)//convertimos el arreglo de contactos en string
    localStorage.setItem("lista", contactosString)//vamos guardando el arreglocontacto en el localStorage, cada vez que carguemos un nuevo contacto el string "arreglo" se ira modificando

    $form.reset() //cuando hagamos clic se reseteara los valores de los inputs asi se limpia el campo y podemos escribir uno nuevo

    //consola para ir vuendo el arreglo de objetos contacto a medida que le vamos cargando los datos
    console.log(contactos);

    // llamamos a la funcion que muestra los contactos en la lista:
    renderContact()
    
}

//cada vez que enviemos el formulario:
$form.addEventListener("submit", sendForm)