import { fechaActual } from "../utils/fechaActual"
import { Beneficio } from "./Beneficio"
import { beneficiosData } from "./beneficiosData"

const Beneficios = ()=>{
    return(
        <section>
            <h2>Nuestros beneficios</h2>
            <ul>
                <p>fecha: {fechaActual()}</p>
                {
                    beneficiosData.map((beneficio)=>{
                        return <Beneficio key={beneficio.id} beneficio={beneficio}/>
                    })
                }
            </ul>
        </section>
    )
}

export {Beneficios}