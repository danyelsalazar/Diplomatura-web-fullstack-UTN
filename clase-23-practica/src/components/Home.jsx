
import { useState, useEffect} from "react"
//un estado es una variable que cuando se ac tualiza refresca la UI

const Home = ()=>{

    let [name, setName] = useState("Mateo")//el valor puede ser un objeto, un arreglo, un numero, un string.....

    const [products, setProduct] = useState([])

    const handelClick = ()=>{
        console.log("Hiciste click");
        
        name === "Mateo" ? setName("Pedro") : setName("Mateo")
    }

    const fetchingData = async()=>{
        try{
            const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            if(response.ok){
                const data = await response.json()
                setProduct(data)
                console.log(...products, data);
                
            }
        }catch(error){
            console.log(error);
            
        }
    }

    //ehjecuta un efecto secundario, es decir trae la data solo luego de que renderice el componente
    useEffect(()=>{
        fetchingData()
    },{})

    return(
        <>
        <main className={`${"container"} ${"padre"}`}>
            <h1 className="title">Welcome {name}, to the Home page</h1>
            <button onClick={handelClick}>Cambiar name</button>
            <section>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo accusamus distinctio earum inventore expedita officia, quam excepturi sed blanditiis.</p>
            </section>
            <article>
                <h2>Lates New</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </article>
            <section>
                <ul>

                {
                    products.map((product)=>{
                        return(
                        <div className="target-product">
                            <img src={product.api_featured_image} alt="" />
                            <h2>{product.name}</h2>
                            <p>{product.price_sign}{product.price}</p>
                            <p>{product.description}</p>
                            <p>{product.category}</p>
                        </div>
                        )
                    })
                }
                </ul>
            </section>
        </main>
        <footer>
            <p>&COPY; 2024 My Website</p>
        </footer>
        </>
    )
}

export {Home}