const Beneficio = ({beneficio})=>{
    const {id, titulo, descripcion} = beneficio
    return(
        <>
        <li>
            <p>{id}</p>
            <h4>{titulo} </h4>
            <p>{descripcion}</p>
        </li>
        </>
    )
}

export {Beneficio}