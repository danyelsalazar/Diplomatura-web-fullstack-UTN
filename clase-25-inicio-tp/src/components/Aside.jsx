import { useEffect, useState } from "react"

const Aside= ()=>{

    const [search, setSearch] = useState("")
    const [contactos, setContactos] = useState([])

    const fecchinContactos = async ()=>{
        try {
            const response = await fetch("https://dummyjson.com/users") 
            
            if(!response.ok){
                throw new Error("No se pudo cargar la api")
            }

            const data = await response.json()
            // console.log(data.users);
            setContactos(data.users)

        } catch (e) {
            console.error(e.message);
            
        }
    } 

    useEffect(()=>{
        fecchinContactos()
    },[])

    const handleChange= (e)=>{
        // console.log("modificando input");
        setSearch(e.target.value)
        
    }

    const filterContacts = contactos.filter((contacto)=> contacto.firstName.toLowerCase().includes(search.toLowerCase()) || contacto.lastName.toLowerCase().includes(search.toLowerCase()))
    // console.log(filterUsers);
    

    return(
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar contactos..." onChange={handleChange} className="search"/>
            <ul>
                {
                    filterContacts.length === 0 && <li>No se encontro el contacto</li>
                }
            {
                filterContacts.map((contact)=>(
                    <li key={contact.id}>
                        <div className="container-img-chat">
                            <img src={contact.image} alt="" />
                        </div>
                        <div className="container-descripcion-chat">
                            <h3>{contact.firstName} {contact.lastName}</h3>
                            <small>{contact.address.state}</small>
                        </div>
                    </li>
                ))
            }
            </ul>
        </aside>
    )
}
export {Aside}