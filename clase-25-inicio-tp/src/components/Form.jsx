//--------------------------------
//-----Practica formulario--------
//-----------------------------------
import { useState } from "react"

const Form = ()=>{

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            email,
            password
        });
        //limpiamos el formulario reiniciando los valores de los estados
        setEmail("")
        setPassword("")
        
    }

    const handleChange = (e)=>{
        console.log(e.target);
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value) 
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required name="email" onChange={handleChange} value={email}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={password}/>
            <button>Enviar</button>
        </form>
        {!email && <p>No hay valor inicial</p>}
        {email && <p>Valor actualizado: {email}</p>}
        </>
    )
}
export {Form}