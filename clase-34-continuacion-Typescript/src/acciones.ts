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

// console.log(usuarios);

const escribirArchivo = (ruta: string, usariosActualizados: User[])=>{
    fs.writeFileSync(ruta, JSON.stringify(usariosActualizados))
}

const agregarUsuario = (ruta: string, usariosActualizados: User[]): string =>{
    escribirArchivo(ruta, usariosActualizados)
    return "Usuario agregado"
}

const actualizarUsuario = (ruta: string, id: number, data: Partial<User>): string | User=>{
    // paso 1 leo los usuarios
    const usuarios = leerUsuarios(ruta)
    // paso 2 verifico si existe el usuario
    const existeUusuario = usuarios.find((user)=> user.id === id)

    if(!existeUusuario){
        return "El usuario no se encontro"
    }
    let usuarioActualizado = existeUusuario

    // paso 3 mapeo para actualizar
    const usuariosActualizados = usuarios.map((user)=> {
        if(user.id !== id){
            return user
        }else{
            usuarioActualizado = {...usuarioActualizado, ...data}
            return {...user, ...data }
        }
    })


    // paso 4 actualizo el archivo 
    escribirArchivo(URL, usuariosActualizados)
    // paso 5 retorno el usuario actualizado al cliente
    return usuarioActualizado
}

const borrarUsuario = (ruta: string, id: number): User | string =>{
    // paso 1
    const usuarios = leerUsuarios(ruta)
    //paso 2 obtenemos el usuario completo que queremos eliminar
    const usuarioABorrar = usuarios.find((user) => user.id === id)
    // paso 3 usamos filter para traer todos menos el que vamos a eliminar
    const usuariosActualizados = usuarios.filter((user) => user.id !== id)

    if(!usuarioABorrar){
        return "Usuario no nencontrado"
    }

    escribirArchivo(ruta, usuariosActualizados)
    
    return usuarioABorrar
}

export { leerUsuarios, agregarUsuario, actualizarUsuario, borrarUsuario }