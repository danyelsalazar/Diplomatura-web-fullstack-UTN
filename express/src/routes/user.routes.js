import { Router }  from "express";

const router = Router();

const users = []

// traer usuarios
router.get('/users', (req, res)=>{
    res.json(users);
})

// cargar nuevo usuario
router.post("/users", (req, res)=>{
    const {nombre, edad} = req.body;

    // validacion basica
    if(!nombre || !edad){
        return res.status(400).json({
            error: "Faltan datos (nombre o edad)"
        })
    }

    const newUser = {
        id: users.length+1,
        nombre,
        edad
    }

    users.push(newUser)
    console.log(users);
    
    res.status(201).json(newUser)
})


// Eliminar usuario por id

router.delete("/users/:id", (req, res)=>{

    console.log("Entró al DELETE");

    const id = Number(req.params.id)

    const index = users.findIndex(user => user.id === id)

    // hacemos una validacion en caso de no encontrar el usuario
    if(index === -1){
        return res.status(404).json(
            {
                error: "Usuario no encontrado"
            }
        );
    }

    // eliminamos el elemnento(el usuario)
    users.splice(index,1)
    console.log("Usuario eliminado");
    
    res.json(
        {
            message: "Usuario eliminado"
        }
    );
})

// Actualizacion de usuario por id

router.put("/users/:id", (req,res)=>{

    const id = Number(req.params.id);
    const {nombre, edad} = req.body;

    const user = users.find((user)=> user.id === id)

    // hacemos unas validaciones de error

    if(!user){
        return res.status(404).json(
            {
                error: "El usuario que intentas actualizar no existe"
            }
        )
    }

    if(!nombre || !edad){
        return res.status(404).json(
            {
                error: "datos incompletos"
            }
        )
    }

    user.nombre = nombre
    user.edad = edad

    res.json(user)

})

export {router}