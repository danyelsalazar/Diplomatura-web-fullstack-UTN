const $inputName = document.getElementById("name")
const $inputemail = document.getElementById("email")
const $form = document.querySelector("form")
const $contactsList = document.querySelector("tbody")

console.log($inputemail);

let contactos = []
// event.preventDefault

//reflejamos el contenido en el html
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
    console.log(`nombre: ${$inputName.value}`);
    console.log(`email: ${$inputemail.value}`);
    
    //clave valor:
    const newContact ={
        name: $inputName.value,
        email: $inputemail.value
    }

    contactos.push(newContact)
    $form.reset() //cuando hagamos clic se reseteara los valores de los inputs asi se limpia el campo y podemos escribir uno nuevo
    console.log(contactos);

    renderContact()
    
}

$form.addEventListener("submit", sendForm)