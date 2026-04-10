// aqui definiremos las rutas para los usuarios

import {Router} from "express";

import { getAllUsers,
        createUserController,
        getUser,
        deletUserController,
        updateUsercontrollers
} from "../controllers/user.controller.js";

// creamos el router
const router = Router();

// definimos las rutas
router.get("/users", getAllUsers);
router.post("/users", createUserController);
router.get("/users/:id", getUser)
router.delete("/users/:id", deletUserController)
router.put("/users/:id", updateUsercontrollers)

export {router}