import { users } from "../services/api"
import { useState } from "react"

const Aside= ()=>{

    const [search, setSearch] = useState("")

    const handleChange= (e)=>{
        // console.log("modificando input");
        setSearch(e.target.value)
        
    }

    const filterUsers = users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()))
    // console.log(filterUsers);
    

    return(
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar contactos..." onChange={handleChange}/>
            <ul>
            {
                filterUsers.map((user)=>(
                    <li>{user.name}
                    <small>{user.status}</small>
                    </li>
                ))
            }
            </ul>
        </aside>
    )
}
export {Aside}