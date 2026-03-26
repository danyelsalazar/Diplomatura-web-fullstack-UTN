import fs from "node:fs";
import path from "node:path";

interface User {
    id: number,
    name: string,
    edad: number
}

const URL = path.join(__dirname, "../src/data/data.json");

// retorna una lista de usuarios ->  usuarios[]

const leerUsuarios = (ruta: string): User[] => {
  try {
    const data = fs.readFileSync(ruta, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo el archivo:", error);
    return [];
  }
};

const usuarios = leerUsuarios(URL)
// console.log(usuarios);

let user3 = {
    id: 3,
    name: "juan",
    edad: 28  
}

usuarios.push(user3)

console.log(usuarios);



const agregarUsuario = (ruta: string, usariosActualizados: User[]): void =>{
    fs.writeFileSync(ruta, JSON.stringify(usariosActualizados))
}

agregarUsuario(URL, usuarios)