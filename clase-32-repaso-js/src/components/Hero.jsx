const Hero = ({titulo, slogan = "Sin slogan"})=>{
    return(
        <section>
            <h1>{titulo}</h1>
            <h3>{slogan}</h3>
        </section>
    )
}

export {Hero}