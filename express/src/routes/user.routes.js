import { Router }  from "express";

const router = Router();

const users = []

router.get('/users', (req, res)=>{
    res.json(users);
})

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



export {router}