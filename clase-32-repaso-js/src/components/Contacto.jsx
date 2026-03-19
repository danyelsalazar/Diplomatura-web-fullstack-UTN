import { useState } from "react";

const Contacto = ()=>{

    const [formData, setFormData] = useState({
        email: "",
        consulta: "",
        confirmacion: null
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(e.target.email.value);
        setFormData(prev => (
            {
                ...prev,
                confirmacion: true
            }
        ))
        e.target.reset()
        
    }

    const handleChange = (e)=>{
        console.log(e.target.value);
        
        setFormData(prev => (
            {...prev,
                email: e.target.value
            }
        ))
        
    }

    const handleonClick = ()=>{
        setFormData(prev=> (
            {
                ...prev,
                confirmacion: null
            }
        ))
    }

    return(
        <section>
            <h2>Contactanos</h2>
            {
                formData.confirmacion
                ? <div>
                    <p>Formulario enviado con exito</p>
                    <button onClick={handleonClick}>Ver formulario de nuevo</button>
                  </div>
                : <form onSubmit = {handleSubmit}>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                <textarea placeholder="Tu consulta"></textarea>
                <button type="submit">Enviar</button>
                {
                    formData.confirmacion && <p>formulario enviado co exito</p>
                }
            </form>
            }
        </section>
    )
}

export {Contacto}