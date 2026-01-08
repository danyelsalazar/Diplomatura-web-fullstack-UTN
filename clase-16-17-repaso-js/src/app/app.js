const $inputName = document.getElementById("name")
const $inputemail = document.getElementById("email")
const $form = document.querySelector(".inputs")
const $contactsList = document.querySelector("tbody")
const $btnEditar = document.querySelector(".editar-contact")
const $formActualizacion = document.getElementById("formActualizacion")
const $btnNameActualizado = document.getElementById("name-actualizado")
const $btnEmailActualizado = document.getElementById("email-actualizado")
const $containactualizacion = document.querySelector(".container-actualizacion")

// console.log($inputemail);
// console.log(localStorage, "----datos aquiii-----");

//creamos un arreglo vacio, este arreglo va a ser un array de objetos que contendra todos los contactos para poder ir cargandolo y mostrandolos en el DOM , SI el localStorage tiene contactos registrados estos se cargaran al arreglo contactos, si no este se inizializa vacio:
let contactos = JSON.parse(localStorage.getItem("lista")) || []


//apenas carga nuestra pagina mostramos los datos que esten guardados en el arreglo contactos que ya cuando lo creamos el verifica si existen contactos guardados en el localStorage para cargarlos en el arreglo
document.addEventListener('DOMContentLoaded', ()=>{
    renderContact()
})


//--------------------funcion para usar localStoraje sin repetir codigo:
//---------------------------

const CRUDLocalStorage = ()=>{
    let contactosString = JSON.stringify(contactos)//convertimos el arreglo de contactos en string
        localStorage.setItem("lista", contactosString)//vamos guardando el arreglocontacto en el localStorage, cada vez que carguemos o actualicemos un contacto el string  que es un "arreglo" se ira modificando

}



//--------------funcion para reflejamos el contenido en el html
//--------------------------------------------

const renderContact = () =>{
    //1 crear en js una fila de tablas
    //2 aniadirle contenido html
    //3 agregar la fila a la tabla
    let bloqueAcumulado = ``
    contactos.forEach((contacto, i)=>{

        bloqueAcumulado += `<tr>
        <td>${contacto.name}</td>
        <td>${contacto.email}</td>
        <td><button class= "editar-contact" onclick = "actualizarContact(${i})">Editar</button>
            <button class ="eliminar-contact" onclick ="eliminarContacto(${i})">Eliminar</button></td> 
        </tr>`
        // console.log(bloqueAcumulado); //para ir viendo el mstring que se va generando que tiene las etiquetas
    })
    $contactsList.innerHTML = bloqueAcumulado
}

//----------funcion para cargar contacto:
//--------------------------------------------
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
    
    CRUDLocalStorage()

    $form.reset() //cuando hagamos clic se reseteara los valores de los inputs asi se limpia el campo y podemos escribir uno nuevo

    //consola para ir vuendo el arreglo de objetos contacto a medida que le vamos cargando los datos
    console.log(contactos);

    // llamamos a la funcion que muestra los contactos en la lista:
    renderContact()
    
}
//-----------cada vez que enviemos el formulario:
$form.addEventListener("submit", sendForm)



//----------------Funcion para actualizar contactos
//-------------------------------------------------

const actualizarContact = (i)=>{
    console.log(i)//nos muestra el indice del comntacto que estamos clikeando

    $containactualizacion.classList.remove("container-actualizacion")
    $containactualizacion.classList.add("container-actualizacion-view")

    $formActualizacion.addEventListener("submit",(e)=>{

        e.preventDefault(); //evitamos que se recargue la pagina

        let contactoActualizado = {
            name: $btnNameActualizado.value,
            email: $btnEmailActualizado.value
        }

        contactos[i] = contactoActualizado

        CRUDLocalStorage()
        
        // console.log(contactos[i]);//para ir viendo que se actualizo en el arreglo

        $formActualizacion.reset() 

        //llamamos a la funcion que renderiza el contenido visual
        renderContact()
        $containactualizacion.classList.remove("container-actualizacion-view")
        $containactualizacion.classList.add("container-actualizacion")

    })
    
}

//------------------eliminar contacto
//------------------------------------

const eliminarContacto = (i)=>{
    // console.log(i);

    let confirmarEliminacion= confirm(`seguro que quiere eliminar el contacto de ${contactos[i].name}?`) //preguntamos si desea eliminar el contacto antes de eliminarlo
    
    if (confirmarEliminacion){
        contactos.splice(i,1)
        // console.log(contactos);//para ir verificando que se van elimianndo el contacto del arreglo
        CRUDLocalStorage() // cargamos el arreglo ya sin el contacto eliminado al localStorage
        renderContact()//renderizamos la lista de contactos que se muestra en pantalla
    }
    
}
