import path from "node:path";
import { leerUsuarios,actualizarUsuario,agregarUsuario, borrarUsuario } from "./acciones";

const URL = path.join(__dirname, "../src/data/data.json");

const usuarios = leerUsuarios(URL)

// let user3 = {
//     id: 3,
//     name: "juan",
//     edad: 28  
// }

// usuarios.push(user3)

// console.log(agregarUsuario(URL, usuarios))

console.log(borrarUsuario(URL, 3))


console.log(actualizarUsuario(URL, 1, {name: "pedro"}));
