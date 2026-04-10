// aqui manejaremos las funciones que se encargan de recibir las peticiones, procesarlas y devolver una respuesta, es decir, la logica de cada endpoint, pero sin manejar la logica de negocio, eso se hace en el service
import { getUsers,getUserById, createUser , deleteUser, updateUser} from "../services/user.service.js";

// traemos los usuarios y los devolvemos en la respuesta
export const getAllUsers = (req, res) =>{
    const users = getUsers();
    res.json(users)
}

// creamos un usuario y manejamos posibles errores
export const createUserController = (req, res) =>{
    const {nombre, edad} = req.body

    if(!nombre || !edad){
        return res.status(400).json({
            error: "Faltan datos"
        })
    }

    const newUser = createUser(nombre, edad)
    res.status(200).json(newUser)
}

// traemos un usuario por su id

export const getUser = (req, res)=>{
    const id = req.params.id;

    const user = getUserById(id)

    if(!user){
        return res.status(404).json(
            {
                error: "El usuario que buscas no existe"
            }
        )
    }

    res.status(200).json(user)
}

// eliminamos usuario por id
export const deletUserController = (req, res)=>{
    // obtenemos el id pasado en los parametros de la ruta
    const id = req.params.id
    const userDelete = deleteUser(id)

    console.log(userDelete);
    

    if(!userDelete){
        return res.status(404).json(
            {
                error: "El usuario que intentas eliminar no existe"
            }
        )
    }

    res.status(200).json(
        {
            message: `Usuario de id: ${id} elimiando`
        }
    )
}

// actualizamos el user
export const updateUsercontrollers = (req,res)=>{
    const id =  req.params.id
    const {nombre, edad} = req.body

    if(!nombre || !edad){
        res.status(400).json(
            {
                error: "Falto ingresar mas datos"
            }
        )
    }else{

        const  userUpdate = updateUser(id, nombre, edad)
    
        if(!userUpdate){
            res.status(404).json(
                {
                    error: "el usuario que quieres actualizar no existe"
                }
            )
        }
        res.status(200).json(userUpdate)
    }

}