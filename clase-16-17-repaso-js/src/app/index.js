const $inputName = document.getElementById("name")
const $inputemail = document.getElementById("email")
const $form = document.querySelector(".inputs")
const $contactsList = document.querySelector("tbody")
const $formActualizacion = document.getElementById("formActualizacion")
const $inputNameActualizado = document.getElementById("name-actualizado")
const $inputEmailActualizado = document.getElementById("email-actualizado")
const $containactualizacion = document.querySelector(".container-actualizacion")
const $btnCancelarActuali = document.getElementById("cancelar-Actualizacion")
const $formFilter = document.getElementById("formFilter")
const $inputSearchContact = document.getElementById("search-contact")

//----------------------------------------------
//------- 0 Renderizar lo que hay al iniciar la pagina
//----------------------------------------------

document.addEventListener("DOMContentLoaded", () => renderContacts(contactos))

//----------------------------------------------
//------- 1 crear nuestro arreglo de objetos 
//----------------------------------------------

let contactos = JSON.parse(localStorage.getItem("lista")) || [];
// console.log(contactos);

//--creamos una variable que voy a usar para editar los contactos
contactoIdEnEdicion = null

//----------------------------------------------
//------- 2 cargar contactos al arreglo y localStorage 
//----------------------------------------------

$form.addEventListener("submit", sendContact);

function sendContact(e){
    //evitamos que se recargue la pagina al enviar el formulario
    e.preventDefault()
    
    let name = $inputName.value
    let email = $inputemail.value 

    // validamos que el contacto sea apto para registrarlo o que no se repita en la lista:

    if(contactos.length === 0){ //agregando contacto por primera vez:
        crearContacto(name, email)
    }
    else if(validarDatosContacto(email)){
        crearContacto(name, email)
    }
    else{
        $form.reset()
        return alert("el contacto ya existe")
    }
    $form.reset()

    renderContacts(contactos)
}
//--------------- funcion para crear contacto ------------------
const crearContacto = (name, email)=>{
    let contacto = {
            id: crypto.randomUUID(),
            name,
            email
        }
        //uso operador (...) spread operator para no tocar el arreglo original con un push ya que no se recomienda , creamos uno nuevo que tendra lo anterior del original + el nuevo contacto:
        contactos = [...contactos, contacto]

        // console.log(contacto.name, contacto.email, contacto.id);

        //guardamos el arreglo contactos en el localStorage:
        cargarLocalStorage()
}

//-------------- funcion para validar contacto al momento de agregar:-------

const validarDatosContacto = (email)=>{
    let validacion = true

    contactos.forEach((contacto) => {
        if(contacto.email === email){
            return validacion = false //si encuentra un email igual pasa a ser false para no crear un nuevo contacto
        }
    })
    return validacion;
}

//-------------------
//-------- funcion para carga de localStorage
//----------
const cargarLocalStorage = ()=>{
    let contactosString = JSON.stringify(contactos)//convertimos el arreglo de contactos en string
        localStorage.setItem("lista", contactosString)//vamos guardando el arreglocontacto en el localStorage, cada vez que carguemos o actualicemos un contacto el string  que es un "arreglo" se ira modificando
}

//----------------------------------------------
//------- 3 renderizar nuestros contactos por pantalla
//----------------------------------------------

const renderContacts = (ListaContactos)=>{
    let bloqueAcomulado = ``

    if(ListaContactos.length === 0){
        bloqueAcomulado = `<tr>
        <td>No se encontro el contacto</td>
        </tr>`
    }else{
        ListaContactos.forEach((contact) =>{
            bloqueAcomulado += `<tr>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td><button class= "editar-contact" data-action = "editar" data-id = ${contact.id}>Editar</button>
                <button class ="eliminar-contact" data-action = "eliminar" data-id = ${contact.id}>Eliminar</button></td> 
            </tr>`
        })
    }
    $contactsList.innerHTML = bloqueAcomulado
}

//----------------------------------------------
//------- 4 escuchamos el click del usario sobre los contactos 
// para saber si quiere eliminar o editar un contacto
//----------------------------------------------

$contactsList.addEventListener("click", (e)=>{
    //verificamos a que elemnto dio click si fue al boton de editar o eliminar tomamos accion segun sea el caso
    if(e.target.dataset.action === "editar"){
        // console.log("editar");
        editarContact(e.target.dataset.id)
    }
    else if(e.target.dataset.action === "eliminar"){
        // console.log("eliminar");
        eliminarContact(e.target.dataset.id)
    }
})

//---- funcion de eliminar contacto:
//----------------------------------
const eliminarContact = (id) =>{
    if(confirm(`Seguro que seseas eliminar el contacto? `)){
        //creamos un nuevo arreglo que no incluya el que eliminamos , usando filter:
        let contactosRenovado = contactos.filter(contacto => contacto.id !== id);
        // console.log(contactosRenovado);
        contactos = contactosRenovado //le asignamos ese arreglo al arrelgo original
        renderContacts(contactos)//renderizamos el contendio
        cargarLocalStorage()//reflejamos el nuevo arreglo en el localStorage
    }
}

//---------------------------------
//------ funcion de editar contacto
//---------------------------------
const editarContact = (id)=>{
    //hacemos aparecer el contenedor de actualizacion en el html:
    $containactualizacion.classList.add("container-actualizacion-view")

    contactoIdEnEdicion = id
    //precargamos los datos anteriores del contacto en el input para que sepamos que habia antes:
    contactos.forEach((contacto)=>{
        if(contacto.id === id){
            $inputNameActualizado.value = contacto.name
            $inputEmailActualizado.value = contacto.email
            return
        }
    })
}
//---------------------
// --------escuchamos el submit del formulario actualizacion:-----

$formActualizacion.addEventListener("submit", (e)=>{
    e.preventDefault()

    //buscamos el contacto a actualizar asi lo podemos manipular:
    let contactoEditar = contactos.find( contacto => contacto.id === contactoIdEnEdicion)

    // console.log(contactoEditar);
    
    //creamos un contacto copia con el mismo id pero con los datos actualizados:
    let contactoActualizado = {
        id: contactoIdEnEdicion,
        name: $inputNameActualizado.value,
        email: $inputEmailActualizado.value
    }

    //1 if: verificamos si estamos editando el mismo contacto asi podemos mantener el mismo email y no interfiere la validacion
    //2 elseif:llamamos a la funcion validarContacto para verificar si existe otro contacto con el mismo email
    //3 else: mandamos una alerta en caso de que el mail se repita en otro contacto
    if(contactoEditar.email === contactoActualizado.email){
        cargarContactoActualizado(contactoActualizado)
    }else if(validarDatosContacto(contactoActualizado.email)){
        // console.log("actualizando con nuevo email");
        cargarContactoActualizado(contactoActualizado)
    }else{
        alert("el email ya existe para otro contacto")
    }

    $formActualizacion.reset()

    $containactualizacion.classList.remove("container-actualizacion-view")

    //reiniciamos la variable contactoIdEdicion cada vez que cerramos el formulario
    contactoIdEnEdicion = null
    
})
//en caso de cancelar la actualizacion cerramos el formulario de actuializacion:
$btnCancelarActuali.addEventListener("click", ()=> $containactualizacion.classList.remove("container-actualizacion-view"))
//----proceso de carga del contacto actualizado:
const cargarContactoActualizado = (contactoActualizado)=>{
    //creamos un nuevo arreglo com map y en la funcion modificamos el contacto si coinciden los id, si no coinciden dejamos el mismo contacto que este iterando:
    let contactosActualizados = contactos.map(contacto => contacto.id == contactoIdEnEdicion ? contactoActualizado : contacto)
    
    // console.log(contactosActualizados);

    //actualizamos el arreglo de contactos con la nueva actualizacion del contacto:
    contactos = contactosActualizados
    
    cargarLocalStorage() //reflejamos la informacion en el localStorage

    renderContacts(contactos) //rendererizamos la lista de contactos actualizada:
}


//-------------------------------------------------
//--------- 5 funcion para buscar contacto ---------
//-------------------------------------------------

$inputSearchContact.addEventListener("input", ()=>{
    
    let transformInputToLowerCase = $inputSearchContact.value.toLowerCase()

    //filtramos por nombre o email cualquiera de los dos
    let filtercontacts = contactos.filter((contacto)=>{
        let contactMinusculaName = contacto.name.toLowerCase()
        let contactminusculaEmail = contacto.email.toLowerCase()
        //nos devuelve truesi cumple alguna de las condiciones o false si no cumple ninguna
        return contactMinusculaName.includes(transformInputToLowerCase) || contactminusculaEmail.includes(transformInputToLowerCase) 
        
    })
    // console.log(filtercontacts);
    renderContacts(filtercontacts)
})

//evito que se recargue la pagina si el usuario hace un submit
$formFilter.addEventListener("submit", (e)=>{
    e.preventDefault()
})