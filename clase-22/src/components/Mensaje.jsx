
//destructuring



const data = {
    id: 1,
    nombre: "Pepe"
}

const {nombre} = data




//hacemos desrtructuring directo en las propiedades de la funcion 
const Mensaje = ( {text, send, time} )=>{
    return(
    <>
    <div className={`${send} contenedor-text`}>
        <h2>{text}</h2>
        <small>{time}</small>
    </div>
    </>
    )
}

export { Mensaje }